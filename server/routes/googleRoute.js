import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import userSchemaModal from '../models/userSchemaModal.js';
import '../passport.js';

const router = express.Router();
const allowedOriginsFrontend = process.env.NODE_ENV === 'production' 
? 'https://ajio-2.onrender.com' 
: 'http://localhost:3000';

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
}));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    async (req, res) => {
        try {
            const payload = {
                user: {
                    id: req.user.id,
                },
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
            console.log('Generated token:', token);

            const user = {
                id: req.user.id,
                name: req.user.name,
                email: req.user.email,
                avatar: req.user.avatar,
            };
console.log(",user",user)
            const query = new URLSearchParams({
                token: token,
                id: user.id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                authType: "google"
            }).toString();

            console.log("query", query);

            res.redirect(`${allowedOriginsFrontend}/?${query}`);
            // res.status(200).json({message:"Google login successfull" ,user,token })
         } catch (error) {
            console.error('Error during Google callback:', error);
            res.status(500).send({ message: 'Server Error' });
        }
    }
);

export default router;
