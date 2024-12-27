import React from 'react'
import WishlistComponent from '../components/WishlistComponent'
import MainNavbarComponent from '../components/Navbar/MainNavbarComponent'

const WishlistPage = () => {
  return (
    <>
    <MainNavbarComponent   value1={"none"}  value2={"block"} value3={"none"} value4={"flex"} value8={ { xs: "130px", sm: "75px", md: "90px", }}/>
    <WishlistComponent/>
    </>
  )
}

export default WishlistPage