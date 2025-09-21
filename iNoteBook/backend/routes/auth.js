import { Router } from 'express';
import User from '../models/User.js';
import { body, validationResult } from 'express-validator';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const signInRouter = Router();

const jwtSecret = "@mysecrettoken";

signInRouter.post(
    '/',
    [
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'please enter the password ').exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            let user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(400).json({ error: 'Email dose not exists, please Sign Up' });
            }else{
                const passwordCompare = await bcryptjs.compare(req.body.password, user.password);
                if(!passwordCompare){
                    return res.status(400).json({ error: 'Incorrect Credentials ' });
                }else{
                    const jwtToken  = jwt.sign({ id: user.id }, jwtSecret);
                    res.json({ jwtToken });
                }
            }
        }
        catch (err) {
            console.log(err);
            res.json({ message: err.message });
        };
    }
);


