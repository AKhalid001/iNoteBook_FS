import connectToMongo from './models/database.js';
import express from 'express';
import { authRouter } from './routes/auth.js';

connectToMongo();

const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
