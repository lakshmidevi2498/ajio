import React, { useEffect, useState } from 'react'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import Controls from '../commons/Controls'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { loadProductsDataInitiate } from '../redux/actions/loadProductsAction';
import InnerSwiperComponent from './InnerSwiperComponent';

const SimilarProductsComponent = ({innerproductsdata}) => {
    console.log("SimilarProductsComponent",innerproductsdata)

    const [data , setData] = useState(null)
    const dispatch = useDispatch()
    const productData = useSelector((state) => state.loadproductsdata.data || {})
    console.log("productData", productData)
    useEffect(()=>{
        dispatch(loadProductsDataInitiate())
    },[])

    useEffect(() => {
        const pdata = productData?.data || [];
        const categoryId = innerproductsdata?.categories;
        const subcategoryId = innerproductsdata?.subcatergory;
        const filtered = pdata.filter(
            (item) =>
                item.categories === categoryId &&
                item.subcatergory === subcategoryId
        );
        setData(filtered);
        console.log("Filtered Data SimilarProductsComponent", filtered);
    }, [productData, innerproductsdata]);
    

    
  return (
    <>
     <Controls.Grid item xs={12} sx={{ position: "relative" }} my={4}>
      <InnerSwiperComponent  data ={data}/>

    </Controls.Grid>
    </>
  )
}

export default SimilarProductsComponent