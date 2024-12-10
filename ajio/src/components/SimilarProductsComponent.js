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
import InnerSwiperComponent from './InnerSwiperComponent';

const SimilarProductsComponent = ({innerproductsdata}) => {
    console.log("SimilarProductsComponent",innerproductsdata)

    const swiperRef = useRef(null);
    const [images,setImages] = useState([])
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [quickView, setQuickView] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [innerData, setinnerData] = useState([])
    const [data , setData] = useState(null)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const productData = useSelector((state) => state.loadproductsdata.data || {})
    console.log("productData", productData)
    useEffect(()=>{
        dispatch(loadProductsDataInitiate())
    },[])

    useEffect(() => {
        const pdata = productData?.data || [];
        const categoryId = innerproductsdata.categories;
        const subcategoryId = innerproductsdata.subcatergory;
        const filtered = pdata.filter(
            (item) =>
                item.categories === categoryId &&
                item.subcatergory === subcategoryId
        );
        setData(filtered);
        console.log("Filtered Data SimilarProductsComponent", filtered);
    }, [productData, innerproductsdata]);
    

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
     <Controls.Grid item xs={12} sx={{ position: "relative" }} my={4}>
      <InnerSwiperComponent  data ={data}/>

    </Controls.Grid>
    </>
  )
}

export default SimilarProductsComponent