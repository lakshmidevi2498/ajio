import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, 
      size: { type: String, required: true, default: 'S' }, 
      quantity: { type: Number, required: true, default: 1 }, 
      productShippingStatus: { type: String, enum: ['Confirmed','Packed','Shipped', 'Out-for-delivery', 'Delivered','Cancelled','Arriving'], default: 'Confirmed' }, 
      productPackedDate: { type: Date, default: null },
      productShippedDate: { type: Date, default: null },
      outfordeliveryDate: { type: Date, default: null },
      productDeliveredDate: { type: Date, default: null },
      productCancelledDate: { type: Date, default: null },
      productArrivingDate: { type: Date, default: null },
      productCancelledReason: { type: String, default: null },
      productOrderedStatus: { type: String, enum: ['processing', 'completed', 'cancelled'], default: 'processing' },
    },
  ],
  orderStatus: {
    type: String,
    enum: ['success', 'pending', 'failed'],  
    default: 'pending',
  },
  cartDate: { type: Date, default: Date.now },
});

export default mongoose.model('Cart', cartSchema);
