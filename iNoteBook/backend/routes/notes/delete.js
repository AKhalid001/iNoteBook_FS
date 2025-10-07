import { Router } from 'express';
import Notes from '../../models/Notes.js';
import { fetchuser } from '../../middleware/fetchuser.js';

export const deleteNote = Router();

deleteNote.delete('/:id',
    fetchuser,
    async (req, res) => {
        try {
            let note = await Notes.findById(req.params.id);
            if(!note){return res.status(404).send("Not Found")}
            if(note.user.toString() !== req.user.id){
                return res.status(401).send("Not Allowed");
            }
            note = await Notes.findByIdAndDelete(req.params.id)
            res.json({"Success":"Note has been deleted", note: note});
        }
        catch (err) {
            
            res.json({ message: err.message });
        };
    });

