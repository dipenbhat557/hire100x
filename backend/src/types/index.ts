import { z } from 'zod';


export const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(2),
    role: z.enum(['FREELANCER', 'RECRUITER']),
    // Freelancer specific fields
    title: z.string().optional(),
    description: z.string().optional(),
    hourlyRate: z.number().optional(),
    skills: z.array(z.string()).optional(),
    yearsOfExperience: z.number().optional(),
    // Recruiter specific fields
    companyName: z.string().optional(),
    position: z.string().optional(),
  });
  
export  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });


    // Update Freelancer Profile
   export const updateFreelancerSchema = z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      hourlyRate: z.number().optional(),
      skills: z.array(z.string()).optional(),
      yearsOfExperience: z.number().optional(),
      available: z.boolean().optional(),
    });


  // Update Recruiter Profile
 
  
     export const updateRecruiterSchema = z.object({
        companyName: z.string().optional(),
        position: z.string().optional(),
      });