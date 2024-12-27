import express from 'express'
import { authenticate } from '../middleware/middleware.js'
import { downloadInvoiceController } from '../controllers/invoiceController.js'
const router = express.Router()


router.post('/',downloadInvoiceController)


export default  router;