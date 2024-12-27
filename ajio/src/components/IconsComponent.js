import React from 'react';
import Controls from '../commons/Controls'; 

const IconsComponent = ({color}) => {
  const content = [
    { name: 'Easy Exchange', type: 'image' ,image: '/assets/images/Exchange.png' },
    { name: '100% HANDPICKED',type: 'image' ,image: '/assets/images/Hold Heart.png'  },
    { name: 'Assured Quantity', type: 'icon',icon: <Controls.VerifiedTwoToneIcon sx={{ width: "50px", height: "50px" }} /> },
  ];

  return (
    <Controls.Grid container justifyContent="center"  backgroundColor={color}>
      <Controls.Grid item xs={12} md={11} lg={10}sx={{display:"flex",flexDirection: {xs:"column",sm:"row"}, alignItems: "center",}}>
      {content.map((item, index) => (
        <Controls.Grid item xs={12} sm={4} key={index} sx={{ display: "flex", flexDirection: {xs:"column",sm:"row"}, alignItems: "center",marginY:"30px",justifyContent:"center" }}>
        
        <Controls.Box display="flex" alignItems="center" flexDirection="column">
              {item.type === 'icon' ? (
                item.icon 
              ) : (
                <img src={item.image} alt={item.name} style={{ width: "50px", height: "50px" }} />  
              )}
            <Controls.Typography variant="h6" sx={{ textTransform: "uppercase", fontFamily: "poppins", fontWeight: "bold", marginTop: "10px" }}>
              {item.name}
            </Controls.Typography>
          </Controls.Box>
        </Controls.Grid>
      ))}
      </Controls.Grid>
    </Controls.Grid>
  );
};

export default IconsComponent;
