import mongoose from 'mongoose';

 
const otpSchema = new mongoose.Schema({
    phoneNumber: {
    type: String,   
  },
  // otp:{
  //   type: Number,  
  // }
});

 
export default mongoose.model('Otp', otpSchema);


