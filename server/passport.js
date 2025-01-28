import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import userSchema from './models/userSchemaModal.js';
import dotenv from 'dotenv';
dotenv.config();



const allowedOrigins = process.env.NODE_ENV === 'production' 
? 'https://ajio-2.onrender.com' 
: 'http://localhost:5051';

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${allowedOrigins}/auth/google/callback`, 
      passReqToCallback: true
    },
    async (req, accessToken, refreshToken, profile, done) => {
      console.log('Profile:', profile);  
      try {
        if (!profile.id) {
          throw new Error('Profile ID not found');
        }

        const user = await userSchema.findOne({ googleId: profile.id });
        if (!user) {
          const newUser = await userSchema.create({
            googleId: profile.id,
            name: profile.displayName || 'No Name',
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
            provider: 'google',
          });
          return done(null, newUser); 
        }

        return done(null, user);
      } catch (error) {
        console.error('Error during user retrieval:', error);
        return done(error, null);  
      }
    }
  )
);

// Facebook Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: `${allowedOrigins}/auth/facebook/callback`,
      // passReqToCallback: true
      profileFields: ['id', 'displayName', 'photos', 'email'], 
      scope: ['email']
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("profile",profile)
      try { 
        console.log("refreshToken Token:", refreshToken);  
        console.log("Access Token:", accessToken);  
         
        let user = await userSchema.findOne({ facebookId: profile.id });

        if (!user) {
          user = new userSchema({
            facebookId: profile.id,   
            name: profile.displayName,
            profilePicture: profile.photos && profile.photos[0] ? profile.photos[0].value : null,  
            email: profile.emails && profile.emails[0] ? profile.emails[0].value : null,
            provider: 'facebook', 
          });

          await user.save();
        }
        console.log("user",user)

        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userSchema.findById(id); 
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
