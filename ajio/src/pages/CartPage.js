import React, { useState } from 'react'
import MainNavbarComponent from '../components/Navbar/MainNavbarComponent'
import CartComponent from '../components/CartComponent'
import PromisesComponent from '../components/PromisesComponent'
import IconsComponent from '../components/IconsComponent'
import FooterComponent from '../components/FooterComponent'
import ScrollToTop from '../components/ScrollToTop'

const CartPage = () => {
  const [cart , setCart] = useState(true)
  return (
    <>
    <MainNavbarComponent  value1={"block"}  value2={"none"}  count={0}  value3={"none"} value4={"flex"} value8={ { xs: "130px", sm: "75px", md: "90px", }} cart={cart} />
    <CartComponent/>
    <PromisesComponent value1={"1px solid lightgray"} value2={"3px solid lightgray"} value3={4} value4={7} value5={"center"} value={"center"} value7={"center"} value9={10}/>
    <IconsComponent color={"#fafafa"}/>
    <FooterComponent value1={"block"} value2={{ xs: "block", sm: 'flex' }}/>
    <ScrollToTop/>
    </>
  )
}

export default CartPage