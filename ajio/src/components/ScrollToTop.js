import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material"; 
import Controls from "../commons/Controls";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <Fab
          color="disable"
          size="small" 
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: "4.5rem",
            right: "2rem",
            zIndex: 1000,
            padding:3,
            display:{xs:"none",sm:"flex"}
          }}
        >
          <Controls.KeyboardArrowUpIcon  sx={{fontSize:"60px",fontWeight:"bold",}}/>
        </Fab>
      )}
    </>
  );
};

export default ScrollToTop;
