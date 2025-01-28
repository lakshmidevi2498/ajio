import React from 'react'
import Controls from '../commons/Controls'
import theme from '../utilities/theme'
import { Icon } from '@iconify/react';

const FooterComponentTwo = () => {
  return (
    <>
     <Controls.Grid item xs={12} sx={{ display: { xs: "flex", sm: "flex" }, justifyContent: { xs: "center", sm: "space-between" }, }} mb={3} gap={{xs:0.2,sm:1}}>
              <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between", }} >
                <Controls.Grid item sx={{ display: "flex", }} gap={{ xs: 1, sm: 2 }}>


                  <Controls.Grid item sx={{ display: "flex", alignItems: "center",  }} gap={{xs:0.5,sm:1}} mt={{ xs: 1, sm: 0 }}>
                    <Controls.Typography
                      variant="caption1"
                      sx={{
                        fontSize: { xs: "8px", sm: "14px" },
                        marginTop: "3px",
                        display: "inline",
                      }}
                    >
                      Net
                    </Controls.Typography>

                    <Controls.Typography
                      sx={{
                        backgroundColor: "white",
                        color: theme.palette.one.bag,
                        fontSize: { xs: "8px", sm: "14px" },
                        padding: "2px 5px",
                        borderRadius: "4px",
                        display: "inline-block",
                      }}
                    >
                      Banking
                    </Controls.Typography>
                  </Controls.Grid>



                  <Controls.Grid item sx={{ display: "block", alignItems: "center",  }} mt={{xs:2,md:3}}>
                    <Controls.Grid
                      item
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >

                      <Controls.Grid
                        item
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "8px", sm: "16px" }, fontWeight: "bold" }}>
                          Verified
                        </Controls.Typography>
                        <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "6px", sm: "12px" } }}>
                          by
                        </Controls.Typography>
                      </Controls.Grid>
                      <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "8px", sm: "16px" }, fontWeight: "bold" }}>VISA</Controls.Typography>

                    </Controls.Grid>
                  </Controls.Grid>


                  <Controls.Grid item sx={{  }} mt={{ xs: 1, sm: 1,md:2 }}>
                    <Controls.Box
                      sx={{
                        width: { xs: "30px", sm: "70px" },
                        height: { xs: "30px", sm: "70px" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icon icon="lineicons:mastercard" width="100%" height="100%" />
                    </Controls.Box>
                  </Controls.Grid>


                  <Controls.Grid item sx={{ display: "flex",  }} mt={{xs:2,sm:3}} sm={2.5}>
                    <Controls.Grid item mt={0.5} xs={4}>
                      <Controls.Box
                        sx={{
                          width: { xs: "22px",sm:"32px", md:"35px",lg: "40px" },
                          height: { xs: "22px",sm:"32px",md:"35px", lg: "40px" },
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Icon icon="fa:rupee" width="100%" height="100%" />
                      </Controls.Box>

                    </Controls.Grid>
                    <Controls.Grid item sx={{ display: "flex",  }} xs={8} sm={10}>
                      <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "6px", sm:"10px",md: "14px" } }}>CASH ON DELIVERY</Controls.Typography>
                    </Controls.Grid>
                  </Controls.Grid>

                  <Controls.Grid item sx={{ display: {xs:"none",sm:"flex"}, alignItems: "center",  }} mt={{ xs: 1, sm: 0 }}>
                    <Controls.Grid
                      item
                      sx={{
                        display: "flex",
                        backgroundColor: "white",
                        borderRadius: "50px",
                        padding: { xs: "0.2rem", sm: "0.5rem" },
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Controls.Typography
                        sx={{
                          color: "blue",
                          display: "inline-block",
                          fontWeight: "bold",
                          fontSize: { xs: "10px" }
                        }}
                      >
                        Jio
                      </Controls.Typography>
                    </Controls.Grid>

                    <Controls.Typography
                      sx={{ 
                        fontWeight: "bold",
                        fontSize: { xs: "8px", sm: "14px" }
                      }}
                    >
                      Money
                    </Controls.Typography>
                  </Controls.Grid> 
                </Controls.Grid>
              </Controls.Grid>

              <Controls.Grid item sx={{ display: "end", }} >
                <Controls.Grid item sx={{ display: "flex", alignItems: "center" }} mt={{ xs: 1.5, sm: 2.5,md:3 }} gap={{xs:0.2,sm:1}}>
                   
                  <Controls.Box
                    sx={{
                      width: { xs: "20px",sm:"30px",md:"60px", lg: "40px" },
                      height: { xs: "20px", sm:"30px", md:"60px",lg: "40px" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center", 
                    }}
                  >
                    <Icon icon="et:lock" width="100%" height="100%" />
                  </Controls.Box>

                  
                  <Controls.Grid item xs={8} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 0 }}>
                     
                    <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "10px", sm: "14px" } }}>
                      256BIT &nbsp;
                    </Controls.Typography>
                    
                    <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "6px", sm: "10px" }, marginTop: "4px" }}>
                      ENCRYPTION
                    </Controls.Typography>
                  </Controls.Grid>
                </Controls.Grid>


              </Controls.Grid>
            </Controls.Grid>
    </>
  )
}

export default FooterComponentTwo