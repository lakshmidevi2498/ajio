import React, { useEffect, useState } from 'react'
import Controls from '../commons/Controls'
import { getToken, getUserId } from './GlobalFunction' 
import { useDispatch, useSelector } from 'react-redux'
import { loadCartInitiate } from '../redux/actions/loadCartAction'
import OrderDetailsComponent from './OrderDetailsComponent'
import { deleteCartInitiate } from '../redux/actions/deleteCartAction'
import { useNavigate } from 'react-router-dom'
import { postWishlistInitiate } from '../redux/actions/postWishlistAction'
import CartComponentOne from './CartComponentOne'

const CartComponent = () => {
    const [product, setProduct] = useState([])


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
    }, [token, userId,dispatch])

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
                                    <CartComponentOne      handleMoveToWishlist={handleMoveToWishlist} handleDeleteProductFromCart={handleDeleteProductFromCart}  handleWishlist={handleWishlist}
                                    product={product} setProduct={setProduct} />
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