import express from 'express'
const router = express.Router()
import  {getContentController, postContentController} from '../controllers/contentController.js'

router.post('/',postContentController)
router.get('/',getContentController)

export default router;