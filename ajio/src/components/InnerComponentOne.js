import React from 'react'
import Controls from '../commons/Controls'
import ProductsDetailsComponent from './ProductsDetailsComponent'
import { useLocation } from 'react-router-dom'
import ShopMoreProducts from './ShopMoreProducts'
import RatingsComponent from './RatingsComponent'

const InnerComponentOne = () => {
    const location = useLocation();
    const { innerproductsdata } = location.state || {};  
    console.log("innerproductsdata", innerproductsdata);
 

  return (
    <>
    <Controls.Grid container justifyContent='center' mt={{xs:9,sm:10}}>
        <Controls.Grid item xs={12}>
            <Controls.Grid item xs={11} sm={11} md={9.5} xl={10} sx={{justifyContent:"center",marginX:"auto"}}>

                <Controls.Grid item my={2}>
                    <Controls.Typography variant='caption1' sx={{color:"gray",fontSize:{xs:"12px",sm:"15px"}}}>Home / {innerproductsdata.categories} / {innerproductsdata.subcatergory} /{innerproductsdata.name}</Controls.Typography>
                </Controls.Grid>

                <Controls.Grid item xs={12} sm={12} md={12}lg={11} xl={11}sx={{justifyContent:"center",marginX:"auto",}}>
            <ProductsDetailsComponent  innerData={innerproductsdata} marginValue={"20px"} value={'none'} value2={'block'} productValue={{ xs: "10px",sm:"26px", lg: "40px" }}/>
            </Controls.Grid>
            </Controls.Grid>
            <RatingsComponent innerproductsdata={innerproductsdata}/>
            <ShopMoreProducts innerproductsdata={innerproductsdata}/>
        </Controls.Grid>
    </Controls.Grid>
    </>
  )
}

export default InnerComponentOne