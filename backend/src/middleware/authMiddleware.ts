import { Request, Response, Router, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export const router = Router();

// Middleware for JWT verification
interface AuthRequest extends Request {
  user?: {
    userId: string;
    role: 'FREELANCER' | 'RECRUITER';
  }
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
     res.status(401).json({ error: 'Access token required' });
     return
    }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.user = decoded as { userId: string; role: 'FREELANCER' | 'RECRUITER' };
    next();
  } catch (error) {
     res.status(403).json({ error: 'Invalid token' });
     return
  }
};