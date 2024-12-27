import express from 'express'
import { authenticate } from '../middleware/middleware.js'
import { deleteOrderController ,getOrderController, updateOrderController} from '../controllers/orderController.js'
const router = express.Router()

router.delete('/:id',deleteOrderController)
router.get('/:userId',getOrderController)
router.put('/',updateOrderController)

export default  router