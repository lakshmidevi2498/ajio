import React from 'react'
import CorouselComponent from '../components/CorouselComponent'
import IconsComponent from '../components/IconsComponent'
import FooterComponent from '../components/FooterComponent'
import ScrollToTop from '../components/ScrollToTop'
import OpenModalComponenet from '../components/OpenModalComponent'
import MainNavbarComponent from '../components/Navbar/MainNavbarComponent'

const FlashPage = () => {
  return (
    <>
    {/* <div class="loader"></div> */}
    <MainNavbarComponent  value1={"none"}  value2={"block"} value3={"none"} value4={"flex"} value8={ { xs: "130px", sm: "75px", md: "90px", }}/>
    <CorouselComponent/>
    <IconsComponent/>
    <FooterComponent value1={"block"} value2={{ xs: "block", sm: 'flex' }}/>  
    <ScrollToTop />
    <OpenModalComponenet/>
    </>
  )
}

export default FlashPage