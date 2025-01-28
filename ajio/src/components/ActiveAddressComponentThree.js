import React from 'react'
import ActiveAddressComponent from './ActiveAddressComponent'
import ActiveAddressComponentTwo from './ActiveAddressComponentTwo'
import Controls from '../commons/Controls'
import theme from '../utilities/theme'

const ActiveAddressComponentThree = ({activeAddress,getFutureDate,getExpectedDate,firstValidItem , secondValidation, handleAddAddress,  handleAddress,    bagTotal, bagDiscount, orderTotal,handlePayment,address}) => {
  return (
    <>
    <Controls.Grid item xs={12} sx={{ display: {xs:"block",sm:"flex"}, justifyContent: {xs:"",sm:"space-between"}, alignItems: "center", margin: "auto" }} gap={5}>
            <Controls.Grid item sm={8} sx={{}} >
              <Controls.Grid item sx={{ display: "flex", }} gap={1} xs={12} sm={12} lg={8} px={{xs:1,lg:6}}>
                <Controls.Grid item sx={{ alignItems: "center" }}>
                  <Controls.LocationOnOutlinedIcon sx={{ width: "40px", height: "80px ", color: "black" }} />
                </Controls.Grid>
                <Controls.Grid item sx={{ alignItems: "center" }} mt={2}>
                  <Controls.Grid item>
                    <Controls.Typography variant='caption' sx={{ fontWeight: "bold", fontSize: "17px" }}>Delivery Address</Controls.Typography>
                  </Controls.Grid>
                  <Controls.Grid item>
                    <Controls.Typography variant='caption' sx={{ fontWeight: "normal", fontSize: "15px", color: "#666666" }}>We will deliver your order to this address</Controls.Typography>
                  </Controls.Grid>
                </Controls.Grid>
              </Controls.Grid>
              {activeAddress ? (
                <>
                <ActiveAddressComponent activeAddress={activeAddress} getFutureDate={getFutureDate}getExpectedDate={getExpectedDate}/>
                </>

) :
 (       
  <ActiveAddressComponentTwo  firstValidItem={firstValidItem} secondValidation={secondValidation}  getExpectedDate={getExpectedDate}getFutureDate={getFutureDate}/>
  
                 
                  ) }


              <Controls.Grid
  item
  sx={{ cursor: "pointer" }}
  onClick={handleAddress}
  my={3}
  px={{ xs: 2, lg: 7 }}
>
  {(address.length > 0 || activeAddress !== undefined) ? (
    <Controls.Typography
      variant="caption1"
      sx={{ color: theme.palette.one.text, fontWeight: "bold" }}
    >
      Change Address
    </Controls.Typography>
  ) : (
    <Controls.Typography
      variant="caption1"
      sx={{ color: theme.palette.one.text, fontWeight: "bold" }} onClick={handleAddAddress}
    >
      Add Address
    </Controls.Typography>
  )}
</Controls.Grid>

              <Controls.Divider sx={{display:{xs:'none',sm:"block"}}}/>
            </Controls.Grid>

            <Controls.Grid item sm={3} px={{xs:2,sm:0}}>
              <Controls.Grid item xs={12} sx={{ backgroundColor: "#fafafa", border: "1px solid lightgray" }}>
                <Controls.Grid item p={1}>
                  <Controls.Typography variant='caption1' sx={{ fontWeight: "bold" }}>Order Details</Controls.Typography>
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
                <Controls.Grid item px={2} sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Controls.Grid item >
                    <Controls.Typography variant='caption1' sx={{ fontSize: "14px" }}>Order Total</Controls.Typography>
                  </Controls.Grid>
                  <Controls.Grid item >
                    <Controls.Typography variant='caption1' sx={{ fontSize: "14px", fontWeight: "bold" }}>₹{Number(orderTotal) + 99}.00</Controls.Typography>
                  </Controls.Grid>
                </Controls.Grid>
                <Controls.Grid item mt={4} sx={{ backgroundColor: theme.palette.one.text2, textAlign: 'center', color: "white", cursor: "pointer" }} onClick={handlePayment}>
                  <Controls.Typography sx={{ paddingX: { xs: "72px", sm: "0px", lg: '50.8px' }, paddingY: { xs: "5px", lg: "12px" }, borderRadius: 0, }}>PROCEED TO PAYMENT</Controls.Typography>
                </Controls.Grid>

              </Controls.Grid>
            </Controls.Grid>
          </Controls.Grid>
    </>
  )
}

export default ActiveAddressComponentThree