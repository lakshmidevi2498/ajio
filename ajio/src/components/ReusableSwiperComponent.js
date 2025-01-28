import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Controls from '../commons/Controls';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ReusableSwiperComponent = ({ data, value1, value2, value3, value4, value5, autoplayEnabled, autoplayValues, leftValue, rightValue, bgColor,paginationEnabled  }) => {
    const swiperRef = useRef(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (data?.images) {
            setImages(data.images);
            // console.log("data.images", data.images);
        }
    }, [data]);

    const leftButtonRef = useRef(null); 
    const rightButtonRef = useRef(null); 

    return (
        <Controls.Grid container justifyContent="center" sx={{ position: 'relative' }} mt={0}>
            <Controls.Grid item xs={12} sx={{ position: 'relative' }}>
                <Swiper
                    spaceBetween={0}
                    loop={true}
                    pagination={paginationEnabled
                        ? {
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '"></span>';
                        },
                    }: false}
                    navigation={{
                        nextEl: rightButtonRef.current,  
                        prevEl: leftButtonRef.current,  
                    }}
                    {...(autoplayEnabled ? {
                        autoplay: autoplayValues || { delay: 800, disableOnInteraction: false },
                    } : {})}
                    modules={[Pagination, Autoplay, Navigation]}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        1440: { slidesPerView: value1 },
                        1024: { slidesPerView: value2 },
                        764: { slidesPerView: value3 },
                        576: { slidesPerView: value4 },
                        320: { slidesPerView: value5 },
                    }}
                >
                    {images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Controls.CardMedia
                                component="img"
                                src={item}
                                loading="lazy"
                                sx={{
                                    width: '100%',
                                    objectFit: 'cover',
                                    height: '100%',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.01)',
                                    },
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination-bullet"  ></div>

                <Controls.Grid item
                    ref={leftButtonRef}   
                    className="custom-swiper-button-prev"
                    sx={{
                        display: leftValue,
                        position: 'absolute',
                        top: '50%',
                        left: '10px',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        padding: 1,
                        borderRadius: "50px",
                        backgroundColor: bgColor,
                        '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
                    }}
                >
                    <ChevronLeftIcon />
                </Controls.Grid>

                <Controls.Grid item
                    ref={rightButtonRef}  
                    className="custom-swiper-button-next"
                    sx={{
                        display: rightValue,
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        padding: 1,
                        borderRadius: "50px",
                        backgroundColor: bgColor,
                        '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
                    }}
                >
                    <ChevronRightIcon />
                </Controls.Grid>
            </Controls.Grid>
        </Controls.Grid>
    );
};

export default ReusableSwiperComponent;
