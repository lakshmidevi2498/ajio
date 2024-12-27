import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Controls from '../../commons/Controls';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';

const SmallNavbarComponent = () => {
    const navigate  = useNavigate()
    const swiperRef = useRef(null);
    const navbar = [
       { icon:"https://static.thenounproject.com/png/3574480-200.png",link:'/'},
       { icon:"https://5.imimg.com/data5/SELLER/Default/2023/1/KN/YD/SC/182376891/kids-winter-clothes.jpeg",name:"Winter wear",link:'/categories/kid/Outwear'},
       { icon:"https://media.istockphoto.com/id/1365223878/photo/attractive-man-feeling-cheerful.jpg?s=612x612&w=0&k=20&c=UfnlXLnX9Te1EgPM9IGepLyWH0M3dIYSoVdf1bslqO4=",name:"Men",link:'/categories/men/jackets&jones'},
       { icon:"https://img.freepik.com/premium-photo/headshot-photos-indian-women-dynamic-professions-occassions-indian-girl_978786-295.jpg",name:"Women",link:'/categories/women/Sunglasses'},
       { icon:"https://neutral.com/cdn/shop/products/O30001KidsT-shirt_DustyMint_White_804x.jpg?v=1672222201",name:"Kids",link:'/categories/kid/Gaming'},
       { icon:"https://www.pacificclinics.org/wp-content/uploads/2023/09/Family.png",name:"Sales",link:"/categories/beauty/Moisturisers"},
       { icon:"https://aarsunwoods.com/wp-content/uploads/2023/03/Luxury-Round-Bed-Furniture-jpg.webp",name:"Home Store",link:"/categories/Home&Kitchen/cookware"},  
    ]
  return (
    <>
    <Controls.Grid container justifyContent ="center">
        <Controls.Grid item xs={12} sx={{ position: 'relative' }}mb={0.5}>
        <Swiper
                    spaceBetween={0}
                    // loop={true}
                    // pagination={true}
                    // navigation={{
                    //     nextEl: '.custom-swiper-button-next',
                    //     prevEl: '.custom-swiper-button-prev',
                    // }}
                    // modules={[Navigation]}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        1440: { slidesPerView: 0 },
                        1024: { slidesPerView: 0 },
                        764: { slidesPerView: 0 },
                        576: { slidesPerView: 4 },
                        320: { slidesPerView: 5 },
                    }}
                >
                    {navbar.map((item, index) => (
                        
                        <SwiperSlide key={index}>
                           
                            <Controls.Grid item sx={{display:"flex",alignItems:"center"}}gap={.2} xs={2}>
                            <Controls.CardMedia
                                component="img"
                                src={item.icon}
                                sx={{
                                    width: '30px',
                                    borderRadius:"50px",
                                    height: '30px',
                                    // transition: 'transform 0.3s ease-in-out',
                                    // '&:hover': {
                                    //     transform: 'scale(1.01)',
                                    // },
                                }}onClick={()=>navigate(item.link)}
                            />
                            <Controls.Typography variant="caption" sx={{alignItems:"center",fontSize:"7px"}}>{item.name}</Controls.Typography>
                            </Controls.Grid>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </Controls.Grid>
    </Controls.Grid>
    </>
  )
}

export default SmallNavbarComponent