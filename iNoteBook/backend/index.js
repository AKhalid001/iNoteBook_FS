import connectToMongo from './database.js';
import express from 'express';
import cors from 'cors';
import { signUpRouter } from './routes/users/signup.js';
import { signInRouter } from './routes/users/signin.js';
import { userData } from './routes/users/user.js';
import { create } from './routes/notes/create.js';
import { read } from './routes/notes/read.js';
import { update } from './routes/notes/update.js';
import { deleteNote } from './routes/notes/delete.js';


connectToMongo();

const app = express();
const port= process.env.PORT || 5000;  // <-- backend on 5000

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/signup', signUpRouter);
app.use('/signin', signInRouter);
app.use('/userdata', userData);
app.use('/notes/create', create);
app.use('/notes/read', read);
app.use('/notes/update', update);
app.use('/notes/delete', deleteNote);


app.listen(port, () => {
  console.log(`Backend listening  at http://localhost:${port}`);
});
