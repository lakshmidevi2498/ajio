import mongoose from 'mongoose';
 const productSchema = new mongoose.Schema({
   categories:{
        type:String,
        required:true,
     },
     subcatergory:{
        type:String,
        required:true,
     },
     name:{
      type:String,
      required:true,
   },
   brandname:{
      type:String,
      required:true,
   },
     image:{
        type:String    
     },
     price:{
        type:Number,
        required:true
     },
     quantity:{
        type:Number,
        required:true
     },
     offerprice:{
      type:Number,
      // required:true
   },
   rating:{
      type:Number,
      // required:true
   },
   reviews:{
      type:Number,
      // required:true
   },
   discountOne:{
        type:String,
      //   required:true
     },
     discountTwo:{
      type:String,
    //   required:true
   },
     innerimages: { 
      type: [String],  
      required: true 
    },
   getitprice:{
      type:Number,
      // required:true
   },
   color:{
      type:String,
      // required:true,
   },
   code:{
      type:String,
      // required:true,
   },

})
export default mongoose.model('Product',productSchema)
 