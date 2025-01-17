import React, { useEffect, useState } from 'react'
import Controls from '../commons/Controls'
import QuickviewSwiperComponent from './QuickviewSwiperComponent'
import { getToken, getUserId } from './GlobalFunction'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { loadCartInitiate } from '../redux/actions/loadCartAction'
import { loadProductsDataInitiate } from '../redux/actions/loadProductsAction'
import { postCartInitiate } from '../redux/actions/postCartAction'
import { postWishlistInitiate } from '../redux/actions/postWishlistAction'
import { deleteCartInitiate } from '../redux/actions/deleteCartAction'
import { loadWishlistInitiate } from '../redux/actions/loadWishlistAction'

const ProductsDetailsComponent = ({ innerData, icons, marginValue, heightValue, value, value2,displayValue,productValue }) => {
  console.log("innerData ProductsDetailsComponent", innerData)
  const [selectedSize, setSelectedSize] = useState(null);
  const [product, setProduct] = useState([])
  const [wishlistProduct , setWishlistProduct ] = useState([])
  const userId = getUserId()
  const token = getToken()
  const dispatch = useDispatch()

  const cartData = useSelector((state) => state.loadcartproducts.data || [])
  const wishlistData = useSelector((state) => state.loadwishlist.data || {})
  console.log("cartData", cartData)
  console.log("wishlistData", wishlistData)
  useEffect(() => {
    const fetchCart = async () => {
      dispatch(loadCartInitiate(token, userId))
    }
    fetchCart()
  }, [])
  useEffect(() => {
    if (cartData && cartData.data) {
      const data = cartData.data.cartDetails;
      if (data && data.products) {
        setProduct(data.products);
        console.log("productsData", data.products);
      }
    }
  }, [cartData]);

    useEffect(() => {
      if (wishlistData && wishlistData.data) {
        const data = wishlistData.data?.wishlistData;
        if (data && data.products) {
          setWishlistProduct(data.products);
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

  await dispatch(postCartInitiate(userId,productId,size))
  await dispatch(loadCartInitiate(token,userId))
  await dispatch(loadProductsDataInitiate())

}
const handleRemoveFromBag = async (productId) => {
  await dispatch(deleteCartInitiate(userId,productId))
  await dispatch(loadCartInitiate(token,userId))
}
const handleAddToWshlist = async (productId) => {
  await dispatch(postWishlistInitiate(userId,productId))
  await  dispatch(loadWishlistInitiate(userId))
  await dispatch(loadProductsDataInitiate())

}
return (
  <>
    <Controls.Grid container justifyContent="center">
      <Controls.Grid item xs={12} sx={{ display: { xs: "block", sm: "flex" }, justifyContent: { sm: "space-between" },alignItems:"center", }} gap={4}>
        <Controls.Grid item xs={12} sm={6} md={7} sx={{ alignItem: "center", justifyContent: "start",  }}>
               <Controls.Grid item   sx={{
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


        <Controls.Grid item xs={12} sm={6} md={5} sx={{ alignItems: "center", textAlign: "center", justifyContent: { xs: "center", sm: "end" },  }} >
          <Controls.Grid item sx={{ marginTop: marginValue, }} mx='auto'>
            <Controls.Grid item>
              <Controls.Typography variant="caption1" sx={{ color: "#866528", fontWeight: "medium", fontSize: { xs: "13px", md: "15px" } }}>{innerData.brandname}</Controls.Typography>
            </Controls.Grid>
            <Controls.Grid item>
              <Controls.Typography variant="caption1" sx={{ fontWeight: "medium", fontSize: { xs: "12px", md: "15px" } }}>{innerData.name}</Controls.Typography>
            </Controls.Grid>
            {innerData.rating !== 0 &&
              <><Controls.Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: innerData.rating >= 3 ? "green" : "red",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "4px",
                }} my={0.2}
              >
                <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "12px", md: "15px" } }}>{innerData.rating}</Controls.Typography>
                <Controls.StarBorderIcon sx={{ fontSize: { xs: "12px", md: "15px" }, marginLeft: "4px", marginTop: { xs: 0, sm: 0.5 } }} />
              </Controls.Box>
                <Controls.Typography variant="caption1" sx={{ color: "lightgray", marginLeft: "5px", fontSize: { xs: "12px", md: "15px" } }}>{innerData.reviews} Rating</Controls.Typography>
              </>}
            <Controls.Grid item>
              <Controls.Typography variant="caption1" sx={{ fontWeight: "medium" }}>₹{innerData.price}</Controls.Typography>
            </Controls.Grid>
            {innerData.discountOne && <Controls.Grid item>
              <Controls.Typography variant="caption1" sx={{ color: "#866528", fontWeight: "medium", fontSize: { xs: "12px", md: "15px" } }}>MRP </Controls.Typography><Controls.Typography variant="caption1" sx={{ textDecoration: "line-through", fontWeight: "normal", color: "#866528", fontSize: { xs: "12px", sm: "15px" } }}>Rs. {innerData.discountOne}</Controls.Typography><Controls.Typography variant="caption1" sx={{ fontWeight: "bold", color: "#866528", fontSize: { xs: "12px", sm: "15px" } }}>{innerData.discountTwo}</Controls.Typography>
            </Controls.Grid>}
            <Controls.Grid item>
              <Controls.Typography variant="caption1" sx={{ fontSize: "12px", color: "gray" }}>Additional GST may apply</Controls.Typography>
            </Controls.Grid>

            <Controls.Grid item sx={{ borderTop: "1px dashed black", borderBottom: "1px dashed black", borderRight: "1px dashed black", display: "flex", justifyContent: "space-between", marginX: "auto" }} xs={12} sm={10} md={12} mt={0.5}>
              <Controls.Grid item xs={3} sx={{ borderLeft: "1px dashed black", }}>
                <Controls.Grid
                  component="img"
                  src="/assets/images/offer.svg"
                  width="100%"
                  height="100%"
                  sx={{
                    width: "50px",
                    height: "30px",
                    display: "block",
                    textAlign: "center",
                    marginX: "auto"
                  }}
                /><Controls.Grid item sm={10} >
                  <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "12px", lg: "12px" }, color: "#866528", }}>Use Code {innerData.code}</Controls.Typography>
                </Controls.Grid>
                <Controls.Grid item sm={10}>
                  <Controls.Typography variant="caption1" sx={{ fontSize: "11px", color: "#176D93", }}>T&C</Controls.Typography>
                </Controls.Grid>
              </Controls.Grid>
              <Controls.Divider
                orientation="vertical"
                sx={{
                  width: "0.3px",
                  height: "40px",
                  backgroundColor: "lightgray",
                  alignItems: "center",
                  // marginY:"auto",
                  marginTop: "40px",
                  marginRight: "10px"
                }}
              />

              <Controls.Grid item xs={8} sx={{ textAlign: "start" }}>
                <Controls.Grid item sx={{ backgroundColor: "#fff8eb", borderLeft: "1px dashed black", borderBottom: "1px dashed black" }} px={.3}>
                  <Controls.Typography variant="caption1" sx={{ fontSize: "11px", color: "gray" }}>Get it for</Controls.Typography>
                  <Controls.Typography variant="caption1" sx={{ fontSize: "11px", color: "green" }}>₹{innerData.getitprice}</Controls.Typography>
                </Controls.Grid>
                <Controls.Grid item p={0} m={0}>
                  <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "10px", md: "12px", lg: "12px" }, padding:0,margin:0, lineHeight: "normal",}}>Get Flat 400 off on 2590 & above. Get Flat 500 off on app only offer.</Controls.Typography>
                  <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "12px", lg: "12px" }, color: "#176D93", textDecoration: "underline", padding:0,margin:0, lineHeight: "normal",}}>View all products</Controls.Typography><Controls.ChevronRight sx={{ fontSize: "12px", color: "#176D93", textDecoration: "underline", }} />
                </Controls.Grid>
              </Controls.Grid>



            </Controls.Grid>
            <Controls.Grid item mt={0.2} >
              <Controls.Typography variant="caption1" sx={{ fontSize: "13px", color: "#176D93", textDecoration: "underline" }}>+ 11 more</Controls.Typography>
            </Controls.Grid>

            <Controls.Grid item mt={0.2} >
              <Controls.Typography variant="caption1" sx={{ fontSize: "14px", }}>{innerData.color}</Controls.Typography>
              <Controls.Grid item mt={0.2} >
                <Controls.Box compoent="span" sx={{ fontSize: "14px", backgroundColor: innerData.color, borderRadius: "50px", width: "20px", height: "20px", marginX: "auto", border: "1px solid black" }} p={2}></Controls.Box>
              </Controls.Grid>
              <Controls.Grid item my={0.2} sx={{ justifyContent: "center" }}>
                <Controls.Grid item>
                  <Controls.Typography variant="caption1" sx={{ fontSize: "14px" }}>
                    {selectedSize ? `Select Size ${selectedSize}` : 'Select Size'}
                  </Controls.Typography>
                </Controls.Grid>
                <Controls.Grid
                  item
                  gap={1}
                  mt={0.2}
                  p={{ xs: 0.5, lg: 1 }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Controls.Grid item>
                    <Controls.Grid item style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      {sizes.map((item, index) => (
                        <Controls.Typography
                          key={index}
                          variant="caption1"
                          onClick={() => handleSizeClick(item)} // Handle size selection
                          sx={{
                            fontSize: { xs: "11px", xxl: "16px" },
                            borderRadius: "50%",
                            border: `1px solid ${selectedSize === item ? "#866528" : "lightgray"}`,
                            backgroundColor: selectedSize === item ? "#866528" : "transparent",
                            color: selectedSize === item ? "white" : "#000",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: { xs: "30px", lg: "40px" },
                            height: { xs: "30px", lg: "40px" },
                            margin: "0 8px",
                            cursor: "pointer",
                          }}
                          p={1}
                        >
                          {item}
                        </Controls.Typography>
                      ))}
                    </Controls.Grid >
               
                  </Controls.Grid >

                </Controls.Grid>
              </Controls.Grid>

            </Controls.Grid>
            {isCartProduct(innerData._id) ? (
              <Controls.Grid item my={1} xs={10} mx="auto" onClick={() => handleRemoveFromBag(innerData._id)} >
                <Controls.Button variant="contained" sx={{ fontSize: { xs: "12px", lg: "18px" }, backgroundColor: "white", color: "#866528", paddingX: { xs: "40px", md: "35px", lg: "50px" },border: "1px solid #866528", fontWeight:"normal",'&:hover': { border: "1px solid #866528",backgroundColor: "#866528", color: 'white' } }}><Controls.ShoppingBagOutlinedIcon sx={{ color: "#866528", marginRight: "3px", fontSize: { xs: "14px", md: "18px" } ,'&:hover':{color:"white"} }} />Already in Cart</Controls.Button>
                <Controls.Typography variant='caption1' sx={{ color: "gray", fontSize: { xs: "10px", sm: "8px", md: "10px", lg: "12px" }, display: value2 }}>HANDPICKED STYLES | ASSURED QUALITY</Controls.Typography>

              </Controls.Grid>
            ) : (
              <Controls.Grid item my={1} xs={10} mx="auto" onClick={() => handleAddToBag(innerData._id, selectedSize)}  >
                <Controls.Button variant="contained" sx={{ fontSize: { xs: "12px", lg: "18px" }, backgroundColor: "#866528", color: "white", paddingX: { xs: "40px", md: "35px", lg: "60px" }, '&:hover': { border: "white" }, }}><Controls.ShoppingBagOutlinedIcon sx={{ color: "white", marginRight: "3px", fontSize: { xs: "14px", md: "18px" } }} />ADD TO BAG</Controls.Button>
                <Controls.Typography variant='caption1' sx={{ color: "gray", fontSize: { xs: "10px", sm: "8px", md: "10px", lg: "12px" }, display: value2 }}>HANDPICKED STYLES | ASSURED QUALITY</Controls.Typography>

              </Controls.Grid>
            )}
           <Controls.Grid
  item
  my={1}
  xs={10}
  mx="auto"
  sx={{
    display: {xs:"none",sm:'flex'},
    alignItems: 'center',
    justifyContent: 'center',  
   
  }}
>
  <Controls.Button
    variant="outlined"
    sx={{
      fontSize: { xs: "12px", lg: "18px" },
      color: "#866528",
      border: "2px solid #866528",
      paddingX: productValue,
      fontWeight: "bold",
      '&:hover': {
        backgroundColor: "#866528",
        color: "white",
      }
    }}
  >
    PRODUCT DETAILS
  </Controls.Button>
</Controls.Grid>


            <Controls.Grid
              container
              item
              gap={1}
              mt={1}
              p={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
             {icons?.map((item, index) => (
  <Controls.Typography
    key={index}
    variant="caption1"
    sx={{
      fontSize: "16px",
      borderRadius: "50%",
      border: "2px solid lightgray",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "30px",
      height: "30px",
      margin: "0 4px",
      color: "lightgray",
      lineHeight: "normal", // Ensures proper text alignment
      '&:hover': { backgroundColor: "#866528", color: "white" }
    }}
  >
    <span dangerouslySetInnerHTML={{ __html: item }} />
  </Controls.Typography>
))}

            </Controls.Grid>
            <Controls.Grid item sx={{display:displayValue}}>
            {isWishlistProduct(innerData._id) ? (
              <Controls.Grid item xs={10} mx="auto">
              <Controls.Button variant="contained" sx={{ fontSize: { xs: "12px", lg: "14px" }, backgroundColor: "white", color: "#866528", paddingX: { xs: "5px", lg: "20px" }, border: "1px solid #866528", fontWeight: "normal",  }}><Controls.FavoriteIcon sx={{ color: "#866528", marginRight: "3px", fontSize: { xs: "14px", md: "18px" },'&:hover':{color:"white"} }} />REMOVE FROM WISHLIST</Controls.Button>
            </Controls.Grid>

            ) : (
              <Controls.Grid item xs={10} mx="auto" onClick={()=>handleAddToWshlist(innerData._id)}>
              <Controls.Button variant="contained" sx={{ fontSize: { xs: "12px", lg: "18px" }, backgroundColor: "white", color: "#866528", paddingX: { xs: "15px", lg: "30px" }, border: "1px solid #866528",  fontWeight: "normal",'&:hover':{backgroundColor: "white"} }}><Controls.FavoriteBorderIcon sx={{ color: "#866528", marginRight: "3px", fontSize: { xs: "14px", md: "18px" }, }} />SAVE TO WISHLIST</Controls.Button>
            </Controls.Grid>

            )}
            </Controls.Grid>
            
            <Controls.Grid item xs={10} lg={9}sx={{ justifyContent: "center", marginX: "auto", display: value2 }}>
              <Controls.Accordion sx={{ backgroundColor: "transparent", boxShadow: "none", border: "none", }}>
                <Controls.AccordionSummary
                  expandIcon={<Controls.ExpandMoreIcon sx={{ color: "black" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    fontSize: { xs: "12px", sm: "14px" },
                    color: "#176D93",
                    fontWeight: "bold"
                  }}
                >
                  product details
                </Controls.AccordionSummary>
                <Controls.AccordionDetails>
                  {Object.entries(innerData).map(([key, value], index) => (

                    key !== 'image' && key !== '_id' && key !== 'innerimages' && key !== '__v' && (
                      <Controls.Grid
                        item
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          // marginBottom: 2,        
                        }}
                      >

                        <Controls.Typography variant="caption1" sx={{ fontWeight: "normal", marginRight: 1 }}>
                          {key}:
                        </Controls.Typography>

                        <Controls.Typography variant="body2">
                          {typeof value === 'object' ? (
                            Array.isArray(value) ? (
                              value.map((v, i) => (
                                <Controls.Typography variant="body2" key={i} sx={{ marginLeft: 1 }}>
                                  {v}
                                </Controls.Typography>
                              ))
                            ) : (
                              JSON.stringify(value)
                            )
                          ) : (
                            value
                          )}
                        </Controls.Typography>
                      </Controls.Grid>
                    )
                  ))}

                </Controls.AccordionDetails>
              </Controls.Accordion>
            </Controls.Grid>
          </Controls.Grid>


        </Controls.Grid>
      </Controls.Grid>
    </Controls.Grid>
  </>
)
}

export default ProductsDetailsComponent