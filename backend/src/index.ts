import express from 'express';
import cors from 'cors';
import { authroutes } from './routes/auth';
import { profileRoutes } from './routes/profileRoutes';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

//Auth Routes
app.use("/auth", authroutes);
app.use("/profile", profileRoutes);


// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
