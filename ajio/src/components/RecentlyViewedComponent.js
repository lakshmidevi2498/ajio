import React, { useEffect, useRef, useState } from 'react'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import Controls from '../commons/Controls'; 
import InnerSwiperComponent from './InnerSwiperComponent';

const RecentlyViewedComponent = () => { 
    const [viewed, setViewed] = useState([]);
   

    useEffect(() => {
        const storedProducts = JSON.parse(sessionStorage.getItem("recentlyViewed"));
        if (storedProducts) {
          setViewed(storedProducts);
        }
        console.log("storedProducts",storedProducts)
      }, []);



  
  return (
    <>
    <Controls.Grid container sx={{justifyContent:'center',}} mx='auto'>
        <Controls.Grid item xs={10} sx={{ position: "relative",justifyContent:"center", }} my={4}>

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
            fontWeight:"bold",
            color:"#585858",
            fontSize:"18px",
            fontFamily:"lora"
          }}
        >
          Recently Viewed
        </Controls.Typography>

     
        <Controls.Divider
          orientation="horizontal"
          sx={{
            flexGrow: 1,
            height: "2px", 
          }}
        />
      </Controls.Grid>
      <Controls.Grid item my={4} sx={{justifyContent:"center",alignItems:"center"}}>
      <InnerSwiperComponent data ={viewed} />
      </Controls.Grid>

    </Controls.Grid>
    </Controls.Grid>
    </>
  )

}

export default RecentlyViewedComponent