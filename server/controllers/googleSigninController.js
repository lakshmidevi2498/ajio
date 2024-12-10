// const express = require('express');
// const router = express.Router();
// const axios = require('axios');
// const User = require('./models/User'); // Your user model
// const jwt = require('jsonwebtoken');
// const secretKey = process.env.JWT_SECRET; // Store this in a secure environment variable

// const generateToken = (user) => {
//     const payload = { userId: user._id, email: user.email };
//     return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
//   };
  
//   // Handle Google OAuth 2.0 redirect
//   app.post('/auth/google', async (req, res) => {
//     const { tokenId } = req.body;
  
//     // Validate Google token
//     const verify = async (token) => {
//       const { data } = await axios.post(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);
//       return data;
//     };
  
//     const userData = await verify(tokenId);
  
//     // Find or create user
//     const user = await User.findOneAndUpdate(
//       { email: userData.email },
//       {
//         name: userData.name,
//         picture: userData.picture,
//       },
//       { new: true, upsert: true }
//     );
  
//     // Generate JWT token
//     const token = generateToken(user);
  
//     res.json({ token, user });
//   });

// module.exports = router;
