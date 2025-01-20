import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import path from 'path'
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import * as AdminJSMongoose from '@adminjs/mongoose';
import facebookRoute from './routes/facebookRoute.js';
import productRoute from './routes/productRoute.js';
import cartRoute from './routes/cartRoute.js';
import wishlistRoute from './routes/wishlistRoute.js';
import addressRoute from './routes/addressRoute.js';
import razorpayRoute from './routes/razorpayRoute.js';
import contentRoute from './routes/contentRoute.js'
import mobileSigninRoute from './routes/mobileSigninRoute.js'
import googleRoute from './routes/googleRoute.js'
import userRoute from './routes/userRoute.js'
import orderRoute from './routes/orderRoute.js'
import adminRoute from './routes/adminRoute.js'
import wishlistSchema from './models/wishlistModal.js'
import invoiceRoute from './routes/invoiceRoute.js'
import db from './db.js'
import { fileURLToPath } from 'url';
import MongoStore from 'connect-mongo';
// import connectMongo  from 'connect-mongo'



dotenv.config();
const app = express();
const PORT = process.env.PORT || 5050;

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(express.json());
app.use(cors({
  origin: 'https://ajio-7e20.onrender.com',
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true,

}));
console.log("1")
app.use(passport.initialize());
// app.use(session({
//   secret: 'session-key',
//   resave: false,
//   saveUninitialized: true,
// }));
app.use(
  session({
    secret: 'session-key', 
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI, 
    }),
    cookie: {
      secure: process.env.NODE_ENV === 'production',
    },
  })
);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

const adminJs = new AdminJS({
  databases: [mongoose],
  rootPath: '/adminpanel',
  resources: [
    {
      resource: wishlistSchema,
      options: {
        actions: {
          edit: {
            isAccessible: () => false,
          },
          delete: {
            isAccessible: () => false,
          },
          create: {
            isAccessible: () => false,
          },
        },
      },
    },
    {
      resource: mongoose.model('Order'),
      options: {
        properties: {
          cart: {
            type: 'referenced',
            ref: 'Cart',
            position: '1',
            properties: [
              {
                name: 'products',
                type: 'mixed',
                properties: [
                  {
                    name: 'product',
                    type: 'referenced',
                    ref: 'Product',
                  },
                  'size',
                  'quantity',
                  'shippingStatus',
                ],
              },
              'orderStatus',
              'cartDate',
            ],
          },
        },
        actions: {
          edit: {
            isAccessible: ({ record }) => {
              return true;
            },
          },
        },
      },
    },

  ],
  branding: {
    companyName: 'Ajio',
  }
});


const adminRouter = AdminJSExpress.buildRouter(adminJs)
app.use(adminJs.options.rootPath, adminRouter);


// Routes

app.use('/auth', googleRoute);
app.use('/auth/facebook', facebookRoute);
app.use('/admin', adminRoute);
app.use('/products', productRoute);
app.use('/content', contentRoute);
app.use('/', mobileSigninRoute);
app.use('/userdetails', userRoute);
app.use('/cart', cartRoute);
app.use('/wishlist', wishlistRoute);
app.use('/address', addressRoute);
app.use('/order', razorpayRoute);
app.use('/order', orderRoute)
app.use('/order/update', orderRoute)
app.use('/download-invoice', invoiceRoute)

app.use(express.static(path.join(__dirname, '../ajio/build')));

// Fallback for React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../ajio/build/index.html'));
});






app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



