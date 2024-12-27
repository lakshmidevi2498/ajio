import React, { useEffect, useState } from 'react'
import Controls from '../../commons/Controls'
import theme from '../../utilities/theme'
import NavLinksComponent from './NavLinksComponent'
import SmallNavbarComponent from './SmallNavbarComponent'
import { useNavigate, useSearchParams } from 'react-router-dom'
import SigninComponent from '../SigninComponent'
import CartNavbarComponent from '../CartNavbarComponent'
import PromisesComponent from '../PromisesComponent'

const MobileNavbarComponent = ({promises ,cart ,count}) => {

  const [open, setOpen] = useState(null)
  const [modal, setModal] = useState(null)
  const [token, setToken] = useState(null)
  const [name, setName] = useState("")
  const [number, setNumber] = useState(null)
  const [searchParams] = useSearchParams();


  useEffect(() => {
    const token = searchParams.get('token');
    const id = searchParams.get('id');
    const username = searchParams.get('name');

    if (token) {
      const existingToken = sessionStorage.getItem('googleToken');
      if (!existingToken) {
        sessionStorage.setItem('googleToken', token);
      }
      setToken(token);
    }

    if (id) {
      const existingSocialUserId = sessionStorage.getItem('socialUserId');
      if (!existingSocialUserId) {
        sessionStorage.setItem('socialUserId', id);
      }
    }

    if (username) {
      const existingName = sessionStorage.getItem('username');
      if (!existingName) {
        sessionStorage.setItem('username', username);
      }
      setName(username);
    }
  }, [token]);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('googleToken') || sessionStorage.getItem('Token');
    if (storedToken) {
      setToken(storedToken);
    }

    const storedValue = sessionStorage.getItem('username') || sessionStorage.getItem('number');
    if (storedValue) {

      const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
      const isPhoneNumber = phoneNumberPattern.test(storedValue);

      if (isPhoneNumber) {
        setName(storedValue);
      } else {
        const firstWord = storedValue.split(' ')[0];
        setName(firstWord);
      }
    }

  }, [name]);

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/')
  }

  const handleSignin = () => {
    setOpen(true)
    setModal(true)
  }
  const handleClose = () => {
    setOpen(false)
    setModal(false)
  }

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/')

  }
  const handleHome  = () => {
    navigate('/')
  }
  return (
    <>
      <Controls.Grid container justifyContent="center">
        <Controls.Grid item xs={11} sx={{ display: { xs: "block", sm: "none" } }}>
          <Controls.Grid item xs={12} sx={{ display: "flex" }}>
            <Controls.Grid item xs={3} onClick = {handleHome}>
              <Controls.Box component="img" src="https://image.winudf.com/v2/image1/Y29tLnJpbC5hamlvX2ljb25fMTcyOTY3ODE2OF8wNDA/icon.png?w=280&fakeurl=1" width="100%" height="100%" sx={{ width: "40%", height: "100%", display: { xs: "block", sm: "none" } }} />
            </Controls.Grid>
            <Controls.Grid item xs={name.length>5 ?12 :9}>
              <Controls.Grid item xs={12} sx={{ display: { xs: "block", sm: "flex" }, justifyContent: "space-between", }}>
                {name != "" ?
                  <>
                    <Controls.Grid item gap={1.5} sx={{ fontSize: { xs: "11px", }, display: "flex", letterSpacing: 1.5 ,}} lg={name.length>5 ? 10 :6} mt={0.8}>
                      <Controls.Grid item >
                        <Controls.Typography variant='caption1' sx={{ fontSize: name.length > 5 ? "10px" : "14px", fontFamily: "SourceSansPro" }}                        >{name}</Controls.Typography>
                      </Controls.Grid>
                      <Controls.Grid item mt={{sm:0.5}}>
                        <Controls.Typography variant='caption1' sx={{ fontFamily: "SourceSansPro",fontSize: name.length > 5 ? "10px" : "14px",  }}>My Account</Controls.Typography>
                      </Controls.Grid>
                      <Controls.Grid item mt={{sm:0.5}}>
                        <Controls.Typography variant='caption1' sx={{ fontFamily: "SourceSansPro", cursor: "pointer",fontSize: name.length > 5 ? "10px" : "14px",  }} onClick={handleLogout}>Signout</Controls.Typography>
                      </Controls.Grid>
                    </Controls.Grid>
                  </>
                  :
                  <Controls.Grid item sx={{ display: { xs: "block", sm: "flex" }, color: theme.palette.one.bag, letterSpacing: 2, textAlign: { xs: "center", md: "" }, '&:hover': { textDecoration: "underline" } }} xs={12} sm={7} md={7} lg={4.5} mt={0}>
                    <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "13px", sm: "13px", xxl: "20px" }, fontFamily: "SourceSansPro", cursor: 'pointer', }} onClick={handleSignin}>
                      SignIn
                    </Controls.Typography>
                    <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "13px", sm: "13px", xxl: "20px" }, fontFamily: "SourceSansPro", }}>
                      / Join AJIO
                    </Controls.Typography>
                  </Controls.Grid>
                }

                <Controls.Grid item xs={0} sm={5} md={5} lg={3} mt={0.3} sx={{ display: { xs: "none", sm: "block", md: "none", lg: "block" }, }}>
                  <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "13px", xxl: "20px" }, fontFamily: "SourceSansPro", letterSpacing: 2 }}>
                    Customer Care
                  </Controls.Typography>
                </Controls.Grid>

               
              </Controls.Grid>
            </Controls.Grid>
          </Controls.Grid>
          <Controls.Grid item xs={12} sx={{}}>
          
          {/* { cart && <CartNavbarComponent  count={count}/>} */}
          </Controls.Grid>

          <Controls.Divider sx={{ marginTop: "10px", display: { xs: "block", sm: "none" }, }} xs={12} />
          <Controls.Grid item sx={{ display: { xs: "block", sm: "none" }, alignItems: "center", textAlign: "center", }} mt={.5}>
            <SmallNavbarComponent />

          </Controls.Grid>
        </Controls.Grid>

      </Controls.Grid>
      {modal && <SigninComponent open={open} handleClose={handleClose} setOpen={setOpen} />}
    </>
  )
}

export default MobileNavbarComponent