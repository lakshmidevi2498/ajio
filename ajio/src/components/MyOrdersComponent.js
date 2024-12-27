import React, { useEffect, useState } from 'react'
import Controls from '../commons/Controls'
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getUserId } from './GlobalFunction';
import { loadOrderInitiate } from '../redux/actions/loadOrderAction';
import { useNavigate } from 'react-router-dom'
import { loadWishlistInitiate } from '../redux/actions/loadWishlistAction';
import { loadCartInitiate } from '../redux/actions/loadCartAction';

const MyOrdersComponent = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState("Last  6 months");
    const [orders, setOrders] = useState([])
    const [product, setProduct] = useState([]);
    const [cartProduct, setCartProduct] = useState([]);
    const dispatch = useDispatch()
    const userId = getUserId()
    const token = getToken()
    const navigate = useNavigate()

    const ordersData = useSelector((state) => state.loadOrder.data || {})
    console.log("ordersData", ordersData)

    const wishlistData = useSelector((state) => state.loadwishlist.data);
    const cartData = useSelector((state) => state.loadcartproducts.data || [])

    useEffect(() => {
        const fetchWishlist = async () => {
            if(userId){
            dispatch(loadWishlistInitiate(userId));
            }
        };
        fetchWishlist();
    }, [dispatch, userId]);

    useEffect(() => {
        if (wishlistData && wishlistData.data) {
            const data = wishlistData.data?.wishlistData;
            if (data && data.products) {
                setProduct(data.products);
                console.log("product", data.products)
            }
        }
    }, [wishlistData]);

    useEffect(() => {
        const fetchOrders = async () => {
            await dispatch(loadOrderInitiate(userId))
        }
        fetchOrders()

    }, [])
    useEffect(() => {
        if (ordersData?.data) {
            const data = ordersData?.data?.orderDetails || []
            setOrders(data)
        }

    }, [ordersData])


    useEffect(() => {
        const fetchCart = async () => {
            if(userId){
            dispatch(loadCartInitiate(token, userId))
            }
        }
        fetchCart()
    }, [])

    useEffect(() => {
        if (cartData && cartData.data) {
            const data = cartData.data.cartDetails;
            if (data && data.products) {
                setCartProduct(data.products);
                console.log("productsData", data.products);
            }
        }
    }, [cartData]);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (option) => {
        setSelectedOption(option);
        handleClose();
    };
    const handleOrderDetails = (id) => {
        navigate('/orderdetails', { state: { id: id } })
         
    };


    const handleNavigateToWishlist = () => {
        navigate('/wishlist')
    }

        const statusMessages = {
            'Confirmed': 'Your Order was Confirmed',
            'Packed': 'Your order has been Packed.',
            'Shipped': 'Your order is on the way!',
            'Out_for_delivery': 'Your order is out for delivery.',
            'Delivered': 'Your order has been delivered.',
            'Cancelled': 'Your Order was Cancelled',
            'Arriving':'Your order was Arriving '
    
    
        };

    return (
        <>
            <Controls.Grid container justifyContent="center">
                <Controls.Grid item xs={12} sx={{ justifyContent: "center", backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", height: "auto" }} p={2}>
                    <Controls.Grid item sx={{ justifyContent: "center", margin: "auto", textAlign: "center" }}>
                        <Controls.Typography variant='caption1' sx={{ fontSize: "25px", color: "#323232", fontWeight: "bold" }}>My Orders</Controls.Typography>
                    </Controls.Grid>
                    <Controls.Grid item xs={8} sm={6} md={4}lg={2} my={2}>
                        <Controls.Grid
                            item
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                border: "1px solid black",
                                padding: 1,
                                fontWeight: "bold"
                            }} onClick={handleClick}
                        >
                            <Controls.Typography
                                variant="caption1"

                                sx={{ padding: { xs: 0, sm: 0.5 }, fontSize: { xs: "14px" }, color: "#333333" }}
                            >
                                {selectedOption}
                            </Controls.Typography>
                            <Controls.ExpandMoreIcon sx={{ color: "black", marginLeft: 1, fontSize: { xs: "20px" }, padding: 0, fontWeight: "bold" }} />
                        </Controls.Grid>

                        <Controls.Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                            PaperProps={{
                                sx: {
                                    width: "150px", // Set the desired width
                                },
                            }}
                            sx={{
                                marginTop: { xs: "0px" },
                            }}
                        >
                            {["Last 6 months", "2024", "2023", "2022", "2021"].map((option, index) => (
                                <>
                                    <Controls.MenuItem
                                        key={index}
                                        onClick={() => handleMenuItemClick(option)}
                                        sx={{
                                            fontSize: "12px",
                                            fontWeight: selectedOption === option ? "bold" : "normal",
                                            color: selectedOption === option ? "primary.main" : "inherit",
                                            width: "100%", // Ensure MenuItems take the full width
                                        }}
                                    >
                                        {option}
                                    </Controls.MenuItem>
                                    {index !== 4 && <Controls.Divider />}
                                </>
                            ))}
                        </Controls.Menu>

                    </Controls.Grid>

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
                </Controls.Grid>
            </Controls.Grid>
        </>
    )
}

export default MyOrdersComponent