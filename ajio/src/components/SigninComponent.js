import React, { useState } from "react"; 
import Controls from "../commons/Controls"; 
import {useNavigate} from'react-router-dom'
import OtpComponent from "./OtpComponent"; 
import { getAuth, RecaptchaVerifier ,signInWithPhoneNumber} from "firebase/auth"; 
import { useDispatch } from "react-redux";
import { facebookLoginInitiate } from "../redux/actions/facebookLoginAction";
import {googleLoginInitiate} from'../redux/actions/googleLoginAction'
import { getToken } from "./GlobalFunction";
import SigninFormomponentOne from "./SigninFormomponentOne";




const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: { xs:"280px",sm:"500px",md: "450px", lg: "380px", xl: "500px" },
    height: "auto",
    maxHeight: "90vh",
    bgcolor: "background.paper",
    border: "2px solid lightgray",
    boxShadow: 24,
    p: {xs:1,sm:4},
    overflowY: "auto",
    outline:"none",
    
};

const SigninComponent = ({ open, handleClose ,setOpen}) => {
    
    const [phoneNumber , setPhoneNumber] = useState(null)
    const [modalOpen,setModalOpen] = useState(false)
    const auth = getAuth();
    const dispatch = useDispatch()
    const token = getToken()
   
    const navigate = useNavigate()


    const handleChange = (e) => {
        setPhoneNumber(e.target.value)
        console.log("setPhoneNumber",phoneNumber)
    }


   
    const setupRecaptcha = () => {
      try {
  
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
              auth,
              'recaptcha-container',
              {
                size: 'invisible',
                callback: (response) => {
                    console.log("reCAPTCHA solved:", response);
                },
                'expired-callback': () => {
                    console.log("reCAPTCHA expired. Resetting...");
          
            window.recaptchaVerifier.reset();
            setupRecaptcha( 'recaptcha-container');
                },
              }
            );
          }
    
        // recaptchaVerifier.appVerificationDisabledForTesting = true;
    
        return window.recaptchaVerifier;
      } catch (error) {
        console.error("Error setting up reCAPTCHA:", error);
        throw error;
      }
    };
    
   
    const handleMobileSignin = async () => {
        if(!token){
      try {
       
        const recaptchaVerifier = setupRecaptcha();
        if (!recaptchaVerifier) {
          console.error("Failed to set up reCAPTCHA verifier");
          return;
        }
    
    
        await sendOTP( recaptchaVerifier);
      } catch (error) {
        console.error("Error sending OTP:", error);
        alert("Error sending OTP. Please try again later.");
      }
    }
    };
    
  
    const sendOTP = async ( recaptchaVerifier) => {
        console.log("phoneNumber",phoneNumber)
      try {
        const confirmationResult = await signInWithPhoneNumber(
          auth,
          phoneNumber,
          recaptchaVerifier
        );
        window.confirmationResult = confirmationResult;
        console.log("OTP sent successfully");
        setOpen(false)
        setModalOpen(true)
      } catch (error) {
        console.error("Error sending OTP:", error);
        throw error;
      }
    };
    
  const handleGoogle= () => {
   
   if(!token){
    dispatch(googleLoginInitiate())
   }

  }

  const handleFacebook = () => {
    if(!token){
    dispatch(facebookLoginInitiate())
    }
  }

    
    return (
        <Controls.Grid container justifyContent="center" >
            <Controls.Grid item>
                <Controls.Modal
                    open={open}
                    onClose={handleClose}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <SigninFormomponentOne    handleFacebook={handleFacebook} handleGoogle={handleGoogle} handleMobileSignin={handleMobileSignin} handleChange={handleChange} handleClose={handleClose} style={style}/>
                </Controls.Modal>
            </Controls.Grid>
            {modalOpen && <OtpComponent setModalOpen={setModalOpen} modalOpen={modalOpen} phoneNumber={phoneNumber} setOpen={setOpen}/>}
        </Controls.Grid>
    );
};

export default SigninComponent;
