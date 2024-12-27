import express from 'express';
import { postWishlist, getWishlist, deleteWishlist } from '../controllers/wishlistController.js';
import { authenticate } from '../middleware/middleware.js';

const router = express.Router();

router.post('/:userId/:productId',postWishlist);
router.get('/:userId', getWishlist);
router.delete('/:userId/:productId',deleteWishlist);

export default router;
