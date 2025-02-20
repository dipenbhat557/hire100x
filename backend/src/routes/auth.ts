import { Request, Response, Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { loginSchema, signupSchema } from "../types";
import { prisma } from "../db/prisma";
import { z } from "zod";


export const authroutes = Router();

// Sign up route
authroutes.post('/signup', async (req: Request, res: Response): Promise<void> => {
    try {
      const validatedData = signupSchema.parse(req.body);
      
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email: validatedData.email }
      });
  
      if (existingUser) {
        res.status(400).json({ error: 'Email already registered' });
        return;
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(validatedData.password, 10);
  
      // Create user transaction with profile
      const result = await prisma.$transaction(async (tx) => {
        // Create base user
        const user = await tx.user.create({
          data: {
            email: validatedData.email,
            password: hashedPassword,
            name: validatedData.name,
            role: validatedData.role,
          },
        });
  
        // Create profile based on role
        if (validatedData.role === 'FREELANCER' && 
            validatedData.title && 
            validatedData.description && 
            validatedData.hourlyRate && 
            validatedData.yearsOfExperience) {
          await tx.freelancer.create({
            data: {
              userId: user.id,
              title: validatedData.title,
              description: validatedData.description,
              hourlyRate: validatedData.hourlyRate,
              skills: validatedData.skills || [],
              yearsOfExperience: validatedData.yearsOfExperience,
            },
          });
        } else if (validatedData.role === 'RECRUITER' && 
                   validatedData.companyName && 
                   validatedData.position) {
          await tx.recruiter.create({
            data: {
              userId: user.id,
              companyName: validatedData.companyName,
              position: validatedData.position,
            },
          });
        }
  
        return user;
      });
  
      // Generate JWT token
      const token = jwt.sign(
        { userId: result.id, role: result.role },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '24h' }
      );
  
      res.status(201).json({
        message: 'User created successfully',
        token,
        user: {
          id: result.id,
          email: result.email,
          name: result.name,
          role: result.role,
        },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
        return;
      }
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Login route
  authroutes.post('/login', async (req: Request, res: Response): Promise<void> => {
    try {
      const validatedData = loginSchema.parse(req.body);
  
      // Find user
      const user = await prisma.user.findUnique({
        where: { email: validatedData.email },
        include: {
          freelancer: true,
          recruiter: true,
        },
      });
  
      if (!user) {
        res.status(401).json({ error: 'Invalid credentials' });
        return;
      }
  
      // Verify password
      const validPassword = await bcrypt.compare(validatedData.password, user.password);
      if (!validPassword) {
        res.status(401).json({ error: 'Invalid credentials' });
        return;
      }
  
      const token = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '24h' }
      );
  
      // Prepare profile data based on role
      const profile = user.role === 'FREELANCER' ? user.freelancer : user.recruiter;
  
      res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          profile,
        },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
        return;
      }
      res.status(500).json({ error: 'Internal server error' });
    }
  });