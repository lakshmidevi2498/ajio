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
import { useDispatch, useSelector } from 'react-redux';
import QuickViewComponent from './QuickViewComponent';
import { loadProductsDataInitiate } from '../redux/actions/loadProductsAction';
import { handleRecentView } from './GlobalFunction'; 

const InnerSwiperComponent = ({data}) => {
    const swiperRef = useRef(null);
    const [images,setImages] = useState([])
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [quickView, setQuickView] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [innerData, setinnerData] = useState([]) 
    const navigate = useNavigate()

    const handleHover = (item) => {

        setQuickView(true)
        setinnerData(item)
        setOpen(true)
    }
    const handleClose = () => {
        setQuickView(false)
        setOpen(false)
    }

    const handleNavigate = (item) => {
      handleRecentView(item)
        navigate('/innerproducts',{state:{innerproductsdata:item}})
    }

  return (
    <>
    <Controls.Grid item xs={12} sx={{justifyContent:"center",alignItems:"center",margin:"auto",}}>
    <Swiper sx={{justifyContent:"center"}}
        spaceBetween={25}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        modules={[Pagination, Autoplay, Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          1440: { slidesPerView: 4 },
          1024: { slidesPerView: 3 },
          764: { slidesPerView: 2 },
          576: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <Controls.Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 1,
                position: "relative",
                width: "100%",
                height: "500px",
               
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Controls.Box
                component="img"
                src={item.image}
                sx={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "300px",
                  maxHeight: "350px",
                 
                }}
                onClick={() => handleNavigate(item)}
              />
              {hoveredIndex === index && (
                <Controls.Grid
                  item
                  xs={12}
                  sx={{
                    backgroundColor: "white",
                    opacity: 0.7,
                    color: "#176d93",
                    fontWeight: "bold",
                    position: "absolute",
                    zIndex: 20,
                    top: "68%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                    textAlign: "center",
                    padding: 1,
                    display: { xs: "none", md: "block" },
                  }}
                  onClick={() => handleHover(item)}
                >
                  <Controls.Typography
                    variant="caption1"
                    sx={{ fontSize: "16px", cursor: "pointer" }}
                  >
                    QUICK VIEW
                  </Controls.Typography>
                </Controls.Grid>
              )}
              <Controls.Grid item sx={{ textAlign: "center",  }}>
                <Controls.Grid item>
                  <Controls.Typography
                    variant="caption1"
                    sx={{
                      fontWeight: "bold",
                      color: "#866528",
                      fontSize: "14px",
                    }}
                  >
                    {item.brandname}
                  </Controls.Typography>
                </Controls.Grid>
                <Controls.Grid item>
                  <Controls.Typography variant="caption1" sx={{ fontSize: "13px" }}>
                    {item.name}
                  </Controls.Typography>
                </Controls.Grid>
                <Controls.Grid
                  item
                  sx={{ display: "flex", justifyContent: "center", gap: 1 }}
                >
                  {item.rating !== 0 && (
                    <Controls.Box
                      my={1}
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        backgroundColor: item.rating >= 3 ? "green" : "red",
                        color: "white",
                        padding: "4px 8px",
                        borderRadius: "4px",
                      }}
                    >
                      <Controls.Typography variant="caption1">
                        {item.rating}
                      </Controls.Typography>
                      <Controls.StarBorderIcon
                        sx={{
                          fontSize: "15px",
                          marginLeft: "4px",
                          marginTop: 0.5,
                        }}
                      />
                      <Controls.Typography
                        variant="caption1"
                        sx={{ marginLeft: "8px" }}
                      >
                        | {item.reviews}
                      </Controls.Typography>
                    </Controls.Box>
                  )}
                </Controls.Grid>
                <Controls.Grid item sx={{ display: "flex" ,justifyContent:"center"}} gap={1} mx="auto" >
                  <Controls.Typography
                    variant="caption1"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      marginBottom: "5px",
                      marginTop: "2px",
                    }}
                  >
                    ₹{item.price}
                  </Controls.Typography>
                  {item.discountOne && (
                    <>
                      <Controls.Typography
                        variant="caption1"
                        sx={{
                          textDecoration: "line-through",
                          color: "gray",
                        }}
                      >
                        ₹{item.discountOne}
                      </Controls.Typography>
                      <Controls.Typography
                        variant="caption1"
                        sx={{ color: "#866528" }}
                      >
                        {item.discountTwo}
                      </Controls.Typography>
                    </>
                  )}
                </Controls.Grid>
              </Controls.Grid>
            </Controls.Grid>
          </SwiperSlide>
        ))}
        {quickView && (
          <QuickViewComponent
            open={quickView}
            setOpen={setQuickView}
            handleClose={handleClose}
            innerData={innerData}
          />
        )}
      </Swiper>
      <Controls.Grid
        className="custom-swiper-button-prev"
        sx={{
          display: "flex",
          position: "absolute",
          top: "40%",
          left: {xs:"10px",sm:"-30px"},
          transform: "translateY(-50%)",
          zIndex: 10,
          
          borderRadius: "50px",
          color: "gray", 
        }}
      >
        <ChevronLeftIcon  sx={{fontSize: "30px",}}/>
      </Controls.Grid>
      <Controls.Grid
        className="custom-swiper-button-next"
        sx={{
          display: "flex",
          position: "absolute",
          top: "40%",
          right: {xs:"10px",sm:"-30px"},
          transform: "translateY(-50%)",
          zIndex: 10,
          padding: 1,
          borderRadius: "50px",
          color: "gray", 
        }}
      >
        <ChevronRightIcon  sx={{fontSize: "30px",}}/>
      </Controls.Grid>
    </Controls.Grid>
    </>
  )
}

export default InnerSwiperComponent