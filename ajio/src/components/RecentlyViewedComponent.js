import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Controls from '../commons/Controls';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import QuickViewComponent from './QuickViewComponent';
import InnerSwiperComponent from './InnerSwiperComponent';

const RecentlyViewedComponent = () => {
    const swiperRef = useRef(null);
    const [viewed, setViewed] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [quickView, setQuickView] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([])
    const [innerData, setinnerData] = useState([])
    const navigate = useNavigate()

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