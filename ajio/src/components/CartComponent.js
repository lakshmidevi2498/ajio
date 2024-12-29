import React, { useEffect, useState } from 'react'
import Controls from '../commons/Controls'
import { getToken, getUserId } from './GlobalFunction' 
import { useDispatch, useSelector } from 'react-redux'
import { loadCartInitiate } from '../redux/actions/loadCartAction'
import SizeModalComponent from './SizeModalComponent'
import OrderDetailsComponent from './OrderDetailsComponent'
import { deleteCartInitiate } from '../redux/actions/deleteCartAction'
import { useNavigate } from 'react-router-dom'
import { postWishlistInitiate } from '../redux/actions/postWishlistAction'

const CartComponent = () => {
    const [product, setProduct] = useState([])
    const [open, setOpen] = useState(false)
    const [id, setId] = useState(null)
    const userId = getUserId()
    const token = getToken()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cartData = useSelector((state) => state.loadcartproducts.data || [])
    console.log("cartData", cartData)
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
            const cartId = data?._id;
            sessionStorage.setItem('cartId',cartId)
            if (data && data.products) {
                setProduct(data.products);
                console.log("productsData", data.products);
            }
        }
    }, [cartData]);

    const handleWishlist = () => {
        navigate('/wishlist')
    }

    const handleOpen = (productId) => {
        setId(productId)
        setOpen(true)
    }

    const handleDeleteProductFromCart = async (productId) => {
        console.log("productId",productId)
        await dispatch(deleteCartInitiate(userId, productId)) 
        dispatch(loadCartInitiate(token, userId))


    }

    const handleMoveToWishlist = async (productId) => {
        await dispatch(deleteCartInitiate(userId, productId))
       
        await dispatch(loadCartInitiate(token, userId))
        await dispatch(postWishlistInitiate(userId,productId))

    }
    return (
        <>
            <Controls.Grid item container justifyContent="center" mt={{ xs: 12, sm: 15 ,lg:20}}>
                <Controls.Grid item xs={12}>

                    <Controls.Grid item xs={11.5} sm={11} md={9.5} sx={{ justifyContent: "center", margin: "auto" }} p={{ xs: 1, sm: 0 }}>
                        <Controls.Grid item xs={12} sx={{ display: { xs: "block", sm: "flex" }, justifyContent: { xs: "", sm: "space-between", } }} gap={{ sm: 2, lg: 3 }}>
                            {product.length > 0 ? (
                                <>
                                    <Controls.Grid item xs={12} sm={8} lg={9}>
                                        <Controls.Grid item sx={{ display: "flex", border: "1px dashed #8676D6" }} xs={12}>
                                            <Controls.Grid item xs={2} md={1.2} lg={0.7}>
                                                <Controls.Box
                                                    sx={{
                                                        width:"100%",
                                                        height:"100%", 
                                                        backgroundColor: "#8676D6",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Controls.CardMedia
                                                        component="img"
                                                        src="https://st2.depositphotos.com/1030387/6219/v/450/depositphotos_62192055-stock-illustration-3d-free-gift.jpg"
                                                        width="100%"
                                                        height="100%"
                                                        sx={{ objectFit: "contain", padding: 1 }}
                                                    />
                                                </Controls.Box>
                                            </Controls.Grid>
                                            <Controls.Grid xs={10} md={10.8} lg={11.3}
                                                item
                                                sx={{
                                                    display: "flex",
                                                    backgroundColor: "#f5edfa", 
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    width: "100%",
                                                }} 
                                            >
                                                <Controls.Grid
                                                    item
                                                    sx={{ display: "flex", justifyContent: "space-between", width: "100%" }} p={1.5}
                                                >
                                                    <Controls.Grid item>
                                                        <Controls.Typography
                                                            variant="caption1"
                                                            sx={{ color: "black", fontWeight: "bold", fontSize: { xs: "10px", sm: "14px" } }}
                                                        >
                                                            Get Free Gifts with this order
                                                        </Controls.Typography>
                                                    </Controls.Grid>

                                                    <Controls.Grid item>
                                                        <Controls.Typography
                                                            variant="caption1"
                                                            sx={{ color: "#176D93" }}
                                                        >
                                                            View Gifts
                                                        </Controls.Typography>
                                                    </Controls.Grid>
                                                </Controls.Grid>
                                            </Controls.Grid>

                                        </Controls.Grid>
                                        <Controls.Divider sx={{ marginY: 2, width: 1 }} />



                                        <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Controls.Grid item mb={2}>
                                                <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", fontSize: { xs: "15px", sm: "22px" } }}>My Bag</Controls.Typography>&nbsp;
                                                <Controls.Typography variant='caption1' sx={{ color: "lightgray", fontSize: { xs: "13px", sm: "20px" } }}>({product?.length} items)</Controls.Typography>
                                            </Controls.Grid>

                                            <Controls.Grid item onClick={handleWishlist}>
                                                <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", color: "#347ea4", fontSize: { xs: "14px", sm: "16px" }, cursor: 'pointer' }} >+Add From Wishlist</Controls.Typography>
                                            </Controls.Grid>
                                        </Controls.Grid>
                                        {product?.map((item, index) => (
                                            <>
                                                <Controls.Card item xs={12} sx={{ display: { xs: "flex", sm: "flex" }, marginBottom: 2, }} gap={2} key={index} >
                                                    <Controls.Grid item xs={4} lg={2} >
                                                        <Controls.CardMedia component='img' src={item.product.image} width="100%" height="100%" sx={{ width: { xs: "100px", sm: "150px", lg: "120px" }, height: { xs: "150px", sm: "150px", md: "180px", lg: "150px" } }} />
                                                    </Controls.Grid>
                                                    <Controls.Grid item xs={8} md={10} sx={{ display: { xs: "block", lg: "flex" }, }}>
                                                        <Controls.Grid item xs={12} lg={7} p={1} sx={{}}>

                                                            <Controls.Grid item sx={{ display: { xs: "block", lg: "flex" } }} gap={2} xs={12}>
                                                                <Controls.Grid item xs={12}>
                                                                    <Controls.Typography
                                                                        variant='caption1'
                                                                        sx={{ fontWeight: "medium" }}
                                                                    >
                                                                        {item.product.brandname.charAt(0).toUpperCase() + item.product.brandname.slice(1).toLowerCase()}
                                                                    </Controls.Typography>&nbsp;
                                                                    <Controls.Typography variant='caption1' sx={{ fontWeight: "normal" }}>{item.product.name}</Controls.Typography>
                                                                </Controls.Grid>
                                                                <Controls.Grid item xs={10} md={4} sx={{ display: "flex", justifyContent: "space-between" }} gap={2}>
                                                                    <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between" }} gap={{ xs: 0.1, sm: 0.5 }} xs={6}>
                                                                        <Controls.Typography variant='caption1' sx={{ color: "gray" }}>Size </Controls.Typography>
                                                                        <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", }}> {item.size}</Controls.Typography>
                                                                        <Controls.KeyboardArrowDownOutlinedIcon sx={{ fontSize: "13px", marginTop: "8px", cursor: "pointer" }} onClick={() => handleOpen(item.product._id)} />
                                                                        {open && <SizeModalComponent setOpen={setOpen} open={open} setProduct={setProduct} productData={item} id={id} />}
                                                                    </Controls.Grid>
                                                                    <Controls.Grid item sx={{ display: "flex" }} gap={1} xs={6}>
                                                                        <Controls.Typography variant='caption1' sx={{ color: "gray" }}>qty </Controls.Typography>
                                                                        <Controls.Typography variant='caption1' sx={{ fontWeight: "bold" }}> {item.quantity}</Controls.Typography>
                                                                        <Controls.KeyboardArrowDownOutlinedIcon sx={{ fontSize: "13px", marginTop: "8px", cursor: "pointer" }} onClick={() => handleOpen(item.product._id)} />
                                                                    </Controls.Grid>
                                                                </Controls.Grid>
                                                            </Controls.Grid>
                                                        </Controls.Grid>

                                                        <Controls.Grid item xs={12} lg={5} sx={{}} p={1}>
                                                            <Controls.Grid item sx={{ textAlign: { xs: "left", lg: "right", } }}>
                                                                <Controls.Typography variant='caption1' sx={{ color: "gray" }}>savings :</Controls.Typography>&nbsp;
                                                                <Controls.Typography variant='caption1' sx={{ color: "#866528", fontWeight: "bold" }}>Rs.{(item.product.price * item.quantity)}</Controls.Typography>
                                                            </Controls.Grid>
                                                            <Controls.Grid item sx={{ justifyContent: { xs: "start", lg: "end", }, textAlign: { xs: "left", lg: "right", } }}>
                                                                <Controls.Grid item sx={{ display: 'flex', justifyContent: { xs: "flex-start", lg: "flex-end" } }} my={1}>
                                                                    <Controls.Typography
                                                                        variant="caption1"
                                                                        sx={{
                                                                            fontSize: { xs: "13px", lg: "12px" },
                                                                            color: "#866528",
                                                                            fontWeight: "medium",
                                                                            textDecoration: "line-through",
                                                                            marginTop: { xs: 0.5, sm: 0 },
                                                                        }}
                                                                    >
                                                                        Rs.
                                                                        {item.product && item.product.discountOne
                                                                            ? parseFloat(item.product.discountOne.replace(/,/g, '')) * item.quantity
                                                                            : item.product.discount}
                                                                    </Controls.Typography>

                                                                    <Controls.Typography variant='caption1' sx={{ color: "#866528", fontSize: { xs: "13px", md: "12px" }, marginTop: { xs: 0.5, sm: 0 } }}>
                                                                        {item.product.discountTwo}
                                                                    </Controls.Typography>
                                                                    &nbsp;
                                                                    <Controls.Divider orientation="vertical" sx={{ backgroundColor: "#176D93", height: "25px", width: "5px", display: { xs: "none", sm: "block" } }} />
                                                                    <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", backgroundColor: { xs: "none", sm: "#E1ECF1" }, padding: "1px" }}>
                                                                        Rs.{(item.product.getitprice * item.quantity)}.00
                                                                    </Controls.Typography>

                                                                </Controls.Grid>
                                                                <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between" }} mt={{ xs: 1, lg: 7 }}>
                                                                    <Controls.Grid item sx={{ cursor: 'pointer' }} onClick={() => handleDeleteProductFromCart(item.product._id)}>
                                                                        <Controls.Typography variant='caption1' sx={{ color: "#176D93" }}>Delete</Controls.Typography>
                                                                    </Controls.Grid>
                                                                    <Controls.Grid item sx={{ display: "flex", cursor: 'pointer' }} onClick={()=>handleMoveToWishlist(item.product._id)}>
                                                                        <Controls.FavoriteBorderIcon sx={{ color: "#176D93", marginTop: "1px", fontWeight: "normal" }} />
                                                                        <Controls.Typography variant='caption1' sx={{ color: "#176D93", fontWeight: "medium", display: { xs: "none", sm: "block" } }}>Move to Wishlist</Controls.Typography>
                                                                    </Controls.Grid>
                                                                </Controls.Grid>
                                                            </Controls.Grid>

                                                        </Controls.Grid>
                                                    </Controls.Grid>
                                                </Controls.Card>

                                            </>
                                        ))}

                                        <Controls.Grid item onClick={handleWishlist} sx={{ textAlign: 'right' }}>
                                            <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", color: "#347ea4", fontSize: "16px", cursor: 'pointer', }} >+Add From Wishlist</Controls.Typography>
                                        </Controls.Grid>
                                    </Controls.Grid>
                                    <Controls.Grid item xs={12} sm={4} lg={3} sx={{}}>
                                        <OrderDetailsComponent products={product} />
                                    </Controls.Grid>
                                </>

                            ) : (
                                <>
                                    <Controls.Grid item xs={12}>
                                        <Controls.Box component="img" src="/assets/images/Animation - 1730963467545.gif" sx={{ display: "block", margin: "auto", width: "300px", height: "300px" }} />
                                        <Controls.Grid item sx={{ textAlign: "center" }} xs={12}>
                                            <Controls.Typography
                                                variant="text1"
                                                sx={{ fontSize: { xs: "20px", sm: "30px" } }}
                                            >
                                                Your Bag is empty
                                            </Controls.Typography>
                                        </Controls.Grid>
                                    </Controls.Grid >

                                </>
                            )}

                        </Controls.Grid>

                    </Controls.Grid>

                </Controls.Grid>
            </Controls.Grid>
        </>
    )
}

export default CartComponent