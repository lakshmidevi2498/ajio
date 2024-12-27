import React, { useEffect, useState } from 'react'
import Controls from '../../commons/Controls'
import theme from '../../utilities/theme'
import NavLinksComponent from './NavLinksComponent'
import { useNavigate, useSearchParams } from 'react-router-dom'
import SigninComponent from '../SigninComponent'
import MobileNavbarComponent from './MobileNavbarComponent'
import { useMediaQuery } from '@mui/material'
import CartNavbarComponent from '../CartNavbarComponent'
import PromisesComponent from '../PromisesComponent'

const MainNavbarComponent = ({value1,value2,count ,value3,value4,value8 ,promises,cart,}) => {

    const [open, setOpen] = useState(null)
    const [modal, setModal] = useState(null)
    const [token, setToken] = useState(null)
    const [name, setName] = useState("")
    const [number, setNumber] = useState(null)
    const [searchParams] = useSearchParams();
    const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm')); 


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
    const storedToken = sessionStorage.getItem('googleToken') || sessionStorage.getItem('Token');
    const storedValue = sessionStorage.getItem('username') || sessionStorage.getItem('number');
    useEffect(() => {
       
        if (storedToken) {
            setToken(storedToken);
        }

        
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
console.log("namein navbar",name)
    }, [storedToken,storedValue,name]);

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
        setName("");
        navigate('/#')
        console.log("storedToken,storedValue,name",storedToken,storedValue,name)

    }
    const handleProfilePage = () => {
        navigate('/my-account/orders')
    }

    const handleCart = () => {
        navigate('/cart ')
    }
    const handleWishlist = () => {
        navigate('/wishlist')
    }
    return (
        <>
            <Controls.Grid container justifyContent="center">
                <Controls.Grid item xs={12} sx={{ borderTop: "3px solid black", position: "fixed", top: 0, zIndex: 20, backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" ,}}>
                {isMobileScreen ? <MobileNavbarComponent promises = {promises} cart={cart} count = {count}/> :
                    <Controls.Grid item xs={12} sm={11} md={9.5} sx={{ margin: "auto", minHeight:value8,paddingBottom:0.2 ,}}>
                        <Controls.Grid item xs={12} sx={{ display: "flex",  justifyContent: "flex-start",  alignItems: "center",}}>
                            <Controls.Grid item xs={3} sm={1} md={2} lg={3} sx={{ display: "block", justifyContent: "flex-start", alignItems: "center", marginY: "auto", justifyContent: "center", cursor: "pointer", }} onClick={handleNavigate}>
                                <Controls.Box component="img" src="/assets/images/ajio-Logo.png" width="100%" height="100%" sx={{ width: { sm: "150%", md:"100%",lg: "45%" }, height: "100%", display: { xs: "none", sm: "block" } }} />
                              </Controls.Grid>
                            <Controls.Grid item sm={12}md={name.length>5 ? 12 :11} sx={{
                                display: "flex",
                                justifyContent: "flex-end",  
                                alignItems: "center",
                             
                                                                  flexGrow: 1, 
                                marginLeftt: 0,
                            }}>
                                <Controls.Grid item xs={12} sx={{ }}>
                                    <Controls.Grid item xs={9} sm={name ? 12 : name.length>7 ? 6: 7} md={name.length>=5 ? 12 :10} sx={{ justifyContent:"end",display: value4, marginLeft:{sm:name?25 :name.length>7 ? 40 :45,lg:name.length>7 ? 43 : 50,xxl:100},}}>
                                        <Controls.Grid item xs={12} xl={8}sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "space-between" ,}}>
                                            {(name != "" && name != null) ?
                                                <>
                                                {/* {token && ( */}
                                                    <Controls.Grid item gap={{xs:4.5,xl:8}} sx={{ fontSize: { xs: "13px", }, display: "flex", letterSpacing: 1.5 ,}} xs={8} sm={name.length>7 ? 12 :8} lg={name.length>7 ? 12:10} xl={8}mt={{sm:0.7,md:0.5,lg:0.8}} >
                                                        <Controls.Grid item>
                                                            <Controls.Typography variant='caption1' sx={{ fontSize: { xs: "14px" }, fontFamily: "SourceSansPro" }}>{name}</Controls.Typography>
                                                        </Controls.Grid>
                                                        <Controls.Grid item>
                                                            <Controls.Typography variant='caption1' sx={{ fontFamily: "SourceSansPro",'&:hover':{textDecoration:"underline",cursor:"pointer"} }}onClick={handleProfilePage}>My Account</Controls.Typography>
                                                        </Controls.Grid>
                                                        <Controls.Grid item>
                                                            <Controls.Typography variant='caption1' sx={{ fontFamily: "SourceSansPro", cursor: "pointer" }} onClick={handleLogout}>Signout</Controls.Typography>
                                                        </Controls.Grid>
                                                    </Controls.Grid>
                                                     {/* )} */}
                                                </>
                                                :
                                                <Controls.Grid item sx={{ display: { xs: "none", sm: "flex" }, color: theme.palette.one.bag, letterSpacing: 2, textAlign: { xs: "center", md: "" }, '&:hover': { textDecoration: "underline" } ,}} xs={12} sm={7} md={7} lg={4.5} mt={1}>
                                                    <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "20px", sm: "13px", xxl: "20px" }, fontFamily: "SourceSansPro", cursor: 'pointer', }} onClick={handleSignin}>
                                                        SignIn
                                                    </Controls.Typography>
                                                    <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "20px", sm: "13px", xxl: "20px" }, fontFamily: "SourceSansPro", }} onClick={handleSignin}>
                                                        / Join AJIO
                                                    </Controls.Typography>
                                                </Controls.Grid>
                                            }

                                            <Controls.Grid item xs={0} sm={3} md={5} lg={4} mt={0.3} sx={{ display: { xs: "none", sm: "block", md: "none", lg: "block" },marginRight:0, }}>
                                                <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "13px", xxl: "20px" }, fontFamily: "SourceSansPro", letterSpacing: 2 }}>
                                                    Customer Care
                                                </Controls.Typography>
                                            </Controls.Grid>

                                            <Controls.Grid
                                                item
                                                sx={{ backgroundColor: theme.palette.one.textbg, padding: 1, display: "block", alignItems: "center", textAlign: "center", display: { xs: "none", md: "block" } }} xs={0} md={6} lg={5}
                                            >
                                                <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "14px", xxl: "20px" }, color: "white", fontFamily: "SourceSansPro", letterSpacing: 1 }}>
                                                    Visit AJIOLUXE
                                                </Controls.Typography>
                                            </Controls.Grid>
                                        </Controls.Grid>
                                    </Controls.Grid>
                                    <Controls.Grid item sm={10} lg={5.5} sx={{height:"63px",display:value1}}>
                                    <CartNavbarComponent  count={count}/>
                                    </Controls.Grid>
                                    <Controls.Grid item xs={11}sm={12} md={11} sx={{marginLeft:{xs:0,md:7,lg:8},display:value2 }} pb={.5}>
                                    
                                        <Controls.Grid item sx={{ display: "flex",}} gap={1}>
                                            <Controls.Grid
                                                item
                                                xs={0}
                                                sm={7}
                                                md={6.5}
                                                lg={7}
                                                xl={8}
                                                sx={{
                                                    display: { xs: "none", sm: 'flex' },
                                                    flexDirection: 'column',
                                                    justifyContent: { sm: 'flex-end' },
                                                    height: '100', 
                                                    margin: { xs: "auto", sm: 0 },
                                                    textAlign: "center",
                                                    marginLeft:{sm:8,md:0},
                                                   

                                                }}
                                            >
                                                <NavLinksComponent />
                                            </Controls.Grid>
                                            <Controls.Grid item xs={5.5} lg={5} xl={4}sx={{ display: "flex" ,}} gap={1} mt={1}>
                                                <Controls.Grid item xs={12} sx={{ display: { xs: "none", sm: "block" }, }} gap={1} >
                                                    <Controls.TextField
                                                        id="outlined-basic"
                                                        label="Search AJIO"
                                                        variant="outlined"
                                                        sx={{

                                                            borderRadius: "30px",
                                                            width: { sm: "180px", md: "200px", lg: "300px", xl: "473px" },
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
                                                        display: {xs:"none",sm:"flex"},
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        height: "100%",
                                                    }} onClick={handleWishlist}
                                                    p={{ xs: 1, sm: 1 }}
                                                    xs={2} sm={2}
                                                    lg={2} xl={1}
                                                >
                                                    <Controls.FavoriteBorderIcon sx={{ fontSize: { xs: "15px", sm: "medium", xll: "30px" } }}   />
                                                </Controls.Grid>

                                                <Controls.Grid item sx={{
                                                    backgroundColor: theme.palette.one.bag,
                                                    borderRadius: "50px",
                                                    color: "white",
                                                    textAlign: "center",
                                                    margin: "auto",
                                                    display: {xs:"none",sm:"flex"},
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    height: "100%",
                                                }}onClick={handleCart}
                                                    p={{ xs: 1, sm: 1 }}
                                                    xs={2} sm={2}
                                                    lg={1} xl={1}>
                                                    <Controls.ShoppingBagOutlinedIcon sx={{ fontSize: { xs: "15px", sm: "medium", xll: "30px" },cursor:'pointer' }} />
                                                </Controls.Grid>
                                            </Controls.Grid>

                                        </Controls.Grid>
                                    </Controls.Grid>
                                    <Controls.Grid item xs={12}  sx={{display:{sm:value3},justifyContent:"flex-start",alignItems:"center",}} mt={1.5}>
                                        <PromisesComponent value1={"none"} value2={"none"} value3={0} value4={0} value5={"felx-end"} value={"start"} value7={"flex-start"}  value11={{sm:5,lg:0}}value9={12}/>
                                    </Controls.Grid>
                                   
                                </Controls.Grid>

                            </Controls.Grid>
                        </Controls.Grid>
                    </Controls.Grid>}
                    

                </Controls.Grid>
                { modal && <SigninComponent open={open} handleClose={handleClose}  setOpen={setOpen}/>}
            </Controls.Grid>
        </>
    )
}

export default MainNavbarComponent