import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  name: { type: String },
  provider: { type: String, enum: ['phone', 'google', 'facebook','admin'], required: true },
  fname: { type: String },
  lname: { type: String },
  sname: { type: String },
  dob: { type: String },
  gender: { type: String },
  number:{type:String},
  mobileUid:{type:String,unique: true, sparse: true},
  email: {type: String},
  password: { type: String },
  phoneNumber: { type: String },
  googleId: { type: String, unique: true, sparse: true },
  facebookId: { type: String, unique: true, sparse: true },

  avatar: { type: String },
  createdAt: { type: Date, default: Date.now },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
});

const User = mongoose.model('User', userSchema);


 
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id, provider: this.provider, isAdmin: this.isAdmin }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  });
  return token;
};

export default mongoose.model('User', userSchema);



// phone:{
//   phoneNumber: { type: String },
//   mobileUid:{type: String,unique: true, sparse: true},
//   name: { type: String },
//   email: { type: String },
//   fname: { type: String },
//   lname: { type: String },
//   sname: { type: String },
//   dob: { type: String },
//   gender: { type: String },
//   number:{type:String},
// },
// facebook:{
//   facebookId: { type: String, unique: true, sparse: true },
//   name: { type: String },
//   avatar: { type: String },
//   email: { type: String },
//   fname: { type: String },
//   lname: { type: String },
//   sname: { type: String },
//   dob: { type: String },
//   gender: { type: String },
//   number:{type:String},
// },
// google:{
//   name: { type: String },
//   avatar: { type: String },
//   fname: { type: String },
//   lname: { type: String },
//   sname: { type: String },
//   dob: { type: String },
//   gender: { type: String },
//   number:{type:String},
//   googleId: { type: String, unique: true, sparse: true },
// },