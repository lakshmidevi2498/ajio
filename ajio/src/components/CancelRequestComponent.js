import React, { useState } from 'react'
import Controls from '../commons/Controls'
import theme from '../utilities/theme';
import { FormControl } from '@mui/material';
import { OrderPatchInitiate } from '../redux/actions/orderPatchAction';
import { loadOrderInitiate } from '../redux/actions/loadOrderAction';
import { getUserId } from './GlobalFunction';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const CancelRequestComponent = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { selectProduct, perProductCharge, productId, cartId } = location.state || {};

  console.log("params", selectProduct, perProductCharge, productId, cartId);
  const userId = getUserId()
  const dispatch = useDispatch()
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const options = [
    "Better price else where", "want to change the delivery address", "wrong size/color ordered", "Don't want the product anymore", "want to change the payment type", "Delivery date related issue"
  ]

  const handleCancelItem = async (selectedReason) => {
   
    console.log("productId in handleCancelItem", cartId, productId)

    const body = { orderedStatus: "Cancelled", selectedReason, productShippingStatus: "Cancelled", cartId, productId, productOrderedStatus: "cancelled" };
    await dispatch(OrderPatchInitiate(body))
    await dispatch(loadOrderInitiate(userId))
    navigate('/my-account/orders')


  }
  const handleNavigate = () => {
    navigate('/my-account/orders')
  }

  return (
    <>
      <Controls.Grid container justifyContent="center">
        <Controls.Grid item xs={12} sx={{justifyContent:"center",}}>
        <Controls.Grid item xs={12} sx={{textAlign:"start",justifyContent:"center",}}  px={2} >
          
                <Controls.ArrowBackIcon sx={{ marginTop: "10px", cursor: "pointer" }} onClick={handleNavigate} />
            </Controls.Grid>
          <Controls.Grid item xs={12} sx={{ display: {xs:"block",sm:"flex"} }} p={2} gap={1}>
          
            <Controls.Grid item xs={12}>
              <Controls.Box
                component="img"
                src={selectProduct.product.image}
                sx={{ width: "100%", height: "100%" }}
              />
            </Controls.Grid>
            <Controls.Grid item xs={12}>
              <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                <Controls.Grid item xs={12}>
                  <Controls.Typography variant="caption1" sx={{ fontWeight: "bold", fontSize: "20px" }}>
                    Cancel Request
                  </Controls.Typography>
                </Controls.Grid>

              </Controls.Grid>
              <Controls.Divider sx={{ marginY: 1 }} />
              <Controls.Grid item>
                <Controls.Typography variant="caption1">
                  {selectProduct?.product?.brandname} - {selectProduct?.product?.name}
                </Controls.Typography>
                <Controls.Typography variant="caption1" sx={{ fontWeight: "bold" }}>
                  ₹ {selectProduct?.product?.getitprice + Number(perProductCharge)}
                </Controls.Typography>
                <Controls.Grid item my={1} sx={{ display: "flex" }} gap={2}>
                  <Controls.Grid item>
                    <Controls.Typography variant="caption1" sx={{ fontWeight: "normal" }}>
                      size{" "}
                    </Controls.Typography>
                    <Controls.Typography variant="caption1" sx={{ fontWeight: "bold" }}>
                      {selectProduct?.size}
                    </Controls.Typography>
                  </Controls.Grid>
                  <Controls.Grid item>
                    <Controls.Typography variant="caption1" sx={{ fontWeight: "normal" }}>
                      qty{" "}
                    </Controls.Typography>
                    <Controls.Typography variant="caption1" sx={{ fontWeight: "bold" }}>
                      {selectProduct?.quantity}
                    </Controls.Typography>
                  </Controls.Grid>
                </Controls.Grid>
              </Controls.Grid>
              <Controls.Grid item>
                <Controls.Typography variant="caption1" sx={{ color: "gray" }}>
                  Reason
                </Controls.Typography>
              </Controls.Grid>
              <Controls.Grid item xs={12} my={1}>
                <FormControl fullWidth>
                  <input
                    list="dropdown-options"
                    value={selectedValue}
                    onChange={handleChange}
                    placeholder="Select an Option"
                    className="input-field"
                    style={{
                      width: "100%",
                      padding: "8px",
                      fontSize: "14px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                  <datalist id="dropdown-options">
                    {options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </datalist>
                </FormControl>
              </Controls.Grid>
              <Controls.Grid item>
                <Controls.Typography variant="caption1">
                  We'd love to hear more feedback.
                </Controls.Typography>
                <Controls.Typography variant="caption1" sx={{ color: theme.palette.one.text }}>
                  Write a comment
                </Controls.Typography>
              </Controls.Grid>
              <Controls.Grid item xs={12} my={1}>
                <Controls.TextField placeholder="Enter comment here..." fullWidth multiline rows={4} />
              </Controls.Grid>
              <Controls.Grid container justifyContent="flex-end" sx={{ width: "100%" }}>
                <Controls.Grid item>
                  <Controls.Typography variant="caption1" sx={{ fontSize: "12px", textAlign: "right" }}>
                    200 char limit
                  </Controls.Typography>
                </Controls.Grid>
              </Controls.Grid>
              <Controls.Grid item xs={12}>
                <Controls.Typography variant="caption1" sx={{ fontSize: "14px" }}>
                  Refund for pre-paid orders will be initiated instantly and will reflect within a maximum
                  5-7 business days.
                </Controls.Typography>
              </Controls.Grid>
              <Controls.Grid
                item
                sx={{ display: "flex", margin: "auto", justifyContent: "center" }}
                gap={2}
              >
                <Controls.Grid item my={2}>
                  <Controls.Typography
                    variant="caption1"
                    sx={{
                      color: theme.palette.one.text2,
                      border: `2px solid ${theme.palette.one.text2}`,
                      cursor: "pointer",
                    }}
                    py={1}
                    px={3.5}
                  >
                    CANCEL
                  </Controls.Typography>
                </Controls.Grid>
                <Controls.Grid item my={2}>
                  <Controls.Typography
                    variant="caption1"
                    sx={{
                      backgroundColor: selectedValue ? theme.palette.one.text2 : "gray",
                      paddingX: 1,
                      color: "white",
                      border: `2px solid ${theme.palette.one.text2}`,
                      cursor: selectedValue ? "pointer" : "not-allowed",
                    }}
                    py={1}
                    px={2.5}
                    onClick={selectedValue ? () => handleCancelItem(selectedValue) : undefined}
                  >
                    CANCEL ITEM
                  </Controls.Typography>
                </Controls.Grid>
              </Controls.Grid>
            </Controls.Grid>
          </Controls.Grid>
        </Controls.Grid>
      </Controls.Grid>
    </>
  )
}

export default CancelRequestComponent