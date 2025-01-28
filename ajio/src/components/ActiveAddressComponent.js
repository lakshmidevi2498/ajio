import React from 'react'
import Controls from '../commons/Controls'
import theme from '../utilities/theme'

const ActiveAddressComponent = ({activeAddress,getFutureDate,getExpectedDate}) => {
  return (
    <>
    <Controls.Grid item mt={1} px={{xs:2,lg:8}} >
                
                <Controls.Grid item sx={{ display: {xs:"block",sm:"flex"}, justifyContent: {xs:"",sm:"space-between" }}}>
                  <Controls.Grid item>
                  <Controls.Grid item>
                      <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", fontSize: "15px" }}>{activeAddress.name}</Controls.Typography>&nbsp;&nbsp;
                      <Controls.Typography variant='caption1' sx={{ border: "1px solid black", borderRadius: 1, fontSize: "12px", padding: 0.5 }}>{activeAddress.addressType}</Controls.Typography>
                    </Controls.Grid>
                    <Controls.Grid item>
                      <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", color: theme.palette.one.text2, fontSize: "12px" }}>{activeAddress.terms === true ? "Default" : ""}</Controls.Typography>
                    </Controls.Grid>
                    <Controls.Grid item>
                      <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>{activeAddress.area},&nbsp;{activeAddress.building}</Controls.Typography>
                    </Controls.Grid>
                    {activeAddress.landmark && 
                    <Controls.Grid item>
                    <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>{activeAddress.landmark}</Controls.Typography>
                  </Controls.Grid>}
                  <Controls.Grid item>
                    <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>{activeAddress.district},&nbsp;{activeAddress.state}</Controls.Typography>
                  </Controls.Grid>

                    
                    <Controls.Grid item>
                      <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>India-{activeAddress.pincode}</Controls.Typography>
                    </Controls.Grid>
                    <Controls.Grid item>
                      <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>Phone :</Controls.Typography>
                      <Controls.Typography variant='caption1' sx={{  color: '#6d6d6d', fontSize: "14px", fontWeight: "bold" }}>{activeAddress.mobile}</Controls.Typography>
                    </Controls.Grid>
                  </Controls.Grid>
                  <Controls.Grid item>
                    <Controls.Grid item sx={{ border: "1px dashed gray", borderRadius: 2 }} mt={1} p={2}>
                      <Controls.Grid item >
                        <Controls.Typography variant='caption1' sx={{ color: "#008526", fontWeight: "bold" }}>Cash on delivery available</Controls.Typography>
                      </Controls.Grid>
                      <Controls.Grid item>
                        <Controls.Typography variant='caption1' sx={{}}>Est Delivery </Controls.Typography><Controls.Typography variant='caption1'>{getExpectedDate(5)} - {getFutureDate(7)}</Controls.Typography>
                      </Controls.Grid>
                    </Controls.Grid>
                  </Controls.Grid>

                </Controls.Grid>

              </Controls.Grid>
    </>
  )
}

export default ActiveAddressComponent