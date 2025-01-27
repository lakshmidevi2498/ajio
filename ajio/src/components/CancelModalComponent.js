import React, {  useState } from 'react'
import Controls from '../commons/Controls' 
import {  FormControl, useMediaQuery } from '@mui/material';
import { useDispatch ,} from 'react-redux';
import { OrderPatchInitiate } from '../redux/actions/orderPatchAction';
import { loadOrderInitiate } from '../redux/actions/loadOrderAction';
import { getToken, getUserId } from './GlobalFunction'; 
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {xs:"80%",sm:'auto'},
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    outline: "none",
};

const CancelModalComponent = ({ selectProduct,perProductCharge ,cartId ,productId}) => {
    console.log("productId", selectProduct) 
    const [modalOpen, setModalOpen] = useState(true)
    const [openn, setOpenn] = React.useState(true);
    const [show, setShow] = useState(false)
    const [selectedValue, setSelectedValue] = useState(''); 
      const theme = useTheme();
        const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'));

    const dispatch = useDispatch()
    const userId = getUserId() 
    const navigate = useNavigate()


 
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
 
    const handleClose = () => setModalOpen(false);
    const handleShowModal = () => {
        setOpenn(false)
        setShow(true)
    }

 

    const handleCancelItem =async  (selectedReason) => {
        setShow(false)
        setModalOpen(false)
        setOpenn(false)
       
     
        console.log("productId in handleCancelItem",cartId ,productId)

        const body = { orderedStatus: "Cancelled", selectedReason ,productShippingStatus:"Cancelled",cartId ,productId ,productOrderedStatus:"cancelled"};
        await dispatch(OrderPatchInitiate(body))
        await dispatch(loadOrderInitiate(userId))
        navigate('/my-account/orders')


    }
const handleCancelRequestMobile = () => {
  navigate('/cancelrequest', {
    state: {
      selectProduct,
      perProductCharge,
      productId,
      cartId,
    },
  });
};

    const options = [
      "Better price else where", "want to change the delivery address", "wrong size/color ordered", "Don't want the product anymore", "want to change the payment type", "Delivery date related issue"
  ]


    return (
        <>
            <Controls.Grid container justifyContent="center">
                <Controls.Grid item sx={{ alignItems: "center", textAlign: "center" }}>
                    <Controls.Modal open={modalOpen} onClose={handleClose}>
                        <Controls.Box sx={style}>
                            {openn &&
                                <>
                                <Controls.Grid item xs={12} >
                                    <Controls.Box >
                                        <Controls.Grid tem p={{xs:1,sm:3}} xs={12}>
                                            <Controls.Typography variant=' caption1' sx={{fontSize:{xs:"12px",sm:"16px"}}}>Are you sure you want to cancel this item?</Controls.Typography>
                                        </Controls.Grid>
                                        <Controls.Grid item sx={{ display: "flex", textAlign: "center", alignItems: "center", }} xs={12}>
                                            <Controls.Grid item xs={6} sx={{ color: theme.palette.one.text2, border: `2px solid ${theme.palette.one.text2}`, cursor: "pointer" }} py={1}>
                                                <Controls.Typography variant='caption1' sx={{fontSize:{xs:"12px",sm:"16px"}}}>NO</Controls.Typography>
                                            </Controls.Grid>
                                            <Controls.Grid item xs={6} sx={{ backgroundColor: theme.palette.one.text2, paddingX: 1, color: "white", border: `2px solid ${theme.palette.one.text2}`, cursor: "pointer" }} py={1} onClick={handleShowModal}>
                                                <Controls.Typography variant='caption1' sx={{fontSize:{xs:"12px",sm:"16px"}}}>YES , I AM SURE</Controls.Typography>
                                            </Controls.Grid>
                                        </Controls.Grid>
                                    </Controls.Box>
                                    </Controls.Grid>
                                </>}
                               
                            {show &&
                            <>
                             {isMobileScreen  ?  handleCancelRequestMobile() : (
                              <>
                              <Controls.Box sx={{ width: "1000px" }}> 
                              <Controls.Grid item xs={12} sx={{ display: "flex" }} p={2} gap={1}>
                                  <Controls.Grid item xs={4}>
                                    <Controls.Box
                                      component="img"
                                      src={selectProduct.product.image}
                                      sx={{ width: "300px", height: "350px" }}
                                    />
                                  </Controls.Grid>
                                  <Controls.Grid item xs={8}>
                                    <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                                      <Controls.Grid item xs={8}>
                                        <Controls.Typography variant="caption1" sx={{ fontWeight: "bold", fontSize: "20px" }}>
                                          Cancel Request
                                        </Controls.Typography>
                                      </Controls.Grid>
                                      <Controls.Grid px={2} item xs={2} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }} pt={1}>
                                        <Controls.CloseIcon onClick={handleClose} />
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
                                    <Controls.Grid item xs={6} my={1}>
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
                                          onClick={selectedValue ? ()=>handleCancelItem(selectedValue) : undefined}
                                        >
                                          CANCEL ITEM
                                        </Controls.Typography>
                                      </Controls.Grid>
                                    </Controls.Grid>
                                  </Controls.Grid>
                                </Controls.Grid>
                              </Controls.Box>;
                            </>

                             )}
                             </>
                               }
                        </Controls.Box>

                    </Controls.Modal>

                </Controls.Grid>
            </Controls.Grid>
        </>
    )
}

export default CancelModalComponent