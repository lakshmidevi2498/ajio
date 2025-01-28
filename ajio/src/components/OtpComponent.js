import React, { useState } from "react";
import { Modal, Grid, Typography, TextField, Button } from "@mui/material"; 
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { mobileLoginInitiate } from "../redux/actions/mobileLoginAction";
import { getToken } from "./GlobalFunction";
import { toast } from "react-toastify";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: { md: "800px", lg: "380px", xxl: "1200px" },
    height: "auto",
    maxHeight: "90vh",
    bgcolor: "background.paper",
    border: "2px solid lightgray",
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
};

const OtpComponent = ({ setModalOpen, modalOpen, phoneNumber,setOpen }) => {
    const [otp, setOtp] = useState(Array(6).fill("")); 
    const dispatch = useDispatch()
    const token = getToken()
   

    const handleChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value.slice(0, 1); 
        setOtp(newOtp);

       
        if (value && index < otp.length - 1) {
            const nextField = document.getElementById(`otp-${index + 1}`);
            if (nextField) nextField.focus();
        }
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    const handleVerifyOtp = async () => {
        const otpCode = otp.join("");
        if (!otpCode || otpCode.length < otp.length) {
            alert("Please enter the complete OTP");
            return;
        }

        try {
            const user = await verifyOTP(otpCode);
            toast.success(`Phone number verified! Welcome ${user.phoneNumber}`); 
            setModalOpen(false)
            setOpen(false) 
        } catch (error) {
            console.error("Error verifying OTP:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    const verifyOTP = async (otp) => {
        try {
          const confirmationResult = window.confirmationResult;
          const result = await confirmationResult.confirm(otp);
          const user = result.user;
          console.log("User signed in successfully:", user);
          const phoneNumber = user.phoneNumber
          const providerId = user.providerId   
          const uId = user.providerData[0].uid 
          console.log("uId",uId)  
          if(!token){     
          await  dispatch(mobileLoginInitiate(phoneNumber,providerId,uId))
          }
          return user;
        } catch (error) {
          console.error("Error verifying OTP:", error);
          throw error;
        }
      };
      

    return (
        <Modal
            open={modalOpen}
            onClose={handleClose}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Grid container sx={style}>
                <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom>
                        Enter the OTP sent to  {phoneNumber}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    style={{ display: "flex", justifyContent: "center", gap: "10px" }}
                    my={5}
                >
                    {otp.map((digit, index) => (
                        <TextField
                            key={index}
                            id={`otp-${index}`}
                            variant="outlined"
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            inputProps={{
                                maxLength: 1,
                                style: { textAlign: "center", fontSize: "18px" },
                            }}
                            style={{ width: "40px" }}
                        />
                    ))}
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleVerifyOtp}
                        sx={{ backgroundColor: "#866528", color: "white" }}
                    >
                        Start Shopping
                    </Button>
                </Grid>
            </Grid>
        </Modal>
    );
};

export default OtpComponent;
