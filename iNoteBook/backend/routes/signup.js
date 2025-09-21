import { Router } from 'express';
import User from '../models/User.js';
import { body, validationResult } from 'express-validator';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const signUpRouter = Router();

const jwtSecret = "@mysecrettoken";

signUpRouter.post(
    '/',
    [
        body('name', 'Enter a valid name').isLength({ min: 3 }),
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: 'Email already exists, please Sign In' });
            }
            const salt = await bcryptjs.genSalt(10);
            const hashPassword = await bcryptjs.hash(req.body.password, salt);
            User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashPassword,
                date: req.body.date
            });
            const jwtToken  = jwt.sign({ id: User.id }, jwtSecret);
            res.json({ jwtToken });
        }
        catch (err) {
            console.log(err);
            res.json({ message: err.message });
        };
    }
);


