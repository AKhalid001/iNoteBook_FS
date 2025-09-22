import { Router } from 'express';
import Notes from '../../models/Notes.js';
import { fetchuser } from '../../middleware/fetchuser.js';

export const update = Router();

update.put('/:id',
    fetchuser,
    async (req, res) => {
        try {
            const {title, description, tag } = req.body;
            const newNote = {};
            if(title){newNote.title = title}
            if(description){newNote.description = description}
            if(tag){newNote.tag = tag}

            let note = await Notes.findById(req.params.id);
            if(!note){return res.status(404).send("Not Found")}
            if(note.user.toString() !== req.user.id){
                return res.status(401).send("Not Allowed");
            }
            note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
            res.json({note});
        }
        catch (err) {
            console.log(err);
            res.json({ message: err.message });
        };
    });

