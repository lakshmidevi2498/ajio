import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Controls from '../commons/Controls' 
import { getToken, getUserId } from './GlobalFunction';
import axios from 'axios';
import { useDispatch ,useSelector } from 'react-redux';
import { loadCartInitiate } from '../redux/actions/loadCartAction';
import { postCartInitiate } from '../redux/actions/postCartAction';
import { updateCartInitiate } from '../redux/actions/updateCartAction';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: { md: "800px", lg: "380px", xxl: "1200px" },
    height: "auto",
    maxHeight: "90vh",
    bgcolor: "background.paper",
    // border: "2px solid lightgray",
    boxShadow: 24,
    p: 0,
    overflowY: "auto",
};

const SizeModalComponent = ({id, open, setOpen, setProduct, productData }) => {
    console.log("productData SizeModalComponent", productData,id)
    const swiperRef = useRef(null);
    const [selectedSize, setSelectedSize] = useState("S")
    const [updateProduct,setUpdateProduct] = useState({})
    const userId = getUserId()
    const token = getToken()
    const dispatch = useDispatch()

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(()=>{
        setUpdateProduct(productData)
        // console.log("")
    },[productData])

    const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

    const handleIncrement = () => {
        if (updateProduct.quantity < 99) {
          setUpdateProduct((prev) => ({
            ...prev,
            quantity: prev.quantity + 1,
          }));
        }
      };
    
      const handleDecrement = () => {
        if (updateProduct.quantity > 1) {
          setUpdateProduct((prev) => ({
            ...prev,
            quantity: prev.quantity - 1,
          }));
        }
      };

    const handleSizeClick = (item) => {
        setSelectedSize(item)

    }

    const handleUpdateSizes = async (qty,size) => {
        try {
            console.log("handleUpdateSizes",userId, id, qty,size, token);
           
            dispatch(updateCartInitiate(userId,id,size,qty))
            dispatch(loadCartInitiate(token,userId))
            setOpen(false);
        } catch (error) {
            console.log("error", error);
        }
    };
    

    return (
        <>
            <Controls.Grid container justifyContent="center" sx={{ overflowX: "hidden", }}>
                <Controls.Modal
                    open={open}
                    onClose={handleClose}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        
                    }}
                >
                    <Controls.Grid
                        container
                        sx={{
                            ...style,
                            display: "block",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%",
                            maxWidth: "25vw", 
                            overflowX: "hidden", 
                        }}
                    >
                        <Controls.Grid px={2}
                            item
                            xs={12}
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end", 
                                alignItems: "center",      
                            }}pt={1}
                        >
                            <Controls.CloseIcon onClick={handleClose} />
                        </Controls.Grid>
                        <Controls.Grid item xs={12} mb={1} px={2}>
                            <Controls.Grid item mb={2}>
                            <Controls.Typography
                                variant="caption1"
                                sx={{ textAlign: "center", width: "100%", fontSize: "18px" ,fontWeight:"bold",}}
                            >
                                Select size
                            </Controls.Typography>
                            </Controls.Grid>
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

                                {/* Custom Navigation Buttons */}
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

                        </Controls.Grid>
                        <Controls.Grid item xs={12} sx={{ textAlign: "left", mb: 1 }} px={2}>
                            <Controls.Typography variant="caption1" sx={{fontWeight:"bold",fontSize: "18px" ,}}>Select Quantity</Controls.Typography>
                        </Controls.Grid>
                        <Controls.Grid px={2}
                            item
                            xs={12}
                            sx={{
                                display: "flex",
                                flexDirection: "row", 
                                alignItems: "center", 
                                justifyContent: "flex-start",
                                gap: "10px", 
                            }}my={2}
                        >
                            <Controls.RemoveIcon
                                fontSize="small"
                                onClick={() => handleDecrement(updateProduct.product._id)}
                                sx={{ cursor: "pointer" }}
                            />
                            <Controls.Typography
                                variant="caption1"
                                sx={{
                                    fontSize: "15px",
                                    border: "1px solid lightgray",
                                    borderRadius: "50%",
                                    padding: "5px 10px",
                                    textAlign: "center",
                                    minWidth: "40px",
                                    height: "40px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {updateProduct.quantity}
                            </Controls.Typography>
                            <Controls.AddIcon
                                fontSize="small"
                                onClick={() => handleIncrement(updateProduct.product._id)}
                                sx={{ cursor: "pointer" }}
                            />
                        </Controls.Grid>
                        <Controls.Grid item xs={12} sx={{color: "white", backgroundColor: "#86652880",textAlign:"center",cursor:"pointer"}}py={1} onClick={() =>handleUpdateSizes(updateProduct.quantity,selectedSize)}>
                            <Controls.Typography >UPDATE</Controls.Typography>
                        </Controls.Grid>

                    </Controls.Grid>

                </Controls.Modal>

            </Controls.Grid>

        </>
    )
}

export default SizeModalComponent