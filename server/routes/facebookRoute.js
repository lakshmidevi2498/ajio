import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken'; 
import '../passport.js';   

const router = express.Router();
const allowedOriginsFrontend = process.env.NODE_ENV === 'production' 
? 'https://ajio-2.onrender.com' 
: 'http://localhost:3000';



router.get('/', (req, res, next) => {
  console.log('Facebook Auth route hit');
  passport.authenticate('facebook', {
    scope: ['email', 'public_profile']
  })(req, res, next);
});

router.get('/callback',
  (req, res, next) => {
    console.log("Facebook callback route hit");
    next();
  },
  passport.authenticate('facebook', { failureRedirect: '/' }),
  async (req, res) => {
    try {
      if (!req.user) {
        console.error('User not found after Facebook authentication');
        return res.status(400).send({ message: 'User not authenticated' });
      }
      console.log("req.user", req.user);
      const payload = {
        user: {
          id: req.user.id,
        },
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
      console.log('Generated token:', token);

      const user = {
        id: req.user.id,
        username: req.user.name,
        email: req.user.email,
        avatar: req.user.avatar,
      };

      const query = new URLSearchParams({
        token: token,
        id: user.id,
        name: user.username,
        email: user.email,
        avatar: user.avatar,
        authType: "facebook"
      }).toString();
      console.log("query", query);
      res.redirect(`${allowedOriginsFrontend}?${query}`);
    } catch (error) {
      console.error('Error during Facebook callback:', error);
      res.status(500).send({ message: 'Server Error' });
    }
  }
);

export default router;
