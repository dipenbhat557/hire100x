import { Request, Response, Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { prisma } from "../db/prisma";


export const additionalRoutes = Router();

interface AuthRequest extends Request {
  user?: {
    userId: string;
    role: 'FREELANCER' | 'RECRUITER';
  }
}

// Get all recruiters (paginated)
additionalRoutes.get('/recruiters', async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const recruiters = await prisma.recruiter.findMany({
      skip,
      take: limit,
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    const total = await prisma.recruiter.count();

    res.json({
      data: recruiters,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        currentPage: page,
        perPage: limit,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete user account (and associated profile)
additionalRoutes.delete('/account', authMiddleware, async (req: AuthRequest, res: Response) => {
  try {
    await prisma.user.delete({
      where: { id: req.user?.userId },
    });

    res.json({ message: 'Account deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update user availability status (for freelancers)
additionalRoutes.patch('/freelancer/availability', authMiddleware, async (req: AuthRequest, res: Response) => {
  try {
    const { available } = req.body;

    if (typeof available !== 'boolean') {
      res.status(400).json({ error: 'Available status must be a boolean' });
      return;
    }

    const updatedFreelancer = await prisma.freelancer.update({
      where: { userId: req.user?.userId },
      data: { available },
    });

    res.json(updatedFreelancer);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});



// Search recruiters by company
additionalRoutes.get('/recruiters/search', async (req: Request, res: Response) => {
  try {
    const { company } = req.query;

    if (!company) {
      res.status(400).json({ error: 'Company name is required' });
      return;
    }

    const recruiters = await prisma.recruiter.findMany({
      where: {
        companyName: {
          contains: company as string,
          mode: 'insensitive',
        },
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    res.json(recruiters);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get top skills (most common among freelancers)
additionalRoutes.get('/skills/top', async (_req: Request, res: Response) => {
  try {
    const freelancers = await prisma.freelancer.findMany({
      select: {
        skills: true,
      },
    });

    const skillCount: Record<string, number> = {};
    freelancers.forEach(freelancer => {
      freelancer.skills.forEach(skill => {
        skillCount[skill] = (skillCount[skill] || 0) + 1;
      });
    });

    const sortedSkills = Object.entries(skillCount)
      .sort(([, a], [, b]) => b - a)
      .map(([skill, count]) => ({ skill, count }));

    res.json(sortedSkills);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});