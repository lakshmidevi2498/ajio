import express from 'express'
const router = express.Router()
import {sendOtpController ,verifyOtpController} from '../controllers/mobileSigninController.js'

router.post('/sent-otp' ,sendOtpController)
// router.post('/verify-otp' ,verifyOtpController)


export default router;