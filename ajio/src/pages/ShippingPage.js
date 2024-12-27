import React from 'react'
import MainNavbarComponent from '../components/Navbar/MainNavbarComponent'
import DeliveryDetailsComponent from '../components/DeliveryDetailsComponent'
import PromisesComponent from '../components/PromisesComponent'
import FooterComponent from '../components/FooterComponent'
import ScrollToTop from '../components/ScrollToTop'

const ShippingPage = () => {
  return (
    <>
    <MainNavbarComponent  value1={"block"}  value2={"none"}  count={1}  value3={"none"} value4={"flex"} value8={ { xs: "130px", sm: "75px", md: "90px", }}/>
    <DeliveryDetailsComponent/>
    <PromisesComponent value1={"1px solid lightgray"} value2={"3px solid lightgray"} value3={3} value4={4} value5={"center"} value={"center"} value7={"center"} value9={11}/>
    <FooterComponent value1={"block"} value2={{ xs: "block", sm: 'flex' }}/>
    <ScrollToTop/>
    </>
  )
}

export default ShippingPage