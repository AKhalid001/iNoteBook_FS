import connectToMongo from './models/database.js';
import express from 'express';
import { signInRouter } from './routes/auth.js';
import { signUpRouter } from './routes/signup.js';

connectToMongo();

const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/signup', signUpRouter);
app.use('/signin', signInRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
