import React from 'react'
import InnerComponentOne from '../components/InnerComponentOne'
// import NavbarComponent from '../components/Navbar/NavbarComponent'
import RecentlyViewedComponent from '../components/RecentlyViewedComponent'
import IconsComponent from '../components/IconsComponent'
import FooterComponent from '../components/FooterComponent'
import MainNavbarComponent from '../components/Navbar/MainNavbarComponent'

const InnerProductsPage = () => {
  return (
    <>
    {/* <NavbarComponent/> */}
    <MainNavbarComponent value1={"none"}  value2={"block"} value3={"none"} value4={"flex"} value8={ { xs: "130px", sm: "75px", md: "90px", }}/>
    <InnerComponentOne/>
    <RecentlyViewedComponent/>
    <IconsComponent  color={"lightgray"}/>
    <FooterComponent value1={"block"} value2={{ xs: "block", sm: 'flex' }}/>
    </>
  )
}

export default InnerProductsPage