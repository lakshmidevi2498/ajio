import React from 'react'
import Controls from '../commons/Controls'
import theme from '../utilities/theme'

const WishlisteComponentOne = ({product,isCartProduct,handleDeleteFormWishlist,handleAddToBag}) => {
  return (
    <>
      <Controls.Grid
          container  
          justifyContent="center" mt={.5}
          sx={{ }}  xs={10.5} sm={11} md={9.5} xl={9.5} spacing={1}
        >
          {product?.length > 0 ? (
            product?.map((item, index) => (
              <Controls.Grid
                item
                key={index}
                xs={12} 
                sm={4}  
                md={3}  
                sx={{ display: {xs:"block",sm:"block"}, justifyContent: "center",height:"auto", }}gap={1}
              >
                <Controls.Box
                  sx={{
                    position: "relative",
                    width:"100%",
                    height:"70%",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
                  }}
                >
                
                  <Controls.CardMedia
                    component="img"
                    src={item.image}
                    loading='lazy'
                    alt="wishlist image"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", 
                    }}
                  />

                  
                  <Controls.DeleteOutlineIcon
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      width: "25px",
                      height: "25px",
                      zIndex: 10,
                      color: "gray",
                      cursor: "pointer",
                    }} onClick ={()=>handleDeleteFormWishlist(item._id)}
                  />

                  {isCartProduct(item._id) ? (
                  ""

                  ) :  <Controls.Grid
                  sx={{
                    position: "absolute",
                    bottom: 8,
                    left: 8,
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f7d32f",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                >
                  <Controls.ShoppingBagOutlinedIcon
                    sx={{
                      width: "20px",
                      height: "20px",
                      color: "gray",
                    }} onClick={()=>handleAddToBag(item._id)}
                  />
                </Controls.Grid>} 
                  
                </Controls.Box>

              
                <Controls.CardContent sx={{ textAlign: "center", mt: 1 ,p:0}}>
                    <Controls.Grid item>
                  <Controls.Typography
                    variant="caption1"
                    sx={{ color: theme.palette.one.text2, fontWeight: "bold" }}
                  >
                    {item.brandname}
                  </Controls.Typography>
                  </Controls.Grid>
                  <Controls.Grid item>
                  <Controls.Typography
                    variant="caption1"
                    sx={{ fontSize: "14px", mt: 1 }}
                  >
                    {item.name}
                  </Controls.Typography>
                  </Controls.Grid>
                  <Controls.Typography variant="caption1" sx={{ fontWeight: "bold" }}>
                    ₹{item.getitprice}
                  </Controls.Typography>&nbsp;
                  {item.discountOne && (
                    <>
                      <Controls.Typography
                        variant="caption1"
                        sx={{
                          textDecoration: "line-through",
                          color: "gray",
                          fontSize: "13px",
                        }}
                      >
                        ₹{item.discountOne}
                      </Controls.Typography>
                      <Controls.Typography
                        variant="caption1"
                        sx={{ color: "#866528", fontSize: "13px" }}
                      >
                        {item.discountTwo}
                      </Controls.Typography>
                    </>
                  )}
                </Controls.CardContent>
              </Controls.Grid>
            ))
          ) : (
            <>
            <Controls.Box component="img" src="./assets/images/Animation - 1730963748748.gif" sx={{width:"300px",height:"300px"}}/>
            <Controls.Grid item sx={{ textAlign: "center" }} xs={12}>
                                    <Controls.Typography
                                        variant="text1"
                                        sx={{ fontSize: { xs: "20px", sm: "30px" } }}
                                    >
                                        Your Wishlist is empty
                                    </Controls.Typography>
                                </Controls.Grid>
                                </>
        
          )}
        </Controls.Grid>
    </>
  )
}

export default WishlisteComponentOne