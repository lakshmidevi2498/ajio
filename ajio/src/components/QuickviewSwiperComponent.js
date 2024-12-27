import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Controls from "../commons/Controls";

const QuickviewSwiperComponent = ({ innerData, marginValue, height }) => {
  console.log("innserimages data", innerData)
  console.log("innserimages", innerData.innerimages)
  const [selectedIndex, setSelectedIndex] = useState(0);
  const horizontalSwiperRef = useRef(null);

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
    if (horizontalSwiperRef.current) {
      horizontalSwiperRef.current.slideTo(index);
    }
  };

  return (
    <Controls.Grid container justifyContent="center">

<Controls.Grid
  item
  xs={3}
  sx={{
    display: {xs:"none",md:'flex'},  
    flexDirection: 'column',   
    justifyContent: 'center',  
    alignItems: 'center',  
    height: '100%',   
  }}
>
  <Swiper
    direction="vertical"
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    spaceBetween={1}
    slidesPerView={4}
    modules={[Navigation, Autoplay]}
    style={{
      height: '72vh',  
      width: '100%',
      alignItems: 'center' ,
      marginY: 'auto',   
      justifyContent: 'center',
    }}
  >
    {innerData?.innerimages.map((item, index) => (
      <SwiperSlide key={index} onClick={() => handleThumbnailClick(index)}>
        <Controls.CardMedia
          component="img"
          src={item}
          alt={`Thumbnail ${index + 1}`}
          sx={{
            width: '60px',
            height: '80px',
            border: '1px solid lightgray',
            position: 'relative',
            objectFit: 'cover',
          
          }}
        />
        {selectedIndex === index && (
          <Controls.Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '60px',
              height: '80px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
            }}
          />
        )}
      </SwiperSlide>
    ))}
  </Swiper>
</Controls.Grid>



      <Controls.Grid
        item
        xs={12} md={9}
        sx={{ position: "relative", justifyContent: "center" }}
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false, 
          }}
          loop={true}
          onSwiper={(swiper) => {
            horizontalSwiperRef.current = swiper;
          }}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          modules={[Navigation, Autoplay]}
        >
          {innerData?.innerimages.map((image, index) => (
            <SwiperSlide key={index}>
              <Controls.Box
                component="img"
                src={image}
                alt={`Main Image ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  maxWidth: "500px",
                  minHeight: { sm: "750px", sm: "700px", lg: "600px" },
                }}
                loading="lazy"
              />
              <Controls.Grid item p={.3} sx={{ top: 10, right: 10, position: "absolute", border: "2px solid #a6a5a4", borderRadius: "50px", display: "flex" }}>
                <Controls.ShareIcon sx={{ color: "#a6a5a4", fontSize: "20px" }} />
              </Controls.Grid>
            </SwiperSlide>
          ))}
        </Swiper>



        <Controls.Grid
          className="custom-swiper-button-prev"
          sx={{
            display: "flex",
            position: "absolute",
            top: "50%",
            left: { xs: "-32px", sm: "10px" },
            transform: "translateY(-50%)",
            zIndex: 10,
            padding: 1,
            cursor: "pointer",
          }}
        >
          <Controls.ChevronLeftIcon />
        </Controls.Grid>
        <Controls.Grid
          className="custom-swiper-button-next"
          sx={{
            display: "flex",
            position: "absolute",
            top: "50%",
            right: { xs: "-32px", sm: "10px" },
            transform: "translateY(-50%)",
            zIndex: 10,
            padding: 1,
            cursor: "pointer",
          }}
        >
          <Controls.ChevronRightIcon />
        </Controls.Grid>
      </Controls.Grid>

    </Controls.Grid>
  );
};

export default QuickviewSwiperComponent;
