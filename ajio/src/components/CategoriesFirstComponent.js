import React ,{useEffect, useState}from 'react'
import Controls from '../commons/Controls'
import CategoriesTwoComponent from './CategoriesTwoComponent';
import GridToggleComponent from './CategoriesTwoComponent';
import axios from 'axios'
import {useDispatch ,useSelector} from 'react-redux'
import { loadProductsDataInitiate } from '../redux/actions/loadProductsAction';
import { useNavigate, useParams } from 'react-router-dom';

const CategoriesFirstComponent = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); 
    const [hoveredOneIndex, setHoveredOneIndex] = useState(null); 
    const [hoveredTwoIndex, setHoveredTwoIndex] = useState(null); 
    const [data,setData] = useState([])
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const { categoryId, subcategoryId } = useParams();
    const [checkedGender, setCheckedGender] = useState(null);
const [checkedCategory, setCheckedCategory] = useState(null);
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
    // localStorage.setItem('categoryId',categoryId)
    // localStorage.setItem('subcategoryId',subcategoryId)
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

    const cnt = ["Price","Brands","Occassion","Discount","color","Size&Fit","Tags","Rating"]
    const cont = ["Style Type","sleeve","Pattern","Feature","Sport","Neckline","Character","Collar","shape","Fabric"]

    const handleCheckboxChange = (labelName,type) => {
      if (type === "Gender") {
        setCheckedGender(labelName);
      } else if (type === "Categories") {
        setCheckedCategory(labelName);
      }
      
      // Navigate to the new dynamic route with categoryId and the updated checkedLabel
      navigate(`/categories/${categoryId}/${labelName}`);
    };
    const dataToLoop = categoryId === 'men' ? content : categoryId === 'women' ? content2 : categoryId === 'kid' ?   content3 :categoryId === 'beauty' ?  content4 : categoryId === "Home&Kitchen" ? content5 : [];

  return (
    <>
    <Controls.Grid container justifyContent="center">
        <Controls.Grid item xs={10} sx={{}} mt={{xs:18,sm:12}}>
           <Controls.Grid item xs={12}>
            <Controls.Typography variant='caption1' sx={{fontSize:"12px",}}>Home / {categoryId} / {subcategoryId}</Controls.Typography>
           </Controls.Grid>
           <Controls.Grid item xs={12} sx={{display:{xs:"block",sm:"flex"},justifyContent:{sm:"space-between"},}}gap={1}>
            <Controls.Grid item xs={12}sm={3} >
                <Controls.Grid item>
            <Controls.Accordion sx={{ backgroundColor: "transparent", boxShadow: "none", border: "none", }}p={0}>
              <Controls.Grid item xs={12}  >
                <Controls.AccordionSummary
                  expandIcon={<Controls.ExpandMoreIcon sx={{ color: "black" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    fontSize:{xs:"12px",sm:"20px"}
                  }}
                >
                Refined by
                </Controls.AccordionSummary>
              </Controls.Grid>
              <Controls.AccordionDetails>
                {dataToLoop.map((item,index)=>(

                <>
                <Controls.Grid item key={index} sx={{display:"flex",justifyContent:"space-between"}}>
                <Controls.Grid item >
                    <Controls.Grid item sx={{display:"flex"}} >
                        <Controls.MinimizeIcon fontSize='small'/>
                        <Controls.Typography variant='caption1' sx={{marginTop:1,fontSize:"14px",color:"black"}}
                         onMouseEnter={() => setHoveredOneIndex(index)} 
                         onMouseLeave={() => setHoveredOneIndex(null)} 
                        >{item.title}</Controls.Typography>
                    
                    </Controls.Grid>
                    {item.name.map((itm, indx) => (
  <Controls.Grid item sx={{ display: "flex" }} key={indx}>
    <Controls.Checkbox
      {...label}
      checked={
        (item.title === "Gender" && itm.nm === categoryId) || 
        (item.title === "Categories" && itm.nm === subcategoryId)
      }
      onChange={() => handleCheckboxChange(itm.nm, item.title)}
    />
    <Controls.Typography variant="caption" sx={{ marginTop: 1.5, fontSize: "12px", }}>
      {itm.nm} ({itm.count})
    </Controls.Typography>
  </Controls.Grid>
))}

  

                </Controls.Grid>
                <Controls.Grid item>
                {hoveredOneIndex === index && (  
          <Controls.Grid item sx={{ display: "flex", gap: 1 }}>
            <Controls.Typography
              variant="caption1"
              sx={{ fontSize: "10px", color: "#176d93", cursor: "pointer",marginTop:.5 }}
            >
              Select All
            </Controls.Typography>
            <Controls.Typography
              variant="caption1"
              sx={{ fontSize: "12px", color: "#176d93", cursor: "pointer" }}
            >
              |
            </Controls.Typography>
            <Controls.Typography
              variant="caption2"
              sx={{ fontSize: "12px", color: "#176d93", cursor: "pointer",marginTop:.1 }}
            >
              Clear All
            </Controls.Typography>
          </Controls.Grid>
        )}
                </Controls.Grid>
                </Controls.Grid>
              
                 <Controls.Divider/>
                 </>
                ))}
                {cnt.map((txt, index) => (
    < >
      <Controls.Grid key={index}
        item gap={1}
        onMouseEnter={() => setHoveredIndex(index)} 
        onMouseLeave={() => setHoveredIndex(null)} 
        sx={{ display: "flex", alignItems: "center", cursor: "pointer", justifyContent: "space-between" }}p={2}
      >
        <Controls.Grid item sx={{display:"flex",}}>
          <Controls.AddIcon  fontSize='small' sx={{marginTop:.5}}/>
          <Controls.Typography variant="caption1" sx={{ fontSize: "18px" ,}}>
            {txt}
          </Controls.Typography>
        </Controls.Grid>
        {hoveredIndex === index && (  
          <Controls.Grid item sx={{ display: "flex", gap: 1 }}>
            <Controls.Typography
              variant="caption1"
              sx={{ fontSize: "10px", color: "#176d93", cursor: "pointer",marginTop:.5 }}
            >
              Select All
            </Controls.Typography>
            <Controls.Typography
              variant="caption1"
              sx={{ fontSize: "12px", color: "#176d93", cursor: "pointer" }}
            >
              |
            </Controls.Typography>
            <Controls.Typography
              variant="caption2"
              sx={{ fontSize: "12px", color: "#176d93", cursor: "pointer",marginTop:.2 }}
            >
              Clear All
            </Controls.Typography>
          </Controls.Grid>
        )}
      </Controls.Grid>
      <Controls.Divider />
    </>
  ))}
              
               </Controls.AccordionDetails>
               
            </Controls.Accordion>
            </Controls.Grid>

            <Controls.Grid item sx={{paddingInlineStart:"20px"}}>
            <Controls.Accordion sx={{ backgroundColor: "transparent",  boxShadow: "none", border: "none",display:{xs:"none",md:"block"} }}p={0}>
              <Controls.Grid item xs={12}  >
                <Controls.AccordionSummary
                  expandIcon={<Controls.ExpandMoreIcon sx={{ color: "black" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    fontSize:{xs:"12px",sm:"20px"},
                    backgroundColor:"#f9fcf5"
                  }}
                >
                  More Filters
                </Controls.AccordionSummary>
              </Controls.Grid>
              <Controls.AccordionDetails>
              {cont.map((txt, index) => (
    < >
      <Controls.Grid key={index}
        item gap={1}
        onMouseEnter={() => setHoveredTwoIndex(index)} 
        onMouseLeave={() => setHoveredTwoIndex(null)} 
        sx={{ display: "flex", alignItems: "center", cursor: "pointer", justifyContent: "space-between" }}p={2}
      >
        <Controls.Grid item sx={{display:"flex",}}>
          <Controls.AddIcon  fontSize='small' sx={{marginTop:.5}}/>
          <Controls.Typography variant="caption1" sx={{ fontSize: "18px" ,}}>
            {txt}
          </Controls.Typography>
        </Controls.Grid>
        {hoveredTwoIndex === index && (  
          <Controls.Grid item sx={{ display: "flex", gap: 1 }}>
            <Controls.Typography
              variant="caption2"
              sx={{ fontSize: "10px", color: "#176d93", cursor: "pointer", }}
            >
              Select All
            </Controls.Typography>
            <Controls.Typography
              variant="caption2"
              sx={{ fontSize: "12px", color: "#176d93", cursor: "pointer",marginTop:0.2 }}
            >
              |
            </Controls.Typography>
            <Controls.Typography
              variant="caption2"
              sx={{ fontSize: "12px", color: "#176d93", cursor: "pointer",marginTop:.3 }}
            >
              Clear All
            </Controls.Typography>
          </Controls.Grid>
        )}
      </Controls.Grid>
      <Controls.Divider />
    </>
  ))}</Controls.AccordionDetails>
            </Controls.Accordion>
            </Controls.Grid>
           
            </Controls.Grid>
            <Controls.Grid item xs={12}sm={9 } sx={{}}>
                <CategoriesTwoComponent/>
                {/* <GridToggleComponent/> */}
            </Controls.Grid>
           </Controls.Grid>
        </Controls.Grid>
    </Controls.Grid>
    </>
  )
}

export default CategoriesFirstComponent