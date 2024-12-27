import React from 'react'
import Controls from '../commons/Controls'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const RatingsComponent = ({ innerproductsdata }) => {
  const content = [
    { percent: 32, caption: "Perfect" },
    { percent: 38, caption: "Loose" },
    { percent: 2, caption: "Tight" },
    { percent: 26, caption: "Too Loose" },
    { percent: 0, caption: "Too Tight" },
  ]

  const content1 = [
    { percent: 32, caption: "Excellent" },
    { percent: 38, caption: "Very Good" },
    { percent: 2, caption: "Average" },
    { percent: 26, caption: "Bad" },
    { percent: 0, caption: "Very Bad" },
  ]

  return (
    <>
      <Controls.Grid container justifyContent="center">
        <Controls.Grid item xs={10} sm={10} md={10} lg={10} sx={{ alignItems: "center", justifyContent: "center", }} mt={5} >
          <Controls.Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginX: "auto",
              textAlign: "center",
            }}
          >

            <Controls.Divider
              orientation="horizontal"
              sx={{
                flexGrow: 1,
                height: "2px",
              }}
            />


            <Controls.Typography
              variant="caption1"
              sx={{
                marginX: 2,
                textAlign: "center",
                fontWeight: "bold", color: "#585858",
                fontSize: "18px",
                fontFamily: "lora"
              }}
            >
              Ratings
            </Controls.Typography>


            <Controls.Divider
              orientation="horizontal"
              sx={{
                flexGrow: 1,
                height: "2px",
              }}
            />
          </Controls.Grid>
          <Controls.Grid item xs={12}md={12} sx={{ display: { xs: "block", sm: "flex" } }} gap={{xs:0,sm:5}} mt={3}>

            <Controls.Grid item xs={12}md={5} sx={{ display: "flex",  margin:"auto"}} gap={5}>
              <Controls.Grid item xs={2} sm={4} md={5}>
                <Controls.Grid item sx={{ display: "flex" }} gap={1}>
                  <Controls.Typography variant='caption1' sx={{ fontSize: "30px" }}>{innerproductsdata.rating}</Controls.Typography><Controls.StarIcon sx={{ color: "green", fontSize: "30px", marginTop: 0.8 }} />
                </Controls.Grid>

                <Controls.Grid item >
                  <Controls.Typography variant='caption1' sx={{fontSize:"12px",sm:"15px"}}>{innerproductsdata.reviews}Customers</Controls.Typography>
                </Controls.Grid>
              </Controls.Grid>
              <Controls.Divider orientation='vertical' sx={{ color: "black", width: "2px", height: "70px" ,display:{xs:"none",sm:"block"}}} />
              <Controls.Grid item xs={10} sm={8} md={7}>
                <Controls.Grid item>
                  <Controls.Typography variant='caption1' sx={{ color: "#6d6d6d",fontSize:{md:"12px",lg:"15px"} }}>Rating Distribution</Controls.Typography>
                </Controls.Grid>
                <Controls.Grid container spacing={0}>
                  {[28, 16, 45, 13, 28].map((item, index, arr) => (
                    <Controls.Grid
                      item
                      key={index}
                      xs={12}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Controls.Typography
                        variant="caption1"
                        sx={{
                          minWidth: "20px",
                          textAlign: "center",
                          marginRight: "8px",
                        }}
                      >
                        {arr.length - index}  <Controls.StarIcon sx={{ fontSize: "12px" }} />
                      </Controls.Typography>
                      <LinearProgress
                        variant="determinate"
                        value={item}
                        sx={{
                          flex: 1,
                          height: "8px",
                          borderRadius: "5px",
                          color: "#6d6d6d",
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "#D5A248",
                          },
                          backgroundColor: "lightgray",
                        }}
                      /><Controls.Typography variant='caption1' sx={{ color: "#6d6d6d", fontSize: "12px" }}>{item}%</Controls.Typography>
                    </Controls.Grid>
                  ))}
                </Controls.Grid>


              </Controls.Grid>
            </Controls.Grid>

            <Controls.Divider orientation='vertical' sx={{ color: "black", width: "2px", height: "150px",display:{xs:"none",md:"block"} }} />

            <Controls.Grid item xs={8} md={7}sx={{ display: { xs: "none", md: "flex" } }} gap={5}>
              <Controls.Grid item xs={4} md={6} lg={4}>
                <Controls.Grid item>
                  <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", marginBottom: 0.5 }}>Customer Opinion</Controls.Typography>
                </Controls.Grid>
                <Controls.Grid item sx={{ marginBottom: 0.5 }}>
                  <Controls.Typography variant='caption1' sx={{ color: "#6d6d6d",fontSize:{md:"12px",lg:"15px"} }}>How was the Product fit?</Controls.Typography>
                </Controls.Grid>
                <Controls.Grid container spacing={0.5}>
                  {content?.map((item, index, arr) => (
                    <Controls.Grid
                      item
                      key={index}
                      xs={12}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >

                      <LinearProgress
                        variant="determinate"
                        value={item.percent}
                        sx={{
                          flex: 1,
                          height: "8px",
                          borderRadius: "5px",
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "#D5A248",
                          },
                          backgroundColor: "lightgray",
                        }}
                      /><Controls.Typography variant='caption1' sx={{ color: "#6d6d6d", fontSize: "12px" }}>{item.caption}({item.percent}%)</Controls.Typography>
                    </Controls.Grid>
                  ))}
                </Controls.Grid>


              </Controls.Grid>


              <Controls.Grid item xs={4} md={6} lg={4} mt={3}>

                <Controls.Grid item sx={{ marginBottom: 0.5 }}>
                  <Controls.Typography variant='caption1' sx={{ color: "#6d6d6d",fontSize:{md:"12px",lg:"15px"} }}>How was the Product Quality?</Controls.Typography>
                </Controls.Grid>
                <Controls.Grid container spacing={0.5}>
                  {content1?.map((item, index, arr) => (
                    <Controls.Grid
                      item
                      key={index}
                      xs={12}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <LinearProgress
                        variant="determinate"
                        value={item.percent}
                        sx={{
                          flex: 1,
                          height: "8px",
                          borderRadius: "5px",
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "#D5A248",
                          },
                          backgroundColor: "lightgray",
                        }}
                      /><Controls.Typography variant='caption1' sx={{ color: "#6d6d6d", fontSize: "12px" }}>{item.caption}({item.percent}%)</Controls.Typography>
                    </Controls.Grid>
                  ))}
                </Controls.Grid>


              </Controls.Grid>
            </Controls.Grid>
          </Controls.Grid>

        </Controls.Grid>
      </Controls.Grid>
    </>
  )
}

export default RatingsComponent