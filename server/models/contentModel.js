import mongoose from 'mongoose';

 
const contentSchema = new mongoose.Schema({
  images: {
    type: [String],  
    required: true,  
  },
  number:{
    type: Number,  
    required: true, 
  }
});

 
export default mongoose.model('Content', contentSchema);


