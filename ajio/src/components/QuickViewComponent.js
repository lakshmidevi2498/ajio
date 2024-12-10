import React, { useState, useEffect } from "react";
import { Fab, Box, Modal, Typography, Grid, Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Controls from "../commons/Controls";
import ReusableSwiperComponent from "./ReusableSwiperComponent";
import QuickviewSwiperComponent from "./QuickviewSwiperComponent";
import ProductsDetailsComponent from "./ProductsDetailsComponent";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%", 
  maxWidth: {md:"800px",lg:"1000px",xxl:"1200px"}, 
  height: "90vh", 
  maxHeight: "90vh", 
  bgcolor: "background.paper",
  border: "2px solid lightgray",
  boxShadow: 24,
  p: 4,
  overflowY: "auto", 
};

const QuickViewComponent = ({ cnt, open, setOpen, handleClose ,innerData}) => {
 


  console.log("cnt", cnt,innerData)


  const icons = [
    "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path fill='currentColor' fill-rule='evenodd' d='M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z' clip-rule='evenodd'/></svg>",
    "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path fill='currentColor' d='M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23'/></svg>",
    "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='-4.5 -2 24 24'><path fill='currentColor' d='M6.17 13.097c-.506 2.726-1.122 5.34-2.95 6.705c-.563-4.12.829-7.215 1.475-10.5c-1.102-1.91.133-5.755 2.457-4.808c2.86 1.166-2.477 7.102 1.106 7.844c3.741.774 5.269-6.683 2.949-9.109C7.855-.272 1.45 3.15 2.238 8.163c.192 1.226 1.421 1.598.491 3.29C.584 10.962-.056 9.22.027 6.897C.159 3.097 3.344.435 6.538.067c4.04-.466 7.831 1.527 8.354 5.44c.59 4.416-1.823 9.2-6.142 8.855c-1.171-.093-1.663-.69-2.58-1.265'/></svg>",
    "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill='currentColor' d='M1.989 5.589c0 1.494.499 2.572 1.482 3.205c.806.52 1.74.598 2.226.598q.179-.002.279-.01s-.154 1.004.59 1.996h-.034c-1.289 0-5.493.269-5.493 3.727c0 3.516 3.861 3.695 4.636 3.695c.061 0 .097-.002.097-.002l.158.002c.497 0 1.782-.062 2.975-.643c1.548-.75 2.333-2.059 2.333-3.885c0-1.764-1.196-2.814-2.069-3.582c-.533-.469-.994-.873-.994-1.266c0-.4.337-.701.762-1.082c.689-.615 1.339-1.492 1.339-3.15c0-1.457-.189-2.436-1.354-3.057c.121-.062.551-.107.763-.137c.631-.086 1.554-.184 1.554-.699V1.2H6.64c-.046.002-4.651.172-4.651 4.389m7.424 9.013c.088 1.406-1.115 2.443-2.922 2.574c-1.835.135-3.345-.691-3.433-2.096c-.043-.676.254-1.336.835-1.863c.589-.533 1.398-.863 2.278-.928q.156-.01.31-.012c1.699.001 2.849.999 2.932 2.325M8.212 4.626c.451 1.588-.23 3.246-1.316 3.553a1.4 1.4 0 0 1-.384.052c-.994 0-1.979-1.006-2.345-2.393c-.204-.776-.187-1.458.047-2.112c.229-.645.643-1.078 1.163-1.225q.188-.053.385-.053c1.2 0 1.972.498 2.45 2.178M16 8V5h-2v3h-3v2h3v3h2v-3h3V8z'/></svg>",
  ];

  return (
    <>


      <Modal open={open} onClose={handleClose} >
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
          <ProductsDetailsComponent  innerData={innerData}  icons={icons} marginValue={"70px"} heightValue={"500px"} value={'block'} value2={'none'}/>
        </Box>
      </Modal>

    </>
  );
};

export default QuickViewComponent;
