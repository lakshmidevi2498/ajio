import React, { useState, useEffect } from "react";
import Controls from "../commons/Controls";
import { useDispatch, useSelector } from "react-redux";
import { loadWishlistInitiate } from "../redux/actions/loadWishlistAction";
import { getToken, getUserId } from "./GlobalFunction"; 
import { postCartInitiate } from "../redux/actions/postCartAction";
import { deleteWishlistInitiate } from "../redux/actions/deleteWishlistAction";
import { loadCartInitiate } from "../redux/actions/loadCartAction";
import WishlisteComponentOne from "./WishlisteComponentOne";

const WishlistComponent = () => {
  const [product, setProduct] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  const userId = getUserId();
  const token = getToken()
  const dispatch = useDispatch();
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
      const fetchCart = async () => {
        if(userId){
          dispatch(loadCartInitiate(token, userId))
        }
      }
      fetchCart()
    }, [dispatch,userId,token])

  useEffect(() => {
    if (wishlistData && wishlistData.data) {
      const data = wishlistData.data?.wishlistData;
      if (data && data.products) {
        setProduct(data.products);
      }
    }
  }, [wishlistData]);

    useEffect(() => {
      if (cartData && cartData.data) {
        const data = cartData.data.cartDetails;
        if (data && data.products) {
          setCartProduct(data.products);
          console.log("productsData", data.products);
        }
      }
    }, [cartData]);
    
  const isCartProduct = (productId) => {
    console.log("productId isCartProduct:", productId);
    console.log("product array:", cartProduct);

    if (userId && token) {
        return Array.isArray(cartProduct) && cartProduct.some((item) => item.product?._id === productId);
    }
    return false; 
};

  const handleDeleteFormWishlist = async (productId) => {
    console.log("userId,productId",userId,productId)
    await dispatch(deleteWishlistInitiate(userId,productId))
    dispatch(loadWishlistInitiate(userId))

  }

  const handleAddToBag = async (productId) => {
    const size = "S"
 await  dispatch(postCartInitiate(userId ,productId,size))
 await dispatch(loadCartInitiate(token,userId))
 await   dispatch(loadWishlistInitiate(userId))
  }

  return (
    <>
      <Controls.Grid container justifyContent="center">
        
        <Controls.Grid item xs={12} sm={11} md={9.5} xl={10}sx={{ textAlign: "center", mt: {xs:11,md:12,lg:15,xl:20 }}}>
          <Controls.Typography
            variant="caption1"
            sx={{
              fontWeight: "bold",
              fontSize: {xs:"18px",sm:"25px"},
              display:product.length>0 ?"block" :"none"
            }}
          >
            My Wishlist
          </Controls.Typography>
        </Controls.Grid>

    
      <WishlisteComponentOne product={product}isCartProduct={isCartProduct}handleDeleteFormWishlist={handleDeleteFormWishlist}handleAddToBag={handleAddToBag} />
      </Controls.Grid>
    </>
  );
};

export default WishlistComponent;
