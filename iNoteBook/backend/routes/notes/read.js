import { Router } from 'express';
import Notes from '../../models/Notes.js';
import { fetchuser } from '../../middleware/fetchuser.js';

export const read = Router();

read.get('/', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id});
        res.json(notes);
    }
    catch (err) {
        
        res.json({ message: err.message });
    };
});


