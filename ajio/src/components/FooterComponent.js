import React from 'react'
import Controls from '../commons/Controls'
import theme from '../utilities/theme'
import { Icon } from '@iconify/react';
import OtpComponent from './OtpComponent';

const FooterComponent = () => {
  const contentOne = [
    {
      title: "AJIO",
      items: [
        { name: "Who We Are" },
        { name: "Join Our Team" },
        { name: "Terms & Conditions" },
        { name: "We Respect Your Privacy" },
        { name: "Fees & Payments" },
        { name: "Returns & Refunds Policy" },
        { name: "Promotions Terms & Conditions" },
      ],
    },
  ]

  const contentTwo = [
    {
      title: "Help",
      items: [
        { name: "Track Your Order" },
        { name: "Frequently Asked Questions" },
        { name: "Returns" },
        { name: "Cancellations" },
        { name: "Payments" },
        { name: "Customer Care" },
        { name: "How Do I Redeem My Coupon" },
      ],
    },
  ]

  const contentThree = [
    {
      title: " Shop by",
      items: [
        { name: "Men" },
        { name: "Women" },
        { name: "Kids" },
        { name: "IndieStores" },
        { name: "New Arrivals" },
        { name: "Brand Directory" },
        { name: "HomeCollections" },
      ],
    },
  ]

  const contentFour = [
    {
      title: "Follow us",
      items: [
        { name: "Facebook" },
        { name: "Instagram- AJIOlife" },
        { name: "Instagram- AJIO LUXE" },
        { name: "Twitter" },
        { name: "Pinterest" },
      ],
    },
  ]

  return (
    <>
      <Controls.Grid container justifyContent="center" margin="auto" alignItems="center">
        <Controls.Grid item xs={12} sx={{ backgroundColor: theme.palette.one.bag, justifyContent: "center", color: "#cccccc" }}>
          <Controls.Grid item xs={12} sm={10} sx={{ margin: "auto", paddingX: "20px", }}>
            <Controls.Accordion sx={{ backgroundColor: "transparent", color: "#cccccc", boxShadow: "none", border: "none", }}p={0}>
              <Controls.Grid item xs={12} sm={6} md={5}lg={3} sx={{}} >
                <Controls.AccordionSummary
                  expandIcon={<Controls.ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    fontSize:{xs:"12px",sm:"14px"}
                  }}
                >
                  More about shopping from AJIO
                </Controls.AccordionSummary>
              </Controls.Grid>
              <Controls.AccordionDetails>
                *Online Shopping Redefined at Ajio* Bring the fashion revolution to your doorstep with seamless online shopping at Ajio! Discover on-trend styles and curated collections of clothing, footwear, accessories, and more for men, women, and kids from the most coveted designer brands. Discover exclusive looks and revamp your wardrobe from the comfort of your home with statement pieces that reflect your style. At Ajio, you can also find the finest beauty and home decor products, all chosen to inspire you and create a unique and confident look.
              </Controls.AccordionDetails>
            </Controls.Accordion>

            <Controls.Grid container spacing={2} sx={{ display: { xs: "block", sm: 'flex' }, justifyContent: { xs: "", sm: 'space-between' }, borderBottom: "2px solid lightgray", paddingBottom: 5 }}>
              <Controls.Grid item xs={12} sm={6} md={3} sx={{ textAlign: { xs: "center",md:"start" } }}>
                {contentOne.map((content, index) => (
                  <Controls.Grid item xs={12} key={index} sx={{}}>
                    <Controls.Typography sx={{ fontSize: "14px", mb: 1, fontFamily: "poppins" }}>
                      {content.title}
                    </Controls.Typography>
                    {content.items && (
                      <Controls.Grid item xs={12}>
                        {content.items.map((item, idx) => (
                          <Controls.Typography
                            key={idx}
                            sx={{
                              mb: 0.5,
                              fontSize: "14px",
                              fontFamily: "poppins",
                              cursor: item ? "pointer" : "default",
                              '&:hover': { textDecoration: "underline" }
                            }}
                          >
                            {item.name}
                          </Controls.Typography>
                        ))}
                      </Controls.Grid>
                    )}
                  </Controls.Grid>
                ))}
              </Controls.Grid>
              <Controls.Grid item xs={12} sm={6} md={3}  sx={{ textAlign: { xs: "center",md:"start" } }}>
                {contentTwo.map((content, index) => (
                  <Controls.Grid item xs={12} key={index}>
                    <Controls.Typography sx={{ fontSize: "14px", mb: 1, fontFamily: "poppins" }}>
                      {content.title}
                    </Controls.Typography>
                    {content.items && (
                      <Controls.Grid item xs={12}>
                        {content.items.map((item, idx) => (
                          <Controls.Typography
                            key={idx}
                            sx={{
                              mb: 0.5,
                              fontSize: "14px",
                              fontFamily: "poppins",
                              cursor: item ? "pointer" : "default",
                              '&:hover': { textDecoration: "underline" }
                            }}
                          >
                            {item.name}
                          </Controls.Typography>
                        ))}
                      </Controls.Grid>
                    )}
                  </Controls.Grid>
                ))}
              </Controls.Grid>
              <Controls.Grid item xs={12} sm={6} md={3}  sx={{ textAlign: { xs: "center",md:"start" } }}>
                {contentThree.map((content, index) => (
                  <Controls.Grid item xs={12} key={index}>
                    <Controls.Typography sx={{ fontSize: "14px", mb: 1, fontFamily: "poppins" }}>
                      {content.title}
                    </Controls.Typography>
                    {content.items && (
                      <Controls.Grid item xs={12}>
                        {content.items.map((item, idx) => (
                          <Controls.Typography
                            key={idx}
                            sx={{
                              mb: 0.5,
                              fontSize: "14px",
                              fontFamily: "poppins",
                              cursor: item ? "pointer" : "default",
                              '&:hover': { textDecoration: "underline" }
                            }}
                          >
                            {item.name}
                          </Controls.Typography>
                        ))}
                      </Controls.Grid>
                    )}
                  </Controls.Grid>
                ))}
              </Controls.Grid>
              <Controls.Grid item xs={12} sm={6} md={3}  sx={{ textAlign: { xs: "center",md:"start" } }}>
                {contentFour.map((content, index) => (
                  <Controls.Grid item xs={12} key={index}>
                    <Controls.Typography sx={{ fontSize: "14px", mb: 1, fontFamily: "poppins" }}>
                      {content.title}
                    </Controls.Typography>
                    {content.items && (
                      <Controls.Grid item xs={12}>
                        {content.items.map((item, idx) => (
                          <Controls.Typography
                            key={idx}
                            sx={{
                              mb: 0.5,
                              fontSize: "14px",
                              fontFamily: "poppins",
                              cursor: item ? "pointer" : "default",
                              '&:hover': { textDecoration: "underline" }
                            }}
                          >
                            {item.name}
                          </Controls.Typography>
                        ))}
                      </Controls.Grid>
                    )}
                  </Controls.Grid>
                ))}
              </Controls.Grid>
            </Controls.Grid>
            <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between", display: { xs: "flex", sm: "flex" } }} my={3}>
              <Controls.Grid item>
                <Controls.Typography variant='caption1' sx={{fontSize:{xs:'12px',sm:"14px",md:"16px"}}}>Payment Methods</Controls.Typography>
              </Controls.Grid>
              <Controls.Grid item>
                <Controls.Typography variant='caption1' sx={{fontSize:{xs:'12px',sm:"14px",md:"16px"}}}>Secure Systems</Controls.Typography>
              </Controls.Grid>

            </Controls.Grid>
            <Controls.Grid item xs={12} sx={{ display: { xs: "flex", sm: "flex" }, justifyContent: { xs: "center", sm: "space-between" }, }} mb={3} gap={{xs:0.2,sm:1}}>
              <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between", }} >
                <Controls.Grid item sx={{ display: "flex", }} gap={{ xs: 1, sm: 2 }}>


                  <Controls.Grid item sx={{ display: "flex", alignItems: "center",  }} gap={{xs:0.5,sm:1}} mt={{ xs: 1, sm: 0 }}>
                    <Controls.Typography
                      variant="caption1"
                      sx={{
                        fontSize: { xs: "8px", sm: "14px" },
                        marginTop: "3px",
                        display: "inline",
                      }}
                    >
                      Net
                    </Controls.Typography>

                    <Controls.Typography
                      sx={{
                        backgroundColor: "white",
                        color: theme.palette.one.bag,
                        fontSize: { xs: "8px", sm: "14px" },
                        padding: "2px 5px",
                        borderRadius: "4px",
                        display: "inline-block",
                      }}
                    >
                      Banking
                    </Controls.Typography>
                  </Controls.Grid>



                  <Controls.Grid item sx={{ display: "block", alignItems: "center",  }} mt={{xs:2,md:3}}>
                    <Controls.Grid
                      item
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >

                      <Controls.Grid
                        item
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "8px", sm: "16px" }, fontWeight: "bold" }}>
                          Verified
                        </Controls.Typography>
                        <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "6px", sm: "12px" } }}>
                          by
                        </Controls.Typography>
                      </Controls.Grid>
                      <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "8px", sm: "16px" }, fontWeight: "bold" }}>VISA</Controls.Typography>

                    </Controls.Grid>
                  </Controls.Grid>


                  <Controls.Grid item sx={{  }} mt={{ xs: 1, sm: 1,md:2 }}>
                    <Controls.Box
                      sx={{
                        width: { xs: "30px", sm: "70px" },
                        height: { xs: "30px", sm: "70px" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icon icon="lineicons:mastercard" width="100%" height="100%" />
                    </Controls.Box>
                  </Controls.Grid>


                  <Controls.Grid item sx={{ display: "flex",  }} mt={{xs:2,sm:3}} sm={2.5}>
                    <Controls.Grid item mt={0.5} xs={4}>
                      <Controls.Box
                        sx={{
                          width: { xs: "22px",sm:"32px", md:"35px",lg: "40px" },
                          height: { xs: "22px",sm:"32px",md:"35px", lg: "40px" },
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Icon icon="fa:rupee" width="100%" height="100%" />
                      </Controls.Box>

                    </Controls.Grid>
                    <Controls.Grid item sx={{ display: "flex",  }} xs={8} sm={10}>
                      <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "6px", sm:"10px",md: "14px" } }}>CASH ON DELIVERY</Controls.Typography>
                    </Controls.Grid>
                  </Controls.Grid>

                  <Controls.Grid item sx={{ display: {xs:"none",sm:"flex"}, alignItems: "center",  }} mt={{ xs: 1, sm: 0 }}>
                    <Controls.Grid
                      item
                      sx={{
                        display: "flex",
                        backgroundColor: "white",
                        borderRadius: "50px",
                        padding: { xs: "0.2rem", sm: "0.5rem" },
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Controls.Typography
                        sx={{
                          color: "blue",
                          display: "inline-block",
                          fontWeight: "bold",
                          fontSize: { xs: "10px" }
                        }}
                      >
                        Jio
                      </Controls.Typography>
                    </Controls.Grid>

                    <Controls.Typography
                      sx={{
                        // marginLeft: "10px",
                        fontWeight: "bold",
                        fontSize: { xs: "8px", sm: "14px" }
                      }}
                    >
                      Money
                    </Controls.Typography>
                  </Controls.Grid>








                </Controls.Grid>
              </Controls.Grid>




              <Controls.Grid item sx={{ display: "end", }} >
                <Controls.Grid item sx={{ display: "flex", alignItems: "center" }} mt={{ xs: 1.5, sm: 2.5,md:0 }} gap={{xs:0.2,sm:1}}>
                   
                  <Controls.Box
                    sx={{
                      width: { xs: "20px",sm:"30px",md:"60px", lg: "70px" },
                      height: { xs: "20px", sm:"30px", md:"60px",lg: "70px" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Icon icon="et:lock" width="100%" height="100%" />
                  </Controls.Box>

                  
                  <Controls.Grid item xs={8} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 0 }}>
                     
                    <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "10px", sm: "14px" } }}>
                      256BIT &nbsp;
                    </Controls.Typography>
                    
                    <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "6px", sm: "10px" }, marginTop: "4px" }}>
                      ENCRYPTION
                    </Controls.Typography>
                  </Controls.Grid>
                </Controls.Grid>


              </Controls.Grid>
            </Controls.Grid>
          </Controls.Grid>
        </Controls.Grid>
      </Controls.Grid>
    </>
  );
};

export default FooterComponent;
