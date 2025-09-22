import connectToMongo from './models/database.js';
import express from 'express';
import { signInRouter } from './routes/signin.js';
import { signUpRouter } from './routes/signup.js';
import { userData } from './routes/user.js';
import { fetchNotes } from './routes/viewnotes.js';
import { addNotes } from './routes/addnotes.js';

connectToMongo();

const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/signup', signUpRouter);
app.use('/signin', signInRouter);
app.use('/userdata', userData);
app.use('/fetchnotes', fetchNotes);
app.use('/addnotes', addNotes);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
