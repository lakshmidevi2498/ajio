import React ,{useEffect, useState}from 'react'
import CategoriesTwoComponent from './CategoriesTwoComponent';
import {useDispatch ,useSelector} from 'react-redux'
import { loadProductsDataInitiate } from '../redux/actions/loadProductsAction';
import { useNavigate, useParams } from 'react-router-dom';
import Controls from '../commons/Controls'
import CategoriesSubAccordainComponent from './CategoriesSubAccordainComponent';

const CategoriesAccordainComponent = ({dataToLoop}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null); 
    const [hoveredOneIndex, setHoveredOneIndex] = useState(null);    
    const navigate= useNavigate()
    const { categoryId, subcategoryId } = useParams();
    const [checkedGender, setCheckedGender] = useState(null);
const [checkedCategory, setCheckedCategory] = useState(null);
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const cnt = ["Price","Brands","Occassion","Discount","color","Size&Fit","Tags","Rating"] 



const handleCheckboxChange = (labelName,type) => {
  if (type === "Gender") {
    setCheckedGender(labelName);
  } else if (type === "Categories") {
    setCheckedCategory(labelName);
  }

  navigate(`/categories/${categoryId}/${labelName}`);
};

  return (
    <>
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
                    fontSize:{xs:"12px",sm:"20px"}, 
                    border:{xs:"1px solid lightgray",sm:"none"}
                  }}
                >
                Refined by
                </Controls.AccordionSummary>
              </Controls.Grid>
              <Controls.AccordionDetails>
                {dataToLoop.map((item,index)=>(

                <>
                <Controls.Grid item key={index} sx={{display:"flex",justifyContent:"space-between"}} >
                <Controls.Grid item >
                    <Controls.Grid item sx={{display:"flex"}} >
                        <Controls.MinimizeIcon fontSize='small'/>
                        <Controls.Typography variant='caption1' sx={{marginTop:1,fontSize:"14px",color:"black"}}
                         onMouseEnter={() => setHoveredOneIndex(index)} 
                         onMouseLeave={() => setHoveredOneIndex(null)} 
                        >{item.title}</Controls.Typography>
                    
                    </Controls.Grid>
                    {item.name.map((itm, indx) =>{
                        console.log('itm.nm:', itm.nm);
                        console.log('categoryId:', categoryId);
                        console.log('subcategoryId:', subcategoryId);
                        console.log('Checked Condition:', 
                          (item.title === "Gender" && itm.nm === categoryId) ||
                          (item.title === "Categories" && itm.nm === subcategoryId)
                        );
                        
                    
                    return (
                      
  <Controls.Grid item sx={{ display: "flex" }}key={`${item.title}-${indx}`}>
    <Controls.Checkbox
      {...label}
      checked={
        (item.title === "Gender" && 
          itm.nm.trim().toLowerCase() === 
            decodeURIComponent(categoryId).trim().toLowerCase()) ||
        (item.title === "Categories" && 
          itm.nm.trim().toLowerCase() === 
            decodeURIComponent(subcategoryId).trim().toLowerCase())
      }
      onChange={() => handleCheckboxChange(itm.nm, item.title)}
    />
    <Controls.Typography variant="caption" sx={{ marginTop: 1.5, fontSize: "12px", }}>
      {itm.nm} ({itm.count})
    </Controls.Typography>
  </Controls.Grid>
)
                    }
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
        sx={{ display: {xs:"none",sm:"flex"}, alignItems: "center", cursor: "pointer", justifyContent: "space-between" }}p={2}
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
              sx={{ fontSize: "10px", color: "#176d93", cursor: "pointer",marginTop:.10 ,}}
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
      <Controls.Divider sx={{display:{xs:"none",sm:"block"}}}/>
    </>
  ))}
              
               </Controls.AccordionDetails>
               
            </Controls.Accordion>
            </Controls.Grid>

            <Controls.Grid item sx={{paddingInlineStart:"20px"}}>

            <CategoriesSubAccordainComponent/>

            </Controls.Grid>
           
            </Controls.Grid>
    
    </>
  )
}

export default CategoriesAccordainComponent
