import React from 'react'
import Controls from '../commons/Controls'
import LinearProgress from '@mui/material/LinearProgress';

const RatingsComponentOne = ({content,content1}) => {
    
  return (
    <>
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
    </>
  )
}

export default RatingsComponentOne