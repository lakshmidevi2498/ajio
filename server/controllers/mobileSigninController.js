
import twilio from 'twilio';
import jwt from 'jsonwebtoken';
// import otpSchema from '../models/mobileSigninModel.js';
import user from '../models/userSchemaModal.js'
import { response } from 'express';

export const sendOtpController = async (req, res) => {
    const { phoneNumber ,uId} = req.body;
    console.log("req.body",req.body)

    if (!phoneNumber) {
        return res.status(400).json({ message: "phoneNumber is required" });
    }

    try {
  
        const existingUser = await user.findOne({ mobileUid:uId });
        let token;
        if (existingUser) {
         
            token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
            // console.log('Generated token for existing user:', token);
            return res.status(200).json({ 
                // message: "User Found", 
                user: existingUser, token });
        } else {
           
                     const newUser = new user({ phoneNumber,  provider: 'phone',mobileUid:uId,email: null });
            await newUser.save();
            token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
            // console.log('Generated token for new user:', token);
            return res.status(200).json({ message: "User login Successfully", user: newUser, token });
        }
    } catch (error) {
        console.error("Error processing OTP request:", error);
        return res.status(500).json({ message: "Internal Server Error", error });
    }
};

export const verifyOtpController = async (req,res) => {

}














// export const sendOtpController = async (req, res) => {
//     const { phoneNumber } = req.body;
//     console.log("req.body", req.body);
//     const accountSid = process.env.ACCOUNT_SID;
//     const authToken = process.env.AUTH_TOKEN;
//     const client = new twilio(accountSid, authToken);
//     console.log("accountSid", accountSid, authToken, process.env.TWILIO_NUMBER);

//     const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

//     try {
//         if (!phoneNumber) {
//             return res.status(400).json({ message: "phoneNumber is required" });
//         }

//         const otp = generateOtp();
//         // Uncomment these lines if you need to store the OTP in the database for validation
//         const newNumber = new otpSchema({ phoneNumber, otp });
//         await newNumber.save();

//         client.messages.create({
//             body: `Your OTP is ${otp}`,
//             from: process.env.TWILIO_NUMBER, // Use your Twilio verified number
//             to: `+91${phoneNumber}`
//         })
//         .then(() => {
//             res.send({ success: true, otp: otp });
//         })
//         .catch((error) => {
//             console.error("Twilio error:", error);
//             res.send({ success: false, error: "Failed to send OTP" });
//         });

//     } catch (error) {
//         console.error("Error sending OTP:", error);
//         res.status(500).json({ message: "Internal server error", error });
//     }
// };


// export const verifyOtpController = async(req,res) => {
//  const {phoneNumber ,otpCode}  = req.body
//  console.log("req.body",req.body)
//  try {
//     const user = await otpSchema.findOne({phoneNumber,otp:otpCode})
//     if(user){
//         res.send({success:true})
//     }
//     else{
//         res.status(401).send({success:false,error:"Invalid otp"})
//     }
//  } catch (error) {
//     console.log("error",error)
//     res.status(500).json({message:"Internal server error",error})
//  }
// }

