import React from 'react'
import Controls from '../commons/Controls'
import theme from '../utilities/theme'

const ActiveAddressComponentTwo = ({firstValidItem , secondValidation,getExpectedDate,getFutureDate}) => {
  return (
    <>
      <Controls.Grid item mt={1} px={{ xs: 2, lg: 8 }}>
    {(firstValidItem || secondValidation) && (
      <Controls.Grid item sx={{ display: { xs: "block", sm: "flex" }, justifyContent: { xs: "flex-start", sm: "space-between" } }}>
        
        <Controls.Grid item  sx={{ display: { xs: "block", sm: "block" }}}>
        <Controls.Grid item>
          <Controls.Typography variant="caption1" sx={{ fontWeight: "bold", fontSize: "15px" }}>
            {secondValidation ? secondValidation.name : firstValidItem?.name}
          </Controls.Typography>&nbsp;&nbsp;
          <Controls.Typography variant="caption1" sx={{ border: "1px solid black", borderRadius: 1, fontSize: "12px", padding: 0.5 }}>
            {secondValidation ? secondValidation.addressType : firstValidItem?.addressType}
          </Controls.Typography>
        </Controls.Grid>
  
    
        <Controls.Grid item>
          <Controls.Typography variant="caption1" sx={{ fontWeight: "bold", color: theme.palette.one.text2, fontSize: "12px" }}>
            {secondValidation ? "" : firstValidItem?.terms ? "Default" : ""}
          </Controls.Typography>
        </Controls.Grid>
        <Controls.Grid item>
          <Controls.Typography variant="caption1" sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>
            {secondValidation ? secondValidation.area : firstValidItem?.area},&nbsp;{secondValidation ? secondValidation.building : firstValidItem?.building}
          </Controls.Typography>
        </Controls.Grid>
  
    
        {firstValidItem?.landmark || secondValidation?.landmark ? (
          <Controls.Grid item>
            <Controls.Typography variant="caption1" sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>
              {secondValidation ? secondValidation.landmark : firstValidItem?.landmark}
            </Controls.Typography>
          </Controls.Grid>
        ) : null}
  
    
        <Controls.Grid item>
          <Controls.Typography variant="caption1" sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>
            {secondValidation ? secondValidation.district : firstValidItem?.district},&nbsp;{secondValidation ? secondValidation.state : firstValidItem?.state}
          </Controls.Typography>
        </Controls.Grid>
  
    
        <Controls.Grid item>
          <Controls.Typography variant="caption1" sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>
            India-{secondValidation ? secondValidation.pincode : firstValidItem?.pincode}
          </Controls.Typography>
        </Controls.Grid>
  
    
        <Controls.Grid item>
          <Controls.Typography variant="caption1" sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>
            Phone :
          </Controls.Typography>
          <Controls.Typography variant="caption1" sx={{ fontWeight: "bold", color: '#6d6d6d', fontSize: "14px" }}>
            {secondValidation ? secondValidation.mobile : firstValidItem?.mobile}
          </Controls.Typography>
        </Controls.Grid>
        </Controls.Grid>
        <Controls.Grid item>
          <Controls.Grid item sx={{ border: "1px dashed gray", borderRadius: 2 }} mt={1} p={2}>
            <Controls.Grid item>
              <Controls.Typography variant="caption1" sx={{ color: "#008526", fontWeight: "bold" }}>
                Cash on delivery available
              </Controls.Typography>
            </Controls.Grid>
            <Controls.Grid item>
              <Controls.Typography variant="caption1">Est Delivery </Controls.Typography>
              <Controls.Typography variant="caption1">{getExpectedDate(5)} - {getFutureDate(7)}</Controls.Typography>
            </Controls.Grid>
          </Controls.Grid>
        </Controls.Grid>
  
      </Controls.Grid>
    )}
  </Controls.Grid>
    </>
  )
}

export default ActiveAddressComponentTwo