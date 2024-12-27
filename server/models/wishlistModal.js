import mongoose from 'mongoose'

const wishlistSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    wishlistDate: { type: Date, default: Date.now },
})
export default mongoose.model('Wishlist',wishlistSchema)