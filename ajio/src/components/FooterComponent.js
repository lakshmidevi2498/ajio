import React from 'react'
import Controls from '../commons/Controls'
import theme from '../utilities/theme'
import FooterComponentOne from './FooterComponentOne';
import FooterComponentTwo from './FooterComponentTwo';

const FooterComponent = ({value1,value2}) => {
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
          <Controls.Grid item xs={12} sm={10} sx={{ margin: "auto", paddingX: "10px", }}>
            <Controls.Accordion sx={{ backgroundColor: "transparent", color: "#cccccc", boxShadow: "none", border: "none", display:value1}}p={0}>
              <Controls.Grid item xs={12} sm={6} md={5}lg={3} sx={{}} p={0}>
                <Controls.AccordionSummary
                  expandIcon={<Controls.ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    fontSize:{xs:"12px",sm:"14px"},padding:0
                  }}
                >
                  More about shopping from AJIO
                </Controls.AccordionSummary>
              </Controls.Grid>
              <Controls.AccordionDetails>
                *Online Shopping Redefined at Ajio* Bring the fashion revolution to your doorstep with seamless online shopping at Ajio! Discover on-trend styles and curated collections of clothing, footwear, accessories, and more for men, women, and kids from the most coveted designer brands. Discover exclusive looks and revamp your wardrobe from the comfort of your home with statement pieces that reflect your style. At Ajio, you can also find the finest beauty and home decor products, all chosen to inspire you and create a unique and confident look.
              </Controls.AccordionDetails>
            </Controls.Accordion>

           <FooterComponentOne  contentOne  ={contentOne}contentTwo={contentTwo} contentThree={contentThree} contentFour={contentFour} value2={value2}/>



            <Controls.Grid item sx={{  justifyContent: "space-between", display: { xs: "flex", sm: "flex" } }} mt={3}>
              <Controls.Grid item>
                <Controls.Typography variant='caption1' sx={{fontSize:{xs:'12px',sm:"14px",md:"16px"}}}>Payment Methods</Controls.Typography>
              </Controls.Grid>
              <Controls.Grid item>
                <Controls.Typography variant='caption1' sx={{fontSize:{xs:'12px',sm:"14px",md:"16px"}}}>Secure Systems</Controls.Typography>
              </Controls.Grid>

            </Controls.Grid>
           <FooterComponentTwo/>

          </Controls.Grid>
        </Controls.Grid>
      </Controls.Grid>
    </>
  );
};

export default FooterComponent;
