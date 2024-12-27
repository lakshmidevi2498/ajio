import mongoose from 'mongoose'
 const addessSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,  
        required: true,
        ref: 'User'  
    },
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        // unique: true,
    },
    building: {
        type: String,  
        required: true,
    },
    addressType: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    landmark: {
        type: String,
    },
    terms:{
        type: Boolean, 
    }
 })
 export default mongoose.model('address',addessSchema)