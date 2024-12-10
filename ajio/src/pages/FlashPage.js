import React from 'react'
import NavbarComponent from '../components/Navbar/NavbarComponent'
import CorouselComponent from '../components/CorouselComponent'
import IconsComponent from '../components/IconsComponent'
import FooterComponent from '../components/FooterComponent'
import ScrollToTop from '../components/ScrollToTop'
import OpenModalComponenet from '../components/OpenModalComponent'
import NavbarWithHoverMenu from '../components/MenuComponent'

const FlashPage = () => {
  return (
    <>
    <NavbarComponent/>
    <CorouselComponent/>
    <IconsComponent/>
    {/* <NavbarWithHoverMenu/> */}
    <FooterComponent/>  
    <ScrollToTop />
    <OpenModalComponenet/>
    </>
  )
}

export default FlashPage