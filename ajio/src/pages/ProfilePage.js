import React from 'react'
import ProfileComponent from '../components/ProfileComponent'
import MainNavbarComponent from '../components/Navbar/MainNavbarComponent'
import IconsComponent from '../components/IconsComponent'
import FooterComponent from '../components/FooterComponent'

const ProfilePage = () => {
  return (
    <>
    <MainNavbarComponent value1={"none"}  value2={"block"} value3={"none"} value4={"flex"} value8={ { xs: "130px", sm: "75px", md: "90px", }}/>
    <ProfileComponent/>
    <IconsComponent  color={'#FAFAFA'}/>
    <FooterComponent value1={"block"} value2={{ xs: "block", sm: 'flex' }}/>
    </>
  )
}

export default ProfilePage