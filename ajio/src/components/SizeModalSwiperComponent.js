import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Controls from '../commons/Controls';

const SizeModalSwiperComponent = ({handleSizeClick,sizes,selectedSize}) => {
    const swiperRef = useRef(null);
  return (
    <>
    <Controls.Grid
                                item
                                xs={12}
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                    position: "relative",   
                                }}my={2}
                            >
                                <Swiper
                                    spaceBetween={10}
                                    navigation={{
                                        nextEl: '.custom-swiper-button-next',
                                        prevEl: '.custom-swiper-button-prev',
                                    }}
                                    modules={[Navigation]}
                                    onSwiper={(swiper) => {
                                        swiperRef.current = swiper;
                                    }}
                                    breakpoints={{
                                        1440: { slidesPerView: 6 },
                                        1024: { slidesPerView: 5 },
                                        768: { slidesPerView: 5 },
                                        576: { slidesPerView: 5 },
                                        320: { slidesPerView: 5 },
                                    }}
                                    style={{
                                        width: "100%",
                                        maxWidth: "95%",   
                                        margin: "0 auto",  
                                        display: "flex",  
                                        justifyContent: "center",
                                    }}
                                >
                                    {sizes.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <Controls.Typography
                                                variant="caption1"
                                                onClick={() => handleSizeClick(item)}
                                                sx={{
                                                    fontSize: { xs: "10px", xxl: "16px" },
                                                    borderRadius: "50%",
                                                    border: `1px solid ${selectedSize === item ? "#866528" : "lightgray"
                                                        }`,
                                                    backgroundColor:
                                                        selectedSize === item ? "#176D93" : "transparent",
                                                    color: selectedSize === item ? "white" : "#000",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    width: { xs: "30px", lg: "30px" },
                                                    height: { xs: "30px", lg: "30px" },
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {item}
                                            </Controls.Typography>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
 
                                <Controls.Grid
                                    className="custom-swiper-button-prev"
                                    sx={{
                                        display: "flex",
                                        position: "absolute",
                                        top: "45%",
                                        left: "-40px",
                                        transform: "translateY(-50%)",
                                        zIndex: 10,
                                        padding: 2,
                                    }}
                                >
                                    <Controls.ChevronLeftIcon sx={{ color: "lightgray", fontSize: "35px" }} />
                                </Controls.Grid>
                                <Controls.Grid
                                    className="custom-swiper-button-next"
                                    sx={{
                                        display: "flex",
                                        position: "absolute",
                                        top: "45%",
                                        right: "-10px",
                                        transform: "translateY(-50%)",
                                        zIndex: 10,
                                        padding: 1,
                                    }}
                                >
                                    <Controls.ChevronRightIcon sx={{ color: "lightgray", fontSize: "35px" }} />
                                </Controls.Grid>

                            </Controls.Grid>
    </>
  )
}

export default SizeModalSwiperComponent