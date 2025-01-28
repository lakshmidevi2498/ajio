import React from 'react'
import Controls from '../commons/Controls'
import theme from '../utilities/theme'
import PaymentGatewayComponent from './PaymentGatewayComponent'

const PaymentComponentOne = ({totalAmount, bagTotal,bagDiscount,orderTotal, paymentId,razorpayOrderId}) => {
  return (
    <>
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
    </>
  )
}

export default PaymentComponentOne