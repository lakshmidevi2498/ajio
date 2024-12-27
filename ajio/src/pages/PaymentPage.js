import React, { useState } from 'react'
import PaymentComponent from '../components/PaymentComponent'
import MainNavbarComponent from '../components/Navbar/MainNavbarComponent'
import FooterComponent from '../components/FooterComponent'

const PaymentPage = () => {
  const [promises ,setPromises] = useState(true)
  return (
    <>
    <MainNavbarComponent value1={"none"}  value2={"none"} value3={"block"} value4={'none'} value8={ { xs: "130px", sm: "75px", md: "50px", } } promises={promises}/>
    <PaymentComponent/>
    <FooterComponent value1={"none"} value2={"none"}/>
    </>
  )
}

export default PaymentPage