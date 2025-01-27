import React,{useState} from 'react'
import Controls from '../commons/Controls'

const CategoriesSubAccordainComponent = () => {
    const [hoveredTwoIndex, setHoveredTwoIndex] = useState(null);  
    const cont = ["Style Type","sleeve","Pattern","Feature","Sport","Neckline","Character","Collar","shape","Fabric"]
  return (
    <>
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
              sx={{ fontSize: "10px", color: "#176d93", cursor: "pointer",marginTop:.4 }}
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
    </>
  )
}

export default CategoriesSubAccordainComponent