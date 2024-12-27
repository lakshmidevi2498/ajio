import express from 'express'
import { authenticate } from '../middleware/middleware.js'
import { getCartController, postCartController ,updateCartController ,deleteCartController } from '../controllers/cartController.js'
const router = express.Router()

router.post('/:userId/:productId',postCartController)
router.get('/:userId',authenticate,getCartController)
router.put('/:userId',updateCartController)
router.delete('/:userId/:productId',deleteCartController)

export default  router