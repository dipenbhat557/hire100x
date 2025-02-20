import { Request, Router } from "express";
import {  authMiddleware } from "../middleware/authMiddleware";
import { prisma } from "../db/prisma";
import { updateFreelancerSchema, updateRecruiterSchema } from "../types";
import {  Response } from "express";
import { z } from "zod";

export const profileRoutes = Router();

interface AuthRequest extends Request {
    user?: {
      userId: string;
      role: 'FREELANCER' | 'RECRUITER';
    }
  }
// Profile Routes

// Get Freelancer Profile
profileRoutes.get('/freelancer/profile', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
      const profile = await prisma.freelancer.findUnique({
        where: { userId: req.user?.userId },
        include: { user: true },
      });
  
      if (!profile) {
        res.status(404).json({ error: 'Profile not found' });
        return;
      }
  
      res.json(profile);
  
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

  
  profileRoutes.put('/freelancer/profile', authMiddleware, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
      const validatedData = updateFreelancerSchema.parse(req.body);
  
      const updatedProfile = await prisma.freelancer.update({
        where: { userId: req.user?.userId },
        data: validatedData,
      });
  
      res.json(updatedProfile);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
        return;
      }
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Get Recruiter Profile
  profileRoutes.get('/recruiter/profile', authMiddleware, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
      const profile = await prisma.recruiter.findUnique({
        where: { userId: req.user?.userId },
        include: { user: true },
      });
  
      if (!profile) {
        res.status(404).json({ error: 'Profile not found' });
        return;
      }
  
      res.json(profile);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

  profileRoutes.put('/recruiter/profile', authMiddleware, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
      const validatedData = updateRecruiterSchema.parse(req.body);
  
      const updatedProfile = await prisma.recruiter.update({
        where: { userId: req.user?.userId },
        data: validatedData,
      });
  
      res.json(updatedProfile);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
        return;
      }
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Search Routes
  
  // Search Freelancers
  profileRoutes.get('/freelancers/search', async (req: Request, res: Response) => {
    try {
      const { skills, minRate, maxRate, minExperience, available } = req.query;
  
      const whereClause: any = {};
  
      if (skills) {
        whereClause.skills = {
          hasSome: (skills as string).split(','),
        };
      }
  
      if (minRate || maxRate) {
        whereClause.hourlyRate = {
          ...(minRate && { gte: parseFloat(minRate as string) }),
          ...(maxRate && { lte: parseFloat(maxRate as string) }),
        };
      }
  
      if (minExperience) {
        whereClause.yearsOfExperience = {
          gte: parseInt(minExperience as string),
        };
      }
  
      if (available) {
        whereClause.available = available === 'true';
      }
  
      const freelancers = await prisma.freelancer.findMany({
        where: whereClause,
        include: {
          user: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      });
  
      res.json(freelancers);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
      
    }
  });
  
