import React, { useEffect, useState } from 'react'
import Controls from '../commons/Controls'
import QuickviewSwiperComponent from './QuickviewSwiperComponent'
import { getToken, getUserId } from './GlobalFunction'
import { useDispatch, useSelector } from 'react-redux'
import { loadCartInitiate } from '../redux/actions/loadCartAction'
import { loadProductsDataInitiate } from '../redux/actions/loadProductsAction'
import { postCartInitiate } from '../redux/actions/postCartAction'
import { postWishlistInitiate } from '../redux/actions/postWishlistAction'
import { deleteCartInitiate } from '../redux/actions/deleteCartAction'
import { loadWishlistInitiate } from '../redux/actions/loadWishlistAction'
import InnerProductDetailsComponent from './InnerProductDetailsComponent'

const ProductsDetailsComponent = ({ innerData, icons, marginValue, heightValue, value, value2, displayValue, productValue }) => {
  console.log("innerData ProductsDetailsComponent", innerData)
  const [selectedSize, setSelectedSize] = useState(null);
  const [product, setProduct] = useState([])
  const [wishlistProduct, setWishlistProduct] = useState([])
  const userId = getUserId()
  const token = getToken()
  const dispatch = useDispatch()

  const cartData = useSelector((state) => state.loadcartproducts.data || [])
  const wishlistData = useSelector((state) => state.loadwishlist.data || {})
  console.log("cartData", cartData)
  console.log("wishlistData", wishlistData)
  useEffect(() => {
    const fetchCart = async () => {
      if (userId) {
        dispatch(loadCartInitiate(token, userId))
      }
    }
    fetchCart()
  }, [])
  useEffect(() => {
    if (userId) {
      if (cartData && cartData.data) {
        const data = cartData.data.cartDetails;
        if (data && data.products) {
          setProduct(data.products);
          console.log("productsData", data.products);
        }
      }
    }
  }, [cartData]);

  useEffect(() => {
    if (userId) {
      if (wishlistData && wishlistData.data) {
        const data = wishlistData.data?.wishlistData;
        if (data && data.products) {
          setWishlistProduct(data.products);
        }
      }
    }
  }, [wishlistData]);

  const isCartProduct = (productId) => {
    console.log("productId isCartProduct:", productId);
    console.log("product array:", product);

    if (userId && token) {
      return Array.isArray(product) && product.some((item) => item.product?._id === productId);
    }
    return false; 
  };
  const isWishlistProduct = (productId) => {
    console.log("productId isWishlistProduct:", productId);
    console.log("product array:", wishlistProduct);

    if (userId && token) {
      return Array.isArray(wishlistProduct) && wishlistProduct.some((item) => item._id === productId);
    }
    return false;
  };




  const sizes = ["S", "M", "L", "XL", "2XL"];

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToBag = async (productId, size) => {
    if (userId) {

      await dispatch(postCartInitiate(userId, productId, size))
      await dispatch(loadCartInitiate(token, userId))
      await dispatch(loadProductsDataInitiate())
    }

  }
  const handleRemoveFromBag = async (productId) => {
    if (userId) {
      await dispatch(deleteCartInitiate(userId, productId))
      await dispatch(loadCartInitiate(token, userId))
    }
  }
  const handleAddToWshlist = async (productId) => {
    if (userId) {
      await dispatch(postWishlistInitiate(userId, productId))
      await dispatch(loadWishlistInitiate(userId))
      await dispatch(loadProductsDataInitiate())
    }

  }
  return (
    <>
      <Controls.Grid container justifyContent="center">
        <Controls.Grid item xs={12} sx={{ display: { xs: "block", sm: "flex" }, justifyContent: { sm: "space-between" }, alignItems: "center", }} gap={4}>
          <Controls.Grid item xs={12} sm={6} md={7} sx={{ alignItem: "center", justifyContent: "start", }}>

            <Controls.Grid item sx={{
              maxHeight: "500px",
              alignItems: "center",
              marginY: "auto",
              overflow: "hidden",
            }}>
              <QuickviewSwiperComponent innerData={innerData} marginValue={1} heightValue={heightValue} />
            </Controls.Grid>


            <Controls.Grid
              item
              sx={{
                textAlign: "center",
                width: "400px",
                borderBottom: "1px solid lightgray",
                borderLeft: "1px solid lightgray",
                mt: 5,
                marginLeft: { xs: 0, md: 23 },
                display: { xs: "none", lg: value2 }
              }}
            >

              <Controls.Grid item xs={12}>
                <Controls.Grid item xs={12} sx={{ display: "flex" }}>

                  <Controls.Grid
                    item
                    xs={3}
                    sx={{
                      borderTop: "1px solid lightgray",
                      borderRight: "1px solid lightgray",
                      padding: "10px",
                    }}
                  >
                    <Controls.Typography
                      variant="caption1"
                      sx={{
                        color: "black",
                        textAlign: "center",
                      }}
                    >
                      RETURNS
                    </Controls.Typography>
                  </Controls.Grid>


                  <Controls.Grid
                    item
                    xs={9}
                    sx={{
                      textAlign: "start",
                      paddingLeft: "8px",
                      borderBottom: "1px solid lightgray",
                      padding: "10px",
                    }}
                  >
                    <Controls.Typography
                      variant="caption1"
                      sx={{
                        color: "gray",
                        textAlign: "start",
                      }}
                    >
                      OUR PROMISE
                    </Controls.Typography>
                  </Controls.Grid>
                </Controls.Grid>
              </Controls.Grid>


              <Controls.Grid item sx={{ display: "flex", justifyContent: "Space-between" }}>
                <Controls.Typography
                  variant="caption1"
                  sx={{
                    fontSize: "15px",
                    paddingY: "10px",
                    display: "block",
                    marginLeft: "30px",
                    alignItem: "center"
                  }}
                >
                  7 day Return and Exchange
                  <Controls.Typography
                    variant="caption1"
                    sx={{
                      fontSize: "12px",
                      color: "#176D93",
                      textDecoration: "underline",
                      display: "inline",
                    }}
                  >
                    click here.
                  </Controls.Typography>
                </Controls.Typography>
                <Controls.Divider orientation="vertical" sx={{ width: "20px", backgrounColor: "black", height: "60px" }} />
              </Controls.Grid>

            </Controls.Grid>
            <Controls.Grid item sx={{ textAlign: "end", marginRight: 4, display: { xs: "none", lg: "block" } }} >
              <Controls.Typography variant='caption1' sx={{ color: '#176D93', display: value2 }}>Services FAQs</Controls.Typography>
            </Controls.Grid>


          </Controls.Grid>

    
          <InnerProductDetailsComponent icons={icons} marginValue={marginValue} value2={value2} displayValue={displayValue} productValue={productValue} handleAddToWshlist={handleAddToWshlist}
          handleRemoveFromBag={handleRemoveFromBag} handleAddToBag={handleAddToBag} handleSizeClick={handleSizeClick} sizes={sizes} isWishlistProduct ={isWishlistProduct} isCartProduct={isCartProduct}
          selectedSize={selectedSize} innerData={innerData}
          />
        </Controls.Grid>
      </Controls.Grid>
    </>
  )
}

export default ProductsDetailsComponent