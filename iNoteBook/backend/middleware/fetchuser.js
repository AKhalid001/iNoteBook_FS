import jwt from 'jsonwebtoken';
import { jwtSecret } from '../helper.js';


export const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const jwtToken = req.header('auth-token');
    console.log(jwtToken);
    if (!jwtToken) {
        return res.status(401).json({ error: "Access denied" });
    }
    try {
        const data = jwt.verify(jwtToken, jwtSecret);
        req.user = data;
        next();
    } catch (error) {
        res.status(401).json({ error: "Access denied" });
    }
}

