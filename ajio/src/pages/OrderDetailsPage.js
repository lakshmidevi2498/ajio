import React from 'react'
import MainNavbarComponent from '../components/Navbar/MainNavbarComponent'
import OederDetailsComponent from '../components/OederDetailsComponent'
import IconsComponent from '../components/IconsComponent'
import FooterComponent from '../components/FooterComponent'

const OrderDetailsPage = () => {
  return (
    <>
    <MainNavbarComponent value1={"none"}  value2={"block"} value3={"none"} value4={"flex"} value8={ { xs: "130px", sm: "75px", md: "90px", }}/>
    <OederDetailsComponent/>
    <IconsComponent color={"#fafafa"}/>
    <FooterComponent/>
    </>
  )
}

export default OrderDetailsPage