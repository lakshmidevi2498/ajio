import React from 'react'
import Controls from '../commons/Controls'
import theme from '../utilities/theme'

const OederDetailsComponentTwo = ({ totalItems,totalSaving,orders}) => {
  return (
    <>
    <Controls.Grid item xs={12}>
                                    <Controls.Grid item sx={{ backgroundColor: "#ece6de" }} p={{ xs: 1, md: 2 }}>
                                        <Controls.Typography variant='caption1'>{orders?.paymentDetails?.orderId}</Controls.Typography>&nbsp;
                                        <Controls.Typography variant='caption1' sx={{ color: "gray" }}>( {totalItems} Items )</Controls.Typography>
                                        <Controls.Grid item sx={{ display: "flex" }} gap={1}>
                                            <Controls.Typography variant='caption1' sx={{ fontSize: { xs: "12px ", md: "15px" } }}>{orders?.shippingStatus} on &nbsp;
                                                {orders?.orderDate && (
                                                    new Date(orders?.orderDate).toLocaleDateString("en-US", {
                                                        weekday: "long",
                                                        day: "numeric",
                                                        month: "long",
                                                        year: "numeric"
                                                    }))}
                                            </Controls.Typography>
                                        </Controls.Grid>
                                        <Controls.Grid item>
                                            <Controls.Typography variant='caption1' sx={{ fontSize: { xs: "12px ", md: "15px" } }}>Paid by online Payment (Razorpay)</Controls.Typography>
                                        </Controls.Grid>
                                    </Controls.Grid>
                                    <Controls.Grid item sx={{ backgroundColor: "#fafafa", border: '1px solid lightgray' }} p={{ xs: 1, md: 2 }}>
                                        <Controls.Grid item>
                                            <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", fontSize: { xs: "16px", md: "18px" } }}>Order Payment Details</Controls.Typography>
                                        </Controls.Grid>
                                        <Controls.Divider sx={{ marginY: 0.3 }} />
                                        <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Controls.Grid item>
                                                <Controls.Typography variant='caption1'>Order Amount</Controls.Typography>
                                            </Controls.Grid>
                                            <Controls.Grid item>
                                                <Controls.Typography variant='caption1'>₹ {orders?.bagDiscount}</Controls.Typography>
                                            </Controls.Grid>
                                        </Controls.Grid>
                                        <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Controls.Grid item>
                                                <Controls.Typography variant='caption1'>Order Saving</Controls.Typography>
                                            </Controls.Grid>
                                            <Controls.Grid item>
                                                <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.text2 }}>- ₹ {orders?.bagDiscount - Number(totalSaving)}</Controls.Typography>
                                            </Controls.Grid>
                                        </Controls.Grid>
                                        <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Controls.Grid item>
                                                <Controls.Typography variant='caption1'>Convenience Fee</Controls.Typography>
                                                <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.text }}>What's this?</Controls.Typography>
                                            </Controls.Grid>
                                            <Controls.Grid item>
                                                <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.text2 }}>₹ 118</Controls.Typography>
                                            </Controls.Grid>
                                        </Controls.Grid>
                                        <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Controls.Grid item>
                                                <Controls.Typography variant='caption1' sx={{ fontWeight: "bold" }}>Order total</Controls.Typography>
                                            </Controls.Grid>
                                            <Controls.Grid item>
                                                <Controls.Typography variant='caption1' sx={{ fontWeight: "bold" }}>₹ {orders?.totalAmount}</Controls.Typography>
                                            </Controls.Grid>
                                        </Controls.Grid>
                                        <Controls.Divider sx={{ marginY: 1 }} />
                                        <Controls.Grid item >
                                            <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", fontSize: "15px" }}>Payment mode</Controls.Typography>
                                        </Controls.Grid>
                                        <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Controls.Grid item>
                                                <Controls.Typography variant='caption1' sx={{ fontWeight: "medium" }}>Online Payment</Controls.Typography>
                                            </Controls.Grid>
                                            <Controls.Grid item>
                                                <Controls.Typography variant='caption1' sx={{ fontWeight: "bold" }}>₹ {orders?.totalAmount}</Controls.Typography>
                                            </Controls.Grid>
                                        </Controls.Grid>

                                        <Controls.Box item sx={{ display: "flex", justifyContent: "end", backgroundColor: "white", }} p={0} component="span">
                                            <Controls.CardMedia component='img' src="./assets/images/add-delivery.svg" width="100%" height="100%" sx={{ width: "15px", height: "20px", color: theme.palette.one.text, }} />
                                            <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.text, fontSize: "14px", marginTop: 0.1 }}>Return Information</Controls.Typography>
                                        </Controls.Box>
                                    </Controls.Grid>


                                    <Controls.Grid item sx={{ backgroundColor: "#ffffff" }} p={{ xs: 1, md: 2 }} mt={2}>
                                        <Controls.Grid item>
                                            <Controls.Typography variant='caption1' sx={{ fontWeight: "bold" }}>Deliver to</Controls.Typography>
                                        </Controls.Grid>
                                        <Controls.Grid item mt={1} >

                                            <Controls.Grid item sx={{ display: { xs: "block", sm: "flex" }, justifyContent: { xs: "", sm: "space-between" } }}>
                                                <Controls.Grid item>
                                                    <Controls.Grid item>
                                                        <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", fontSize: "15px" }}>{orders?.address?.name}</Controls.Typography>&nbsp;&nbsp;
                                                        <Controls.Typography variant='caption1' sx={{ border: "1px solid black", borderRadius: 1, fontSize: "12px", padding: 0.5 }}>{orders?.address?.addressType}</Controls.Typography>
                                                    </Controls.Grid>
                                                    <Controls.Grid item>
                                                        <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>{orders?.address?.area},&nbsp;{orders?.address?.building}</Controls.Typography>
                                                    </Controls.Grid>
                                                    {orders?.address?.landmark &&
                                                        <Controls.Grid item>
                                                            <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>{orders?.address?.landmark}</Controls.Typography>
                                                        </Controls.Grid>}
                                                    <Controls.Grid item>
                                                        <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>{orders?.address?.district},&nbsp;{orders?.address?.state}</Controls.Typography>
                                                    </Controls.Grid>


                                                    <Controls.Grid item>
                                                        <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>India-{orders?.address?.pincode}</Controls.Typography>
                                                    </Controls.Grid>
                                                    <Controls.Grid item>
                                                        <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>Phone :</Controls.Typography>
                                                        <Controls.Typography variant='caption1' sx={{ color: '#6d6d6d', fontSize: "14px", fontWeight: "bold" }}>{orders?.address?.mobile}</Controls.Typography>
                                                    </Controls.Grid>
                                                </Controls.Grid>

                                            </Controls.Grid>

                                        </Controls.Grid>
                                    </Controls.Grid>

                                </Controls.Grid>
    </>
  )
}

export default OederDetailsComponentTwo