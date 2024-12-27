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
  
  email: { type: String, default: null, sparse: true },
  password: { type: String },
  phoneNumber: { type: String },
  googleId: { type: String, unique: true, sparse: true },
  facebookId: { type: String, unique: true, sparse: true },

  avatar: { type: String },
  createdAt: { type: Date, default: Date.now },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
});

userSchema.pre('save', async function (next) {
  if (this.provider === 'phone') {
    // If authenticating via phone, unset email before saving
    this._unset('email'); 
  }
  next();
});
 
userSchema.pre('save', async function (next) {
  if (this.isModified('password') && this.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

 
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

 
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