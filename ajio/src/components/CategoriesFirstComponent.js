import React ,{useEffect, useState}from 'react'
import Controls from '../commons/Controls'
import CategoriesTwoComponent from './CategoriesTwoComponent';
import {useDispatch ,useSelector} from 'react-redux'
import { loadProductsDataInitiate } from '../redux/actions/loadProductsAction';
import {  useParams } from 'react-router-dom';
import CategoriesAccordainComponent from './CategoriesAccordainComponent';

const CategoriesFirstComponent = () => {
    const [data,setData] = useState([])
    const dispatch = useDispatch()
    const { categoryId, subcategoryId } = useParams();
    const productData = useSelector((state) => state.loadproductsdata.data || {})
    console.log("productData in CategoriesFirstComponent", productData)

    useEffect(() => {
      const fetchProducts = async () => {
          dispatch(loadProductsDataInitiate())
      }
      fetchProducts()
  }, [])

  useEffect(() => {
    const pdata = productData?.data || [];
  
    const filtered = pdata.filter(
        (item) =>
            item.categories === categoryId &&
            item.subcatergory === subcategoryId
    );
    setData(pdata);

    console.log("Filtered Data: in CategoriesFirstComponent", pdata);
}, [productData, categoryId, subcategoryId]);
  
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    
    const content = [
      {title:"Gender",name:[{nm:'men',count:25},]},
        {title:"Categories",name:[{nm:"jackets&jones ",count:5},{nm:"shirt",count:5},{nm:"footwear",count:5},{nm:"watches",count:5},{nm:"festive",count:5}]}]
        const content2 = [
        {title:"Gender",name:[{nm:'women',count:25},]},
        {title:"Categories",name:[{nm:"kurtas ",count:5},{nm:"fashion jewellery",count:5},{nm:"Sunglasses",count:5},{nm:"Kerala Sarees",count:5},{nm:"Heeled Sandals",count:5}]}
    ]
    const content3 = [
      {title:"Gender",name:[{nm:'kid',count:25},]},
      {title:"Categories",name:[{nm:"Dress&Frocks ",count:5},{nm:"Gaming",count:5},{nm:"Outwear",count:5},{nm:"Tops",count:5},{nm:"School Supplies",count:5}]}
  ]

  const content4 = [
    {title:"Gender",name:[{nm:'beauty',count:25},]},
    {title:"Categories",name:[{nm:"Mascara ",count:5},{nm:"perfumes",count:5},{nm:"facewash",count:5},{nm:"lipstick",count:5},{nm:"Moisturisers",count:5}]}
]

const content5 = [
  {title:"Gender",name:[{nm:'Home&Kitchen',count:25},]},
  {title:"Categories",name:[{nm:"cushions ",count:5},{nm:"cookware",count:5},{nm:"wall decor ",count:5},{nm:"vases",count:5},{nm:"Holders",count:5}]}
]

   
    const dataToLoop = categoryId === 'men' ? content : categoryId === 'women' ? content2 : categoryId === 'kid' ?   content3 :categoryId === 'beauty' ?  content4 : categoryId === "Home&Kitchen" ? content5 : [];
  console.log("dataToLoop",dataToLoop)
    
  return (
    <>
    <Controls.Grid container justifyContent="center">
        <Controls.Grid item xs={11} sm={11} md={9.5} lg={9.5} xl={9}sx={{}} mt={{xs:10,sm:12}}>
           <Controls.Grid item xs={12}>
            <Controls.Typography variant='caption1' sx={{fontSize:"12px",}}>Home / {categoryId} / {subcategoryId}</Controls.Typography>
           </Controls.Grid>
           <Controls.Grid item xs={12} sx={{display:{xs:"block",sm:"flex"},justifyContent:{sm:"space-between"},}}gap={1}>
            <CategoriesAccordainComponent dataToLoop={dataToLoop}/>
            <Controls.Grid item xs={12}sm={9 } sx={{}}>
                <CategoriesTwoComponent/> 
            </Controls.Grid>
           </Controls.Grid>
        </Controls.Grid>
    </Controls.Grid>
    </>
  )
}

export default CategoriesFirstComponent