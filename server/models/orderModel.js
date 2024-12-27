import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  
  paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'] },
  cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },  // reference to Cart
  bagTotal: { type: String },
  totalAmount: { type: String },
  bagDiscount: { type: String },
  orderTotal: { type: String },
  address: { type: mongoose.Schema.Types.ObjectId, ref: 'address' },
  orderDate: { type: Date, default: Date.now },
  paymentDetails: { paymentId : {type: String} ,orderId : {type:String} },
});

export default mongoose.model('Order', orderSchema);
