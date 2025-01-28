import React from 'react'
import Controls from '../commons/Controls'

const SigninFormomponentOne = ({  handleFacebook,handleGoogle,handleMobileSignin,handleChange,handleClose,style}) => {
  return (
    <>
      <Controls.Box sx={style}>
                        <Controls.Button
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: "absolute",
                                top: 8,
                                right: {xs:5,sm:8},
                                color: "black",
                            }}
                        >
                            <Controls.CloseIcon />
                        </Controls.Button>
                        <Controls.Grid item xs={12}>
                        <Controls.Grid item sx={{ textAlign: "start" }}mt={4} mb={2}>
                            <Controls.Typography variant="caption1" sx={{ fontSize: "25px" }}>Welcome to AJIO</Controls.Typography>
                        </Controls.Grid>
                        <Controls.Grid item sx={{ textAlign: "start" }}>
                            <Controls.Typography variant="caption1" sx={{ fontSize: "12px" }}>Join / Sign In using</Controls.Typography>
                        </Controls.Grid>
                        <Controls.Grid xs={12} sx={{ display: "flex", justifyContent: "space-between", }} gap={{xs:1,sm:2}} my={3}>
                            <Controls.Grid
                                item
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    border: "2px solid #0a3882",
                                    cursor:"pointer"
                                }}
                                xs={6}
                                onClick={handleFacebook}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="35"
                                    height="35"
                                    viewBox="0 0 128 128"
                                >
                                    <rect
                                        width="118.35"
                                        height="118.35"
                                        x="4.83"
                                        y="4.83"
                                        fill="#3d5a98"
                                        rx="6.53"
                                        ry="6.53"
                                    />
                                    <path
                                        fill="#fff"
                                        d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A127 127 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
                                    />
                                </svg>
                                <Controls.Typography
                                    variant="caption1"
                                    sx={{
                                        fontSize: "18px",
                                        color: "#0a3882",
                                        fontWeight: "bold",
                                        marginLeft: 1,
                                        fontSize:{xs:"15px",sm:"18px"}
                                    }}
                                    
                                >
                                    Facebook
                                </Controls.Typography>
                            </Controls.Grid>

                            <Controls.Grid item sx={{ display: "flex", justifyContent: "center", border: "2px solid red" ,cursor:"pointer"}} xs={6} p={0.5} onClick={handleGoogle}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" marginTop="10px" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917" /><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" /><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" /><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" /></svg>
                                <Controls.Typography variant="caption1" sx={{ fontSize: {xs:"15px",sm:"18px"}, color: "red", fontWeight: "bold", marginTop: 0.5, marginLeft: 1, }} >Google</Controls.Typography>
                            </Controls.Grid>

                        </Controls.Grid>
                        <Controls.Grid
                            item
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginX: "auto",
                                textAlign: "center",
                            }}mt={2} mb={4}
                        >

                            <Controls.Divider
                                orientation="horizontal"
                                sx={{
                                    flexGrow: 1,
                                    height: "2px",
                                }}
                            />


                            <Controls.Typography
                                variant="caption1"
                                sx={{
                                    marginX: 2,
                                    textAlign: "center",
                                    fontWeight: "bold", color: "#585858",
                                    fontSize: "18px",
                                    fontFamily: "lora"
                                }}
                            >
                                Or
                            </Controls.Typography>


                            <Controls.Divider
                                orientation="horizontal"
                                sx={{
                                    flexGrow: 1,
                                    height: "2px",
                                }}
                            />
                        </Controls.Grid>
                        <Controls.Grid item xs={12} sx={{ display: "block", }} mb={2}>
                            <Controls.Typography variant="caption1">Enter Mobile Number *</Controls.Typography>
                            </Controls.Grid>
                        
                        <Controls.Grid item xs={12} sx={{ display: "block" }}mb={3}>
                        <Controls.TextField
                        sx={{width:{xs:"150px",sm:"300px"}}}
                            id="standard-number"
                            type="mobile-number"
                            variant="standard"
                        onChange={handleChange}
                        />
                        </Controls.Grid>
                        
                        <Controls.Grid item xs={12} my={2}>
                            <Controls.Button variant="contained" sx={{color:"white",backgroundColor:"#866528",paddingX:"45px",fontSize:"15px"}} onClick={handleMobileSignin}>CONTINUE</Controls.Button>
                        </Controls.Grid>
                        <Controls.Grid item mb={40} >
                            <Controls.Typography variant="caption1" sx={{fontSize:"12px"}}>By Signing In, I agree to</Controls.Typography>&nbsp;
                            <Controls.Typography variant="caption1" sx={{color:"#176d93",fontSize:"12px"}}>Terms & Conditions </Controls.Typography>&nbsp;
                            <Controls.Typography variant="caption1" sx={{fontSize:"12px"}}>and</Controls.Typography>&nbsp;
                            <Controls.Typography variant="caption1"sx={{color:"#176d93",fontSize:"12px"}}>Privacy Policy</Controls.Typography>
                        </Controls.Grid>
                        <div id="recaptcha-container"></div>
                        <Controls.Grid item sx={{backgroundColor:"#FFF9EA",display:"flex",border:"1px solid orange"}} p={1} gap={1}>
                            <Controls.MailOutlineIcon sx={{marginTop:"7px",color:"orange"}}/>
                            <Controls.Typography variant="caption1" sx={{fontSize:"12px"}}>Email based login is no longer available. Please <Controls.Typography variant="caption1"sx={{color:"#176d93",fontSize:"12px",fontWeight:"bold"}}>click here</Controls.Typography> to restore your mobile number.</Controls.Typography>
                        </Controls.Grid>
                        </Controls.Grid> 
                    </Controls.Box>
    </>
  )
}

export default SigninFormomponentOne