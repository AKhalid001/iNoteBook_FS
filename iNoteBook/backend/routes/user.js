import { Router } from 'express';
import User from '../models/User.js';
import { fetchuser } from '../middleware/fetchuser.js';


export const userData = Router();

userData.post('/', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const userData = await User.findById(userId).select("-password");
        res.json({userData});
    }
    catch (err) {
        console.log(err);
        res.json({ message: err.message });
    };
});


