import React, { useEffect, useState } from 'react'
import Controls from '../commons/Controls'
import theme from '../utilities/theme'
import PaymentGatewayComponent from './PaymentGatewayComponent'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PaymentComponent = () => {
  const [bagTotal, setBagTotal] = useState(null)
  const [bagDiscount, setBagDiscount] = useState(null)
  const [orderTotal, setOrderTotal] = useState(null)
  const [paymentId, setPaymentId] = useState(null)
  const [razorpayOrderId, setRazorpayOrderId] = useState(null)
  const navigate = useNavigate()

  const razorpayOrderValidateDetails = useSelector((state) => state.razorpayordervalidate.data || [])
  console.log("razorpayOrderValidateDetails", razorpayOrderValidateDetails)

  useEffect(() => {
    const getItPrice = sessionStorage.getItem('getItPrice')
    const savings = sessionStorage.getItem('savings')
    const discount = sessionStorage.getItem('discount')
    setBagDiscount(discount)
    setBagTotal(savings)
    setOrderTotal(getItPrice)

  }, [bagTotal, bagDiscount, orderTotal])

  useEffect( ()=>{
    if (razorpayOrderValidateDetails && razorpayOrderValidateDetails.data) {
        const responseOrderId = razorpayOrderValidateDetails.data.orderId;                                    ;
        const responsePaymentId = razorpayOrderValidateDetails.data.paymentId;
        console.log("responseOrderId", responseOrderId);
        setPaymentId(responsePaymentId);
        setRazorpayOrderId(responseOrderId);
        console.log("responseOrderId",responseOrderId ,responsePaymentId)
      } else {
        console.log("Data not available yet");
      }

},[razorpayOrderValidateDetails])

const handleNavigate = () => {
  navigate('/')
}

const deliveryFee = 99;
const platformFee = 19;

const totalAmount = Number(orderTotal) + Number(deliveryFee) + Number(platformFee);
  
  return (
    <>
    <Controls.Grid container justifyContent="center" alignItems="center"mt={{xs:15,md:10}}>
      {(paymentId !== null && razorpayOrderId !== null ) ?
                       ( <>
                            <Controls.Grid item xs={10} >
                                <Controls.ArrowBackIcon sx={{ marginTop: "10px", cursor: "pointer" }} onClick={handleNavigate} />
                            </Controls.Grid>

                            <Controls.Grid item sx={{ display: "block", alignItems: "center", textAlign: "center",marginX:"auto" ,}} my={4} xs={10}>
                              <Controls.Grid item>
                            <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 512 512">
                              <path fill="#166705" d="M256 16C123.5 16 16 123.5 16 256c0 132.6 107.5 240 240 240c132.6 0 240-107.4 240-240S388.6 16 256 16m0 60c99.4 0 180 80.6 180 180s-80.6 180-180 180S76 355.4 76 256S156.6 76 256 76m91.3 64.2c-6.5 0-12.5 2.4-16.8 8.2c-52 70.1-69 96.5-106 169.8c-8.4-11.1-65.6-72.4-93.9-94.1c-14.2-10.9-41.3 27.2-31.6 37.1C142.6 306.1 220.1 406 232.7 405c21.4-1.7 75.1-136.8 148.8-233.7c8-10.4-15-31.3-34.2-31.1"></path>
                            </svg>
                            </Controls.Grid>
                            <Controls.Grid item>
                               <Controls.Typography variant='h4' sx={{fontSize:{xs:'16px',sm:"18px",md:"24px"}}}> order  Confirmed</Controls.Typography>
                               </Controls.Grid>
                               </Controls.Grid>
                        </>) :
        (<Controls.Grid item xs={12} sx={{justifyContent:'center',alignItems:"center",margin:"auto",}}>
            <Controls.Grid item xs={11} md={10}lg={9} xl={9.5}sx={{display:{md:"flex"},justifyContent:{xs:"",sm:"space-between"},margin:"auto",}}p={{xs:0,md:2}}gap={2}>
              <Controls.Grid item md={8}lg={9}>

                   <Controls.Grid item xs={12} sx={{display:{xs:"block",sm:"flex"}}}>

                    <Controls.Grid item sx={{display:{xs:"flex",md:"block",lg:"flex"}, border: "1px dashed gray",borderRight: {xs:"1px dashed gray",sm:"none"},}} gap={5} p={1} sm={6}>
                                <Controls.Grid item sx={{alignItems:"center",justifyContent:"center",marginY:"auto",marginX:"auto"}}>
                                  <Controls.Box component='img' src="./assets/images/ICICI.webp" width="100%" height="100%" sx={{width:"70px",height:"15px"}}/>
                                </Controls.Grid>
                                <Controls.Grid item>
                                  <Controls.Typography variant='caption1' sx={{fontSize:{xs:"10px",sm:"13px"}}}>Get 10% Instant Discount of up to Rs. 1000 on a minimum transaction value of Rs. 3999 using ICICI Bank Credit & Debit Cards, Valid once per card per month.</Controls.Typography>
                                  <Controls.Typography variant='caption1' sx={{fontSize:{xs:"10px",sm:"13px"},color:theme.palette.one.text}}>T&C</Controls.Typography>
                                </Controls.Grid>
                    </Controls.Grid>
                    <Controls.Grid item sx={{display:{xs:"flex",md:"block",lg:"flex"},border: "1px dashed gray",}} gap={5} p={1} sm={6}>
                                <Controls.Grid item sx={{alignItems:"center",justifyContent:"center",marginY:"auto"}}>
                                  <Controls.Box component='img' src="./assets/images/ICICI.webp" width="100%" height="100%" sx={{width:"80px",height:"20px"}}/>
                                </Controls.Grid>
                                <Controls.Grid item>
                                  <Controls.Typography variant='caption1' sx={{fontSize:{xs:"10px",sm:"13px"}}}>Get 10% Instant Discount of up to Rs. 1000 on a minimum transaction value of Rs 3500 using ICICI Bank Credit & Debit Cards</Controls.Typography>
                                  <Controls.Typography variant='caption1' sx={{fontSize:{xs:"10px",sm:"13px"},color:theme.palette.one.text}}>T&C</Controls.Typography>
                                </Controls.Grid>
                    </Controls.Grid>

                   </Controls.Grid>
                   <Controls.Grid item xs={12}>
                    <Controls.Typography variant='caption1' sx={{color:theme.palette.one.text,fontWeight:"bold",fontSize:"12px"}}>View 12 more</Controls.Typography>
                   </Controls.Grid>

                   <Controls.Grid item my={2}>
                <Controls.Typography variant='caption1' sx={{fontWeight:"bold", fontSize:"15px"}}>Select Redeem Option</Controls.Typography>
              </Controls.Grid>
              <Controls.Grid item xs={12} sx={{border:"1px solid lightgray"}}p={2}>

              <Controls.Grid item sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <Controls.Grid item sx={{display:"flex"}}>
                <Controls.Grid item >
                <Controls.Checkbox  color="primary"  />
                </Controls.Grid>
                <Controls.Grid item >
                  <Controls.Grid item  sx={{display:"flex"}}>
                  <Controls.Grid item >
                    <Controls.Typography variant='caption1'> RelianceOne Points</Controls.Typography>
                    </Controls.Grid>
                    <Controls.Grid item>
                        <Controls.Box sx={{ backgroundColor: "#FF6347", color: "white", fontSize: "8px", marginLeft: "8px", padding: "2px 4px", borderRadius: "4px",marginTop:0.8 }}>
                            NEW
                        </Controls.Box>
                        </Controls.Grid>
                  </Controls.Grid>
                  <Controls.Grid item >
                    <Controls.Typography variant='caption1' sx={{fontWeight:"bold"}}>Your current balance is ₹47.11</Controls.Typography>
                  </Controls.Grid>
                </Controls.Grid>
                </Controls.Grid>
                <Controls.Grid item>
                  <Controls.Typography variant='caption1' sx={{color:theme.palette.one.text,fontSize:"12px"}}>Details</Controls.Typography>
                </Controls.Grid>
                </Controls.Grid>
                <Controls.Divider sx={{marginY:3}}/>
                <Controls.Grid item sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <Controls.Grid item sx={{display:"flex"}} gap={1}>
                <Controls.Grid item >
                <Controls.Box component='img'  src= "./assets/images/gift.jpg"width="100%" height="100%" sx={{width:"30px",height:"40px"}} />
                </Controls.Grid>
                <Controls.Grid item > 
                  <Controls.Grid item >
                    <Controls.Typography variant='caption1'> Have a Gift Card?</Controls.Typography>
                    </Controls.Grid> 
                  <Controls.Grid item >
                    <Controls.Typography variant='caption1' sx={{fontWeight:"normal"}}>Add it to AJIO Wallet to pay for your orders</Controls.Typography>
                  </Controls.Grid>
                </Controls.Grid>
                </Controls.Grid>
                <Controls.Grid item>
                  <Controls.Typography variant='caption1' sx={{color:theme.palette.one.text,fontSize:"12px"}}>Add Gift Card</Controls.Typography>
                </Controls.Grid>
                </Controls.Grid>
              </Controls.Grid>
              <Controls.Grid item >
                <Controls.Grid item my={2}>
                  <Controls.Typography variant='caption1' sx={{fontWeight:"bold"}}>Select Payment Mode</Controls.Typography>
                </Controls.Grid>
                     <PaymentGatewayComponent totalAmount={totalAmount} bagTotal={bagTotal} bagDiscount={bagDiscount} orderTotal={orderTotal}  paymentId={paymentId} razorpayOrderId={razorpayOrderId}/>
              </Controls.Grid>

              </Controls.Grid>
           

              <Controls.Grid item md={4}lg={3} my={{xs:1,md:0}}>
              <Controls.Grid item xs={12} sx={{ backgroundColor: "#fafafa", border: "1px solid lightgray" }}>
                <Controls.Grid item p={2}>
                        <Controls.Grid item p={1}>
                            <Controls.Typography variant='caption1' sx={{ fontWeight: "bold" }}>Order Summary</Controls.Typography>
                        </Controls.Grid>
                        <Controls.Grid item px={2} sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Controls.Grid item >
                                <Controls.Typography variant='caption1' sx={{ fontSize: "14px" }}>Bag Total</Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item >
                                <Controls.Typography variant='caption1' sx={{ fontSize: "14px", fontWeight: "medium" }}>₹{bagTotal} .00</Controls.Typography>
                            </Controls.Grid>
                        </Controls.Grid>
                        <Controls.Grid item px={2} sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Controls.Grid item >
                                <Controls.Typography variant='caption1' sx={{ fontSize: "14px" }}>Bag Discount</Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item >
                                <Controls.Typography variant='caption1' sx={{ fontSize: "14px", fontWeight: "medium", color: theme.palette.one.text2 }}>-₹{bagDiscount}.00</Controls.Typography>
                            </Controls.Grid>
                        </Controls.Grid>
                        <Controls.Grid item px={2}>
                            <Controls.Typography variant='caption1'>Convenience Fee</Controls.Typography>&nbsp;<Controls.Typography variant='caption1' sx={{ color: theme.palette.one.text, fontSize: "12px" }}>what's this</Controls.Typography>
                        </Controls.Grid>
                        <Controls.Grid item px={3} sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Controls.Grid item >
                                <Controls.Typography variant='caption1' sx={{ fontSize: "14px", color: "lightgray" }}>Delivert Fee</Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item >
                                <Controls.Typography variant='caption1' sx={{ fontSize: "14px", fontWeight: "medium" }}>₹99 .00</Controls.Typography>
                            </Controls.Grid>
                        </Controls.Grid>
                        <Controls.Grid item px={3} sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Controls.Grid item >
                                <Controls.Typography variant='caption1' sx={{ fontSize: "14px", color: "lightgray" }}>Platform Fee</Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item >
                                <Controls.Typography variant='caption1' sx={{ fontSize: "14px", fontWeight: "medium" }}>₹19 .00</Controls.Typography>
                            </Controls.Grid>
                        </Controls.Grid>
                        <Controls.Grid item px={2} sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Controls.Grid item >
                                <Controls.Typography variant='caption1' sx={{ fontSize: "14px" ,fontWeight: "medium" }}>Order Total</Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item >
                                <Controls.Typography variant='caption1' sx={{ fontSize: "14px", fontWeight: "medium" }}>₹{totalAmount} .00</Controls.Typography>
                            </Controls.Grid>
                        </Controls.Grid>
                        <Controls.Grid item px={2} sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Controls.Grid item >
                                <Controls.Typography variant='caption1' sx={{ fontSize: "14px",fontWeight: "bold"  }}>Amount Payable</Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item >
                                <Controls.Typography variant='caption1' sx={{ fontSize: "14px", fontWeight: "bold" }}>₹{totalAmount} .00</Controls.Typography>
                            </Controls.Grid>
                        </Controls.Grid>
                        </Controls.Grid>

                    </Controls.Grid>
              </Controls.Grid>

            

            </Controls.Grid>

        </Controls.Grid>)}
    </Controls.Grid>
    </>
  )
}

export default PaymentComponent