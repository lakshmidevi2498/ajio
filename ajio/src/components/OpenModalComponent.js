import React, { useState, useEffect } from "react";
import { Fab, Box,Modal ,Typography,Grid,Button  } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Controls from "../commons/Controls"; 
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid lightgray",
  boxShadow: 24,
  p: 4,
};

const OpenModalComponent = () => {
  const [showButton, setShowButton] = useState(true);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const content = [
    {
      name: "SHOP MEN",
      image:
        "https://assets.ajio.com/medias/sys_master/images/images/h83/hbd/10412172673054/women-first-pop-up-screen.jpg",
        route:"/categories/men/jackets&jones"
    },
    {
      name: "SHOP WOMEN",
      image:
        "https://assets.ajio.com/medias/sys_master/images/images/h55/h6c/10412175196190/menfirstpopupscreen.jpg",
         route:"/categories/women/kurtas"
    },
    {
      name: "KIDS",
      image:
        "https://assets.ajio.com/medias/sys_master/images/images/h9b/h59/10468934254622/kids-first-pop-up-screen.jpg",
         route:"/categories/kid/Dress&Frocks"
    },
    {
      name: "SHOP SALE",
      image:
        "https://assets.ajio.com/medias/sys_master/images/images/ha3/hd7/13007045623838/Sale-firstview-Tile-may-06-2019.jpg",
         route:"/categories/beauty/lipstick"
    },
  ];

  return (
    <>
      {showButton && (
        <Fab
          color="default"
          size="small"
          onClick={handleOpen}
          sx={{
            position: "fixed",
            bottom: "1rem",
            right: "2rem",
            zIndex: 1000,
            padding: 3,
            display:{xs:"none",sm:"flex"}
          }}
        >
          <MoreHorizIcon sx={{ fontSize: "40px", fontWeight: "bold" }} />
        </Fab>
      )}
      {open && (
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
          <Button
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "black",
              }}
            >
              <Controls.CloseIcon />
            </Button>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center"}}>
              Who do you want to shop for?
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: 2,
                textAlign:"center"
              }}
            >
              {content.map((item, index) => (
                <Grid item xs={12} sm={3} md={3}key={index}>
                  <Typography variant="caption">{item.name}</Typography>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      width: "100%",
                      height: "auto",
                      marginTop: 1,
                      borderRadius: "4px",
                    }}onClick={()=>navigate(item.route)}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default OpenModalComponent;
