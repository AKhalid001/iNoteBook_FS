import { Router } from 'express';
import Notes from '../../models/Notes.js';
import { body, validationResult } from 'express-validator';
import { fetchuser } from '../../middleware/fetchuser.js';

export const create = Router();

create.post('/',
    fetchuser,
    [
        // body('user').exists(),
        body('title', 'Title can not be empty').isLength({ min: 3 }),
        body('description', " issue").isLength({ min: 3 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const {title, description, tag } = req.body;

            const note = new Notes({
                title, description, tag, user: req.user.id
            });
            const savedNote = await note.save();
            res.json(savedNote);
        }
        catch (err) {
            console.log(err);
            res.json({ message: err.message });
        };
    });

