import React from 'react'
import Controls from '../commons/Controls'

const MyOrdersComponentOne = ({orders,product,handleOrderDetails,handleNavigateToWishlist,statusMessages}) => {
  return (
    <>
    <Controls.Grid item xs={12} sx={{ justifyContent: "center", textAlign: "left",  }}>
                        {orders?.length > 0 ? (
                            <>
                                {orders?.map((item, index) => (
                                    <Controls.Grid item xs={12} key={index}>

                                        <Controls.Grid item my={2}>
                                            <Controls.Typography variant='caption1' sx={{ color: "gray", textAlign: "left" }}>OrderId:{item.paymentDetails?.orderId} </Controls.Typography>
                                        </Controls.Grid>
                                        <Controls.Grid sx={{ border: "1px solid lightgray", }}>
                                            {item?.cart?.products.map((prdt, innerIndex) => (
                                                <>
                                                    <Controls.Grid item key={innerIndex} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid lightgray", cursor: "pointer", "&:hover": { backgroundColor: "#fafafa" } }} onClick={() => handleOrderDetails(item?._id)}>
                                                        <Controls.Grid item sx={{ dispaly: "flex", padding: 1.5, }}>
                                                            <Controls.Grid item sx={{ display: "flex", alignItems: "center" }} gap={1}>
                                                                <Controls.Grid item>
                                                                    <Controls.Box
                                                                        src={prdt.product.image}
                                                                        width="100%"
                                                                        height="100%"
                                                                        component="img"
                                                                        sx={{ width: {xs:"80px",sm:"120px"}, height: {xs:"100px",sm:"150px"} }}
                                                                    />
                                                                </Controls.Grid>
                                                                <Controls.Grid item sx={{ alignItems: "center" }}>
                                                                    <Controls.Typography
                                                                        variant="caption1"
                                                                        sx={{ fontWeight: "bold" ,color:prdt.productShippingStatus === "Cancelled" ? 'red' :"black"}}
                                                                    >
                                                                        {prdt.productShippingStatus}
                                                                    </Controls.Typography><br />
                                                                    <Controls.Typography
                                                                        variant="caption1"
                                                                        sx={{ fontWeight: "normal" ,fontSize:{xs:"12px",sm:"15px"}}}
                                                                    >
                                                                        {statusMessages[prdt.productShippingStatus]}
                                                                    </Controls.Typography>
                                                                </Controls.Grid>
                                                            </Controls.Grid>

                                                        </Controls.Grid>
                                                        <Controls.Grid item>
                                                            <Controls.KeyboardArrowRightIcon sx={{ color: "gray", marginRight: 2 }} />
                                                        </Controls.Grid>
                                                    </Controls.Grid>
                                                </>
                                            ))}


                                        </Controls.Grid>

                                    </Controls.Grid>

                                ))}
                            </>

                        ) : product?.length > 0 ? (
                            <>
                                <Controls.Grid item xs={12} sx={{ justifyContent: 'center', }}>
                                    <Controls.Grid item sx={{ textAlign: "center" }}>
                                        <Controls.Typography variant='caption1' sx={{ fontWeight: "bold" ,fontSize:"18px"}}>No orders placed</Controls.Typography>
                                    </Controls.Grid>
                                    <Controls.Grid item sx={{ textAlign: "center" }}>
                                        <Controls.Typography variant='caption1' sx={{ fontWeight: "normal" ,color:"gray"}}>You have items in your wishlist waiting to be yours!</Controls.Typography>
                                    </Controls.Grid>
                                    <Controls.Grid
                                        container
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: "16px",
                                            justifyContent: "center"
                                        }}
                                    >
                                        {product.map((item, index) => (
                                            <Controls.Grid
                                                item
                                                key={index}
                                                sx={{ display: "flex" }}my={1}
                                            >
                                                <Controls.Box
                                                    sx={{
                                                        position: "relative",
                                                        width: "80px",
                                                        height: "100px",
                                                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                                    }}
                                                >
                                                    <Controls.CardMedia
                                                        component="img"
                                                        src={item.image}
                                                        sx={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                </Controls.Box>
                                            </Controls.Grid>
                                        ))}
                                    </Controls.Grid>
                                    <Controls.Grid item sx={{display:"block",margin:"auto",textAlign:"center",cursor:"pointer"}} onClick={handleNavigateToWishlist}>
                                        <Controls.Button variant='contained'>ADD FROM WISHLIST</Controls.Button>
                                    </Controls.Grid>

                                </Controls.Grid>
                            </>
                        ) : (

                            <>
                                <Controls.Grid item>
                                    <Controls.Typography variant='caption1' sx={{ fontWeight: "bold" }}>
                                        No Orders Placed
                                    </Controls.Typography>
                                </Controls.Grid>
                            </>
                        )}
                    </Controls.Grid>
    </>
  )
}

export default MyOrdersComponentOne