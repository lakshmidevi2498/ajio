import React from 'react'
import CategoriesFirstComponent from '../components/CategoriesFirstComponent' 
import ScrollToTop from '../components/ScrollToTop'
import MainNavbarComponent from '../components/Navbar/MainNavbarComponent'

const CategoriesPage = () => {
  return (
    <> 
    <MainNavbarComponent   value1={"none"}  value2={"block"} value3={"none"} value4={"flex"} value8={ { xs: "130px", sm: "75px", md: "10px", }}/>
    <CategoriesFirstComponent/>
    <ScrollToTop/>
    </>
  )
}

export default CategoriesPage  



