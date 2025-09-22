import { Router } from 'express';
import Notes from '../models/Notes.js';
import { fetchuser } from '../middleware/fetchuser.js';


export const fetchNotes = Router();

fetchNotes.get('/', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id});
        res.json(notes);
    }
    catch (err) {
        console.log(err);
        res.json({ message: err.message });
    };
});


