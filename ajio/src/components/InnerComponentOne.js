import React, { useEffect, useState } from 'react'
import Controls from '../commons/Controls'
import ProductsDetailsComponent from './ProductsDetailsComponent'
import { useLocation } from 'react-router-dom'
import ShopMoreProducts from './ShopMoreProducts'
import RatingsComponent from './RatingsComponent'

const InnerComponentOne = () => {
    const location = useLocation();
    const { innerproductsdata } = location.state || {}; 
    // const [data , setData] = useState({})
    // useEffect(()=>{
    //     setData(innerproductsdata)
    // },[innerproductsdata])
  

    console.log("innerproductsdata", innerproductsdata);
    // console.log("data innerproductsdata",data)

  return (
    <>
    <Controls.Grid container justifyContent='center' mt={{xs:20,sm:10}}>
        <Controls.Grid item xs={12}>
            <Controls.Grid item xs={10} sx={{justifyContent:"center",marginX:"auto"}}>

                <Controls.Grid item my={2}>
                    <Controls.Typography variant='caption1' sx={{color:"gray",fontSize:{xs:"12px",sm:"15px"}}}>Home / {innerproductsdata.categories} / {innerproductsdata.subcatergory} /{innerproductsdata.name}</Controls.Typography>
                </Controls.Grid>

                <Controls.Grid item xs={11} sm={12} md={12}lg={10} sx={{justifyContent:"center",marginX:"auto",}}>
            <ProductsDetailsComponent  innerData={innerproductsdata} marginValue={"20px"} value={'none'} value2={'block'}/>
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