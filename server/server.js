
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser'; 
import session from 'express-session'; 
import passport from 'passport';

// import AdminJS from 'adminjs';
// import AdminJSExpress from '@adminjs/express';
// import * as AdminJSMongoose from '@adminjs/mongoose';
// import signupRoute from './routes/signupRoute.js';
// import signinRoute from './routes/signinRoute.js';
import facebookRoute from './routes/facebookRoute.js';
import productRoute from './routes/productRoute.js';
// import cartRoute from './routes/cartRoute.js';
// import wishlistRoute from './routes/wishlistRoute.js';
// import checkoutRoute from './routes/checkoutRoute.js';
// import addressRoute from './routes/addressRoute.js';
// import razorpayRoute from './routes/razorpayRoute.js';
// import orderHistoryRoute from './routes/orderHistoryRoute.js';
import webpush from 'web-push';
import db from'./db.js'; 
import contentRoute from './routes/contentRoute.js'
import mobileSigninRoute from './routes/mobileSigninRoute.js'
import googleRoute from './routes/googleRoute.js'


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5050;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE', 'PUT' ],
  credentials: true,
}));
app.use(passport.initialize());
app.use(session({
  secret: 'session-key',
  resave: false,
  saveUninitialized: true,
}));

const apiKeys = {
  publicKey: 'BCoZetIZDVC9nbAkQmdXdLwXwXyEIYeuq1xpJ4Cnqc-TJdf3w9bkbD0JGu4v1kx7uuqBMHnKQPlkIaWPu5Er2uI',
  privateKey: 'Piwyy7draXGvTt-3NotAU2XvdOGronca3JtyorLp6N8'
};

webpush.setVapidDetails(
  'mailto:lakshmidevivalapudasu@gmail.com',
  apiKeys.publicKey,
  apiKeys.privateKey
);







 



// AdminJS.registerAdapter({
//   Resource: AdminJSMongoose.Resource,
//   Database: AdminJSMongoose.Database,
// });
 
// const adminJs = new AdminJS({
//   databases: [mongoose],
//   rootPath: '/adminpanel',
// });


// const adminRouter = AdminJSExpress.buildRouter(adminJs)
// app.use(adminJs.options.rootPath, adminRouter);

// Routes
// app.use('/signup', signupRoute);
// app.use('/user', signupRoute);
app.use('/auth', googleRoute);
app.use('/auth/facebook', facebookRoute);
// app.use('/api/user', signupRoute);
app.use('/products', productRoute);
app.use('/content', contentRoute);
// app.use('/',mobileSigninRoute);
app.use('/',mobileSigninRoute);
// app.use('/cart', cartRoute);
// app.use('/wishlist', wishlistRoute);
// app.use('/checkout', checkoutRoute);
// app.use('/address', addressRoute);
// app.use('/order', razorpayRoute);
// app.use('/orderhistory',orderHistoryRoute)
// app.use('/buynow',checkoutRoute)
// app.use('/order/update',orderHistoryRoute)
// app.use('/save-subscription',notificationRoute) 
// app.use('/',notificationRoute)

// app.get('/logout', (req, res) => {
//   req.logout((err) => {
//     if (err) {
//       return res.status(500).send({ message: 'Logout error' });
//     }
//     res.clearCookie('connect.sid');
//     res.status(200).send({ message: 'Logged out successfully' });
//   });
// });



 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

 

