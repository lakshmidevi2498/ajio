import React from 'react'
import Controls from '../commons/Controls'
import SimilarProductsComponent from './SimilarProductsComponent'

const ShopMoreProducts = ({innerproductsdata}) => {
    console.log("innerproductsdata in ShopMoreProducts",innerproductsdata)
  return (
    <>
    <Controls.Grid container justifyContent="center" mt={5} mb={7} >
  <Controls.Grid
    item
    xs={11}
    sm={10}
    md={10} lg={10}
    sx={{
      justifyContent: "center",
      marginX: "auto",
      textAlign: "center",
      
    }}
  >
    <Controls.Grid
      item
      xs={12}
      sx={{
        justifyContent: "center",
        marginX: "auto", 
        textAlign: "center",
        display:{xs:"none",sm:"block"}
      }}mt={5}
    >
      <Controls.Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginX: "auto",
          textAlign: "center",
        }}
      >
   
        <Controls.Divider
          orientation="horizontal"
          sx={{
            flexGrow: 1,
            height: "2px", 
          }}
        />

     
        <Controls.Typography
          variant="caption1"
          sx={{
            marginX: 2, 
            textAlign: "center",
            fontWeight:"bold",color:"#585858",
            fontSize:"18px",
            fontFamily:"lora"
          }}
        >
          Shop More {innerproductsdata?.subcatergory}
        </Controls.Typography>

     
        <Controls.Divider
          orientation="horizontal"
          sx={{
            flexGrow: 1,
            height: "2px", 
          }}
        />
      </Controls.Grid>

      <Controls.Grid item sm={12} md={10}lg={8} sx={{display:"flex",justifyContent:"space-between",marginX:"auto",}} gap={1} mt={5}mb={8}>
           <Controls.Grid item xs={4} sx={{backgroundColor:"#f8f8f8",}}p={2} >
            <Controls.Grid item xs={12} sx={{display:"flex",justifyContent:"center",}} gap={1} my="auto">
              <Controls.Typography variant='caption1' sx={{color:"#307597",}}>All {innerproductsdata?.subcatergory}</Controls.Typography>
              <Controls.ChevronRight sx={{color:"gray"}}/>
            </Controls.Grid>
            </Controls.Grid>
            <Controls.Grid item xs={4} sx={{backgroundColor:"#f8f8f8",}}p={2}>
            <Controls.Grid item xs={12} sx={{display:"flex",justifyContent:"center"}} gap={1} my="auto">
              <Controls.Typography variant='caption1' sx={{color:"#307597"}}>Style : Straight</Controls.Typography>
              <Controls.ChevronRight sx={{color:"gray"}}/>
            </Controls.Grid>
            </Controls.Grid>
            <Controls.Grid item xs={4} sx={{backgroundColor:"#f8f8f8",}}p={2}>
            <Controls.Grid item xs={12} sx={{display:"flex",justifyContent:"center"}} gap={1} my="auto">
              <Controls.Typography variant='caption1' sx={{color:"#307597"}}>Brand: {innerproductsdata?.brandname}</Controls.Typography>
              <Controls.ChevronRight sx={{color:"gray"}}/>
            </Controls.Grid>
            </Controls.Grid>
           
      </Controls.Grid>

 

    </Controls.Grid>

    <Controls.Grid item >
      <Controls.Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginX: "auto",
          textAlign: "center",
        }}
      >
   
        <Controls.Divider
          orientation="horizontal"
          sx={{
            flexGrow: 1,
            height: "2px", 
          }}
        />

     
        <Controls.Typography
          variant="caption1"
          sx={{
            marginX: 2, 
            textAlign: "center",
            fontWeight:"bold",
            color:"#585858",
            fontSize:"18px",
            fontFamily:"lora"
          }}
        >
          Similar Styles
        </Controls.Typography>

     
        <Controls.Divider
          orientation="horizontal"
          sx={{
            flexGrow: 1,
            height: "2px", 
          }}
        />
      </Controls.Grid>

      <SimilarProductsComponent  innerproductsdata={innerproductsdata}/>
      </Controls.Grid>
  </Controls.Grid>
</Controls.Grid>

    </>
  )
}

export default ShopMoreProducts