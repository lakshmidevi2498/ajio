import React from 'react' 
import ProductStatusBarComponent from './ProductStatusBarComponent'
import CancelModalComponent from './CancelModalComponent'
import Controls from '../commons/Controls'
import theme from '../utilities/theme'

const OederDewtailsComponentOne = ({orders,  icon ,statusMessages,handleCancelProduct,handleDownload,handleAddToBag,  cancel,selectProduct,cartId,cancelProductId}) => {

    const extraCharges = 118;
    const productCount = orders?.cart?.products?.length || 0;
    const perProductCharge = productCount > 0 ? extraCharges / productCount : 0;
  return (
    <>
    <Controls.Grid item sm={9} sx={{ height: "auto" }}>

{orders?.cart?.products?.map((item, index) => (
    <>

        <Controls.Grid item xs={12} key={index} sx={{ backgroundColor: "white", }} mb={2} pb={1}>
            <Controls.Grid item sx={{ display: { xs: "block", sm: "flex" }, justifyContent: { xs: "end", sm: "space-between" } }} gap={1} px={2} pt={2}>
                <Controls.Grid item sx={{ display: "flex" }} gap={1}>
                    <Controls.Grid item mt={.5}>
                        {icon[item.productShippingStatus]}
                    </Controls.Grid>
                    <Controls.Grid item mt={0.6}>
                        <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", fontSize: "18px" }}>{statusMessages[item.productShippingStatus]}</Controls.Typography>
                    </Controls.Grid>
                </Controls.Grid>


                {item.productShippingStatus === "Delivered" && (<Controls.Grid item mb={{ xs: 1, sm: 0 }}>
                    <Controls.Button variant='contained'>RETURN/EXCHANGE</Controls.Button>
                </Controls.Grid>)}
            </Controls.Grid>
            <Controls.Grid item xs={12} px={2}>
                {(item.productShippingStatus !== "Confirmed" && item.productShippingStatus !== "Cancelled" && item.productShippingStatus !== "Delivered") && (
                    <>
                        <ProductStatusBarComponent item={item} orderDate={orders.orderDate} statusMessages={statusMessages} cartId={item._id} />
                    </>
                )}
            </Controls.Grid>

            {item.productShippingStatus === "Delivered" &&
                (<Controls.Grid item sx={{ display: "flex", color: "gray", fontSize: { xs: "12px", sm: "15px" } }} gap={1} px={2}>
                    <Controls.Grid item sx={{ display: "flex", }} gap={1}>
                        <Controls.Typography variant='caption1'>{item.productShippingStatus} on &nbsp;
                            {orders.orderDate && (
                                new Date(orders.orderDate).toLocaleDateString("en-US", {
                                    weekday: "long",
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric"
                                }))}
                        </Controls.Typography>

                        <Controls.Box component='img' src="./assets/images/Proforma Invoice.png" sx={{ width: "25px", height: "25px" }} />
                        <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.text, cursor: "pointer" }} onClick={() => handleDownload(item,perProductCharge,orders?.address?._id,orders?.paymentDetails?.orderId)}>Invoice</Controls.Typography>
                    </Controls.Grid>
                </Controls.Grid>)}

            {(item.productShippingStatus === 'Shipped' || item.productShippingStatus === "Out-for-delivery" || item.productShippingStatus === "Delivered") && (<Controls.Grid item p={2}>
                <Controls.Grid item mt={3}>
                    <Controls.Typography variant='caption1' sx={{ color: "gray" }}>Shipping to</Controls.Typography>
                </Controls.Grid>
                <Controls.Grid item>
                    <Controls.Typography variant='caption1' sx={{ fontWeight: "bold" }}>{orders.address.name}</Controls.Typography>
                </Controls.Grid>
            </Controls.Grid>)}

            <Controls.Grid item sx={{ borderTop: "1px solid lightgray", height: "auto", position: "relative", }} mt={1} xs={12}>
                {item.productShippingStatus === "Cancelled" && (
                    <Controls.Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(255, 255, 255, 0.5)",
                            zIndex: 10,
                        }}
                    />)}
                <Controls.Grid item xs={12} sx={{ display: { xs: "block", md: 'flex' }, justifyContent: "space-between", margin: "auto", alignItems: "center", }} gap={2} p={{ xs: 1, sm: 2 }}>


                    <Controls.Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: "relative", }} gap={{ xs: 1, sm: 5 ,md:2,lg:5}}>

                        <Controls.Grid item xs={5} md={3} sx={{  }}>
                            <Controls.Box
                                component="img"
                                width="100%"
                                height="100%"
                                src={item?.product?.image}
                                sx={{ width: { xs: "100%", lg: "100px" }, height: { xs: "100%", lg: "120px" }, display: "block", position: "relative" }}
                            />
                            {item.productShippingStatus === "Cancelled" && <Controls.Typography variant='caption1' sx={{
                                backgroundColor: theme.palette.one.bag, fontSize: "1rem",
                               
                                 bottom:{xs:0},
                                 left:{xs:60,sm:83,md:67,lg:50},       
                                 position: "absolute", transform: "translate(-50%, -50%)", color: "white", paddingX: { xs: 2.7, sm:5,md: 2 }, zIndex: 10,
                            }}>Cancelled</Controls.Typography>}
                        </Controls.Grid>

                        <Controls.Grid item sx={{}} xs={7} md={8}>

                            <Controls.Grid item>
                                <Controls.Typography variant='caption1' sx={{ fontSize: { xs: "13px", sm: "15px" } }}>{item?.product?.brandname} - {item?.product?.name}</Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item>
                                <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", fontSize: { xs: "13px", sm: "15px" } }}>₹ {item?.product?.getitprice + Number(perProductCharge)} (Includes Convenience Fee)</Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item my={1} sx={{ display: "flex" }} gap={2}>
                                <Controls.Grid item >
                                    <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", fontSize: { xs: "13px", sm: "15px" } }}>size  </Controls.Typography>&nbsp;
                                    <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", fontSize: { xs: "13px", sm: "15px" } }}>{item?.size}</Controls.Typography>
                                </Controls.Grid>
                                <Controls.Grid item >
                                    <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", fontSize: { xs: "13px", sm: "15px" } }}>qty  </Controls.Typography>&nbsp;
                                    <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", fontSize: { xs: "13px", sm: "15px" } }}>{item?.quantity}</Controls.Typography>
                                </Controls.Grid>
                            </Controls.Grid>
                            <Controls.Grid item>
                                <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "13px", sm: "15px" }, fontWeight: "bold" }}>
                                    {statusMessages[item?.productShippingStatus]}
                                </Controls.Typography>
                            </Controls.Grid>


                        </Controls.Grid>

                    </Controls.Grid>

                    {item.productShippingStatus === "Cancelled" ? (
                        <Controls.Grid item sx={{ textAlign: { xs: "right", md: "center" }, zIndex: 20, cursor:"pointer"}} md={4} lg={3} onClick={ () => handleAddToBag(item?.product?._id,item?.size)}>
                        <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.text, zIndex: 200, fontSize: { md: "13px", lg: "15px" } }}>Re-order-Item</Controls.Typography>
                    </Controls.Grid>
                    ) : item.productShippingStatus !== "Delivered" ?
                        (
                            <Controls.Grid
                            item
                            sx={{ textAlign: { xs: "right", md: "center" }, zIndex: 20, position: "relative" }}
                            onClick={() => {
                              if (!["Shipped", "Out_for_delivery", "Delivered"].includes(item.productShippingStatus)) {
                                handleCancelProduct(item._id, orders.cart._id, item);
                              }
                            }}
                            md={4}
                            lg={3}
                          >
                            <Controls.Button
                              sx={{
                                color: theme.palette.one.text,
                                cursor: "pointer",
                                textTransform: "initial",
                                fontSize: { xs: "13px", md: "10px", lg: "13px" },
                                "&.Mui-disabled": {
                                    color: theme.palette.one.text,
                                    opacity: 0.7,
                                    cursor: "not-allowed", 
                                  },
                              }}
                              disabled={["Shipped", "Out_for_delivery", "Delivered"].includes(item.productShippingStatus)}
                            >
                              Cancel-Item
                            </Controls.Button>
                          </Controls.Grid>
                          ) : ""}


                </Controls.Grid>
                {item.productShippingStatus === "Delivered" && (


                    <Controls.Grid item sx={{ backgroundColor: "lightgray", alignItems: {xs:"center",lg:"flex-start"}, textAlign: {xs:"center",lg:"left"}, display: "block", marginX: {xs:"auto",lg:2},  }} px={2} py={1} xs={11} sm={11} lg={4} my={2}>
                        <Controls.Grid item sx={{ display: "flex", marginX: "auto" }} gap={{ xs: 0.5, md: 2 }}>
                            <Controls.Grid item >
                                <Controls.Typography variant='caption1' sx={{ fontSize: "12px", sm: "15px" }}>Rate this Product</Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item sx={{ display: "flex", gap: "4px" }}>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Controls.StarIcon key={index} sx={{ color: "white" }} />
                                ))}
                            </Controls.Grid>
                        </Controls.Grid>
                    </Controls.Grid>
                )}
                {(item.productShippingStatus === "Shipped" && item.productShippingStatus === "Out-for-delivery" && item.productShippingStatus === "Delivered") && (

                    <Controls.Grid item p={2} sx={{ backgroundColor: "#FFFDED" }}>
                        <Controls.Typography variant='caption1'>Cancellation is not available</Controls.Typography>&nbsp;&nbsp;
                        <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.text }}>More details</Controls.Typography>
                    </Controls.Grid>
                )}
            </Controls.Grid>


        </Controls.Grid>
        {cancel && <CancelModalComponent perProductCharge={perProductCharge} cartId={cartId} productId={cancelProductId} selectProduct={selectProduct} />}
    </>
))}

</Controls.Grid>
    </>
  )
}

export default OederDewtailsComponentOne