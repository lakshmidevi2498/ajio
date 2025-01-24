import React, { useEffect, useState } from 'react'
import Controls from '../commons/Controls'
import theme from '../utilities/theme'
import { loadOrderInitiate } from '../redux/actions/loadOrderAction'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getToken, getUserId } from './GlobalFunction'
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import ProductStatusBarComponent from './ProductStatusBarComponent'
import CancelModalComponent from './CancelModalComponent'
import { saveAs } from "file-saver";
import axios from 'axios'
import { postInvoiceInitiate } from '../redux/actions/postinvioiceAction'
import { postCartInitiate } from '../redux/actions/postCartAction'
import { loadCartInitiate } from '../redux/actions/loadCartAction'
import { loadProductsDataInitiate } from '../redux/actions/loadProductsAction'

const OederDetailsComponent = () => {
    const [orders, setOrders] = useState([])
    const [cancel, setCancel] = useState(false)
    const [cancelProductId, setCancelProductId] = useState(null)
    const [cartId, setCartId] = useState(null)
    const [selectProduct, setSelectProduct] = useState([])
    const location = useLocation()
    const { id } = location.state || {};
    const dispatch = useDispatch()
    const userId = getUserId()
    const token = getToken()
    const navigate = useNavigate()

    const ordersData = useSelector((state) => state.loadOrder.data || {})
    console.log("ordersData", ordersData)

    useEffect(() => {
        const fetchOrders = async () => {
            await dispatch(loadOrderInitiate(userId))
        }
        fetchOrders()

    }, [])
  

    useEffect(() => {
        const data = ordersData.data?.orderDetails?.find(item => item._id === id);
        // const required =  data?.order;

        console.log("requiredId", data)
        setOrders(data)
        // console.log("Order ID:", data ? data.order._id : null);

    }, [id,ordersData])

    const handleBack = () => {
        navigate('/my-account/orders')
    }

    // useEffect(()=>{
    const totalItems = orders?.cart?.products?.reduce((total, item) => total + item.quantity, 0);
    console.log("totalItems", totalItems);

    const totalSaving = orders?.cart?.products
        ? orders.cart.products
            .map((item) => {
                return typeof item.product?.getitprice === 'number' ? item.product.getitprice : 0;
            })
            .reduce((total, getitprice) => total + getitprice, 0) + (orders.cart.total || 0)
        : NaN; 
    console.log("totalSaving", totalSaving);
  

    const statusMessages = {
        'Confirmed': 'Your Order was Confirmed', 
        'Packed': 'Your order has been Packed.',
        'Shipped': 'Your order is on the way!',
        'Out-for-delivery': 'Your order is out for delivery.',
        'Delivered': 'Your order was delivered.',
        'Cancelled': 'Your Order was Cancelled',
        'Arriving': "Your order was Arriving" 


    };

    const icon = {
        'Confirmed': <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} color="green" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path fill="currentColor" fillOpacity={0.3} d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"><animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0.3;0"></animate></path><path strokeDasharray={14} strokeDashoffset={14} d="M8 12l3 3l5 -5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="14;0"></animate></path></g></svg>,
        'Packed': <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 72 72"><path fill="#f4aa41" d="M34.322 64.164a1 1 0 0 1-.5-.134l-22.69-13.332a1 1 0 0 1-.5-.866l-.25-27.414a1 1 0 0 1 .5-.866L35.072 7.22c.31-.178.69-.178 1 0l22.69 13.082a1 1 0 0 1 .003 1.731l-23.193 14l-.25 27.133a1 1 0 0 1-1 .998"></path><path fill="#f4aa41" d="m36 64.572l24.759-14.108l-.346-28.476l-24.841 14.045z"></path><path fill="#d0cfce" d="M44.442 37.978a2.47 2.47 0 0 1-1.25-2.163v-4.172l-22.88-15.53c.692-.456 6.218-3.632 6.56-3.722l26.15 13.002a1 1 0 0 1 .5.866v6.024a3.29 3.29 0 0 1-1.64 2.841l-4.945 2.854c-.77.45-1.725.45-2.496 0m.397 21.497v-3.336a2.98 2.98 0 0 1 1.485-2.572l6.073-3.507a1.847 1.847 0 0 1 2.77 1.6s-.022 1.605-.33 1.847c-2.04 1.61-9.998 6.279-9.998 5.968"></path><path fill="#3f3f3f" d="M44.427 45.946v.869a1.497 1.497 0 0 0 2.246 1.296l6.804-3.76a2.28 2.28 0 0 0 1.14-1.975v-1.118a1.444 1.444 0 0 0-2.166-1.25l-6.745 3.724a2.56 2.56 0 0 0-1.279 2.214"></path><path fill="#fff" d="m31.083 38.917l-8.298-4.653v7.442l8.298 4.653z"></path><g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M61.262 21.168L35.572 6.336L9.882 21.168v29.664l25.69 14.832l25.69-14.832zm-25.69 14.865v29.631m.058-29.631L9.94 21.201m42.577 5.049l8.745-5.049m-25.69 14.832l8.616-4.974"></path><path d="m26.884 11.457l25.638 14.801v6.025a2.28 2.28 0 0 1-1.14 1.975l-4.944 2.854a1.497 1.497 0 0 1-2.246-1.296v-4.749L18.624 16.25m12.459 22.667l-8.298-4.653v7.442l8.298 4.653zm23.084 15.749V51.66a.847.847 0 0 0-1.271-.734l-6.073 3.506a1.97 1.97 0 0 0-.985 1.707v3.336m-1.411-13.529v.869a1.497 1.497 0 0 0 2.246 1.296l6.804-3.76a2.28 2.28 0 0 0 1.14-1.975v-1.118a1.444 1.444 0 0 0-2.166-1.25l-6.745 3.724a2.56 2.56 0 0 0-1.279 2.214"></path></g></svg>,
        'Delivered': <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#166705" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="#166705"><path d="M21 7v5M3 7v10.161c0 1.383 1.946 2.205 5.837 3.848C10.4 21.67 11.182 22 12 22V11.355M15 19s.875 0 1.75 2c0 0 2.78-5 5.25-6"></path><path d="M8.326 9.691L5.405 8.278C3.802 7.502 3 7.114 3 6.5s.802-1.002 2.405-1.778l2.92-1.413C10.13 2.436 11.03 2 12 2s1.871.436 3.674 1.309l2.921 1.413C20.198 5.498 21 5.886 21 6.5s-.802 1.002-2.405 1.778l-2.92 1.413C13.87 10.564 12.97 11 12 11s-1.871-.436-3.674-1.309M6 12l2 1m9-9L7 9"></path></g></svg>,
        // <Controls.CheckCircleRoundedIcon sx={{ fontSize: { xs: 20, sm: 30 } }} />,
        'Out_for_delivery': <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#41b9da" d="M19 10.35V5h-5v2h3v2.65L13.52 14H10V9H2v7h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1"></path> <path fill="#41b9da" d="M5 6h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></path> </svg>,
        // <VideoLabelIcon sx={{ fontSize: { xs: 20, sm: 30 } }} />,
        'Shipped': <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48"><path fill="#8bc34a" d="M43 36H29V14h10.6c.9 0 1.6.6 1.9 1.4L45 26v8c0 1.1-.9 2-2 2"></path><path fill="#388e3c" d="M29 36H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h22c1.1 0 2 .9 2 2z"></path><g fill="#37474f"><circle cx={37} cy={36} r={5}></circle><circle cx={13} cy={36} r={5}></circle></g><g fill="#78909c"><circle cx={37} cy={36} r={2}></circle><circle cx={13} cy={36} r={2}></circle></g><path fill="#37474f" d="M41 25h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h5.3c.4 0 .8.3.9.7l1.7 5.2c0 .1.1.2.1.3V24c0 .6-.4 1-1 1"></path><path fill="#dcedc8" d="m21.8 13.8l-7.9 7.9l-3.7-3.8L8 20.1l5.9 5.9L24 15.9z"></path></svg>,
        // <Controls.LocalShippingIcon sx={{ fontSize: { xs: 20, sm: 30 } }} />,
        'Cancelled': <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} color="red" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7t.7.275t.7-.275zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path></svg>

    }

    const extraCharges = 118;
    const productCount = orders?.cart?.products?.length || 0;
    const perProductCharge = productCount > 0 ? extraCharges / productCount : 0;

    const handleCancelProduct = (productId, cartId, item) => {

    
        setCancel(true)
        setCancelProductId(productId)
        setCartId(cartId)
        setSelectProduct(item)
    }

    const handleDownload = async (id) => {
      
        try {
            const response = await axios.post("https://ajio-2.onrender.com/download-invoice", { orders }, {
                responseType: "blob",
            });
            // dispatch(postInvoiceInitiate(orders))


            const blob = new Blob([response.data], { type: "application/pdf" });
            saveAs(blob, "invoice.pdf");
        } catch (error) {
            console.error("Error downloading the invoice", error);
        }
    };

  const handleAddToBag = async (productId,size) => {
  
    await dispatch(postCartInitiate(userId,productId,size))
    await dispatch(loadCartInitiate(token,userId))
    await dispatch(loadProductsDataInitiate())
  
  }


    return (
        <>
            <Controls.Grid container justifyContent="center" backgroundColor="#f7f7f7">
                <Controls.Grid item xs={12} sx={{ justifyContent: "center", }} mt={{ xs: 10, md: 15 }} mb={3}>
                    <Controls.Grid item xs={11} md={9.5} sx={{ justifyContent: "center", margin: "auto" }} >
                        <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between", }} p={{ xs: 1, sm: 2 }} >
                            <Controls.Grid item sx={{ display: "flex", cursor: "pointer" }} gap={2} onClick={handleBack}>
                                <Controls.Grid item >
                                    <Controls.ChevronLeftIcon sx={{ color: theme.palette.one.text }} />
                                </Controls.Grid>
                                <Controls.Grid item>
                                    <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.text }}>Back to Orders</Controls.Typography>
                                </Controls.Grid>
                            </Controls.Grid>
                            <Controls.Grid item>
                                <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.text }}>Need help ?</Controls.Typography>
                            </Controls.Grid>
                        </Controls.Grid>
                        <Controls.Grid item xs={12} sx={{ display: { xs: "block", sm: "flex" }, justifyContent: { xs: "", sm: "space-between" }, }} gap={2}>
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
                                                        <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.text, cursor: "pointer" }} onClick={() => handleDownload(orders._id)}>Invoice</Controls.Typography>
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
                                                          </Controls.Grid>) : ""}


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
                            <Controls.Grid item sm={4} sx={{ height: "auto" }}>
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
                                                        <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", color: '#6d6d6d', fontSize: "14px", fontWeight: "bold" }}>{orders?.address?.mobile}</Controls.Typography>
                                                    </Controls.Grid>
                                                </Controls.Grid>

                                            </Controls.Grid>

                                        </Controls.Grid>
                                    </Controls.Grid>

                                </Controls.Grid>
                            </Controls.Grid>
                        </Controls.Grid>
                    </Controls.Grid>
                </Controls.Grid>

            </Controls.Grid>
        </>
    )
}

export default OederDetailsComponent