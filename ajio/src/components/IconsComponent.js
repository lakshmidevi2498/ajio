import React from 'react';
import Controls from '../commons/Controls';
import { Icon } from '@iconify/react';

const IconsComponent = ({color}) => {
  const content = [
    { name: 'Easy Exchange', icon: <Icon icon="hugeicons:exchange-01" width="60px" height="60px" /> },
    { name: '100% HANDPICKED', icon: <Controls.VolunteerActivismIcon sx={{ width: "60px", height: "60px" }} /> },
    { name: 'Assured Quantity', icon: <Controls.VerifiedTwoToneIcon sx={{ width: "60px", height: "60px" }} /> },
  ];

  return (
    <Controls.Grid container justifyContent="center"  >
      <Controls.Grid item xs={12} sx={{display:"flex",flexDirection: {xs:"column",sm:"row"}, alignItems: "center",backgroundColor:color}}>
      {content.map((item, index) => (
        <Controls.Grid item xs={12} sm={4} key={index} sx={{ display: "flex", flexDirection: {xs:"column",sm:"row"}, alignItems: "center",marginY:"30px",justifyContent:"center" }}>
        
          <Controls.Box display="flex" alignItems="center" flexDirection="column" >
            {item.icon}
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
