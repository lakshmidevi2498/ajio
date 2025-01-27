import React ,{useEffect, useState}from 'react'
import Controls from '../../commons/Controls'
import theme from '../../utilities/theme'
import NavLinksComponent from './NavLinksComponent'
import SmallNavbarComponent from './SmallNavbarComponent'
import { useNavigate, useSearchParams } from 'react-router-dom'
import SigninComponent from '../SigninComponent'


const NavbarComponent = () => {
  const [open , setOpen] = useState(null)
  const [modal , setModal] = useState(null)
  const [token ,setToken] = useState(null)
  const[name ,setName] = useState("") 
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
  return (
    <>
      <Controls.Grid container justifyContent="center">
        <Controls.Grid item xs={12} sx={{ borderTop: "3px solid black", position: "fixed", top: 0, zIndex: 20, backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
          <Controls.Grid item xs={12} sm={11} md={10} sx={{ display: "block", margin: "auto", minHeight: {xs:"130px",sm:"75px",md:"90px",} ,  }}>

            <Controls.Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between", }}>
              <Controls.Grid item xs={3} sm={1} md={2} lg={3} sx={{ display: "block", alignItems: "center", marginY: "auto", order: { xs: 1 }, justifyContent: "center",cursor:"pointer" }} onClick={handleNavigate}>
                <Controls.Box component="img" src="https://logos-world.net/wp-content/uploads/2022/12/Ajio-Logo.png" width="100%" height="100%" sx={{ width: { sm: "100%", lg: "38%" }, height: "100%", display: { xs: "none", sm: "block" } }} />
                <Controls.Box component="img" src="https://image.winudf.com/v2/image1/Y29tLnJpbC5hamlvX2ljb25fMTcyOTY3ODE2OF8wNDA/icon.png?w=280&fakeurl=1" width="100%" height="100%" sx={{ width: "80%", height: "50%", display: { xs: "block", sm: "none" } }} />
              </Controls.Grid>
              <Controls.Grid
                item
                xs={0}
                sm={6}
                md={6}
                lg={5}
                sx={{
                  display: { xs: "none", sm: 'flex' },
                  flexDirection: 'column',
                  justifyContent: { sm: 'flex-end' },
                  height: '100',
                  order: { xs: 3, sm: 2 },
                  margin: { xs: "auto", sm: 0 },
                  textAlign: "center",
               
                }}
              >
                <NavLinksComponent />
              </Controls.Grid>


              <Controls.Grid item xs={9} sm={5} md={5} sx={{ display: "block", order: { xs: 2, sm: 3 },border:"2px solid red" }}>
                <Controls.Grid item xs={12} sx={{ display: { xs: "block", sm: "flex" }, justifyContent: "space-between" }}>
                { name != "" ? 
                <>
                <Controls.Grid item gap={1.5} sx={{fontSize:{xs:"13px",},display:"flex",letterSpacing: 1.5}} lg={6} mt={0.8}>
                <Controls.Grid item>
                  <Controls.Typography variant='caption1' sx={{fontSize:{xs:"14px"},fontFamily: "SourceSansPro"}}>{name}</Controls.Typography>
                  </Controls.Grid>
                  <Controls.Grid item>
                  <Controls.Typography variant='caption1' sx={{fontFamily: "SourceSansPro"}}>My Account</Controls.Typography>
                  </Controls.Grid>
                  <Controls.Grid item>
                  <Controls.Typography variant='caption1'sx={{fontFamily: "SourceSansPro",cursor:"pointer"}} onClick={handleLogout}>Signout</Controls.Typography>
                  </Controls.Grid>
                </Controls.Grid>
                </>
                  :
                  <Controls.Grid item sx={{ display: { xs: "block", sm: "flex" }, color: theme.palette.one.bag, letterSpacing: 2, textAlign: { xs: "center", md: "" },'&:hover':{textDecoration:"underline"} }} xs={12} sm={7} md={7} lg={4.5} mt={1}>
                    <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "20px", sm:"13px",xxl: "20px" }, fontFamily: "SourceSansPro" ,cursor:'pointer',}}onClick={handleSignin}>
                    SignIn
                    </Controls.Typography>
                    <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "20px", sm:"13px",xxl: "20px" }, fontFamily: "SourceSansPro", }}>
                      / Join AJIO
                    </Controls.Typography>
                  </Controls.Grid>
                  } 

                  <Controls.Grid item xs={0} sm={5} md={5} lg={3} mt={0.3} sx={{ display: { xs: "none", sm: "block", md: "none", lg: "block" }, }}>
                    <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "13px", xxl: "20px" }, fontFamily: "SourceSansPro", letterSpacing: 2 }}>
                      Customer Care
                    </Controls.Typography>
                  </Controls.Grid>

                  <Controls.Grid
                    item
                    sx={{ backgroundColor: theme.palette.one.textbg, padding: 1, display: "block", alignItems: "center", textAlign: "center", display: { xs: "none", md: "block" } }} xs={0} md={6} lg={3.5}
                  >
                    <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "14px", xxl: "20px" }, color: "white", fontFamily: "SourceSansPro", letterSpacing: 1 }}>
                      Visit AJIOLUXE
                    </Controls.Typography>
                  </Controls.Grid>
                </Controls.Grid>

                <Controls.Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between" }} gap={1} mt={1}>
                  <Controls.Grid item xs={12} sx={{ display: { xs: "block", sm: "block" }, }}>
                    <Controls.TextField
                      id="outlined-basic"
                      label="Search AJIO"
                      variant="outlined"
                      sx={{

                        borderRadius: "30px",
                        width: { sm: "180px", md: "200px", lg: "300px", xxl: "500px" },
                        backgroundColor: theme.palette.one.input,
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "30px",
                          "& fieldset": {
                            borderColor: "black",
                          },
                          "&:hover fieldset": {
                            borderColor: "black",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "black",
                            borderWidth: "2px",
                          },
                          height: "35px",
                          "& input": {
                            padding: "4px 4px",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: theme.palette.one.bg,
                          lineHeight: "0.7",
                        },
                        "& .MuiInputLabel-shrink": {
                          top: "0",
                        },
                        "& .Mui-focused": {
                          color: "gray",
                        },
                      }}
                      InputProps={{
                        endAdornment: (
                          <Controls.InputAdornment position="end">
                            <Controls.SearchIcon sx={{ color: "gray" }} />
                          </Controls.InputAdornment>
                        ),
                      }}
                    />
                  </Controls.Grid>
                  <Controls.Grid
                    item
                    sx={{
                      backgroundColor: theme.palette.one.bag,
                      borderRadius: "50px",
                      color: "white",
                      textAlign: "center",
                      margin: "auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                    p={{ xs: 1, sm: 1 }}
                    xs={2} sm={2}
                    lg={1} xll={1}
                  >
                    <Controls.FavoriteBorderIcon sx={{ fontSize: { xs: "15px", sm: "medium", xll: "30px" } }} />
                  </Controls.Grid>

                  <Controls.Grid item sx={{
                    backgroundColor: theme.palette.one.bag,
                    borderRadius: "50px",
                    color: "white",
                    textAlign: "center",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                    p={{ xs: 1, sm: 1 }}
                    xs={2} sm={2}
                    lg={1} xll={1}>
                    <Controls.ShoppingBagOutlinedIcon sx={{ fontSize: { xs: "15px", sm: "medium", xll: "30px" } }} />
                  </Controls.Grid>
                </Controls.Grid>
              </Controls.Grid>
            </Controls.Grid>
            <Controls.Divider sx={{marginTop:"10px", display: { xs: "block",sm:"none"},}}/>
            <Controls.Grid item sx={{ display: { xs: "block",sm:"none"}, alignItems:"center",textAlign:"center", }}mt={.5}>
              <SmallNavbarComponent/>

            </Controls.Grid>
          </Controls.Grid>
        </Controls.Grid>
      </Controls.Grid>
      { modal && <SigninComponent  open={open} handleClose={handleClose}  setOpen={setOpen}/>}
    </>
  )
}

export default NavbarComponent