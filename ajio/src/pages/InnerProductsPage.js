import React from 'react'
import InnerComponentOne from '../components/InnerComponentOne'
import NavbarComponent from '../components/Navbar/NavbarComponent'
import RecentlyViewedComponent from '../components/RecentlyViewedComponent'
import IconsComponent from '../components/IconsComponent'
import FooterComponent from '../components/FooterComponent'

const InnerProductsPage = () => {
  return (
    <>
    <NavbarComponent/>
    <InnerComponentOne/>
    <RecentlyViewedComponent/>
    <IconsComponent  color={"lightgray"}/>
    <FooterComponent/>
    </>
  )
}

export default InnerProductsPage