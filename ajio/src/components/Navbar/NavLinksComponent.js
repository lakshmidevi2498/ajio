import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import Controls from "../../commons/Controls";
import theme from "../../utilities/theme";
import MenCategoriesComponent from "./MenCategoriesComponent";
import WomenCategoriesComponent from "./WomenCategoriesComponent";
import HomeCategoriesComponent from './HomeCategoriesComponent'
import KidsCategoriesComponent from './KidsCategoriesComponent'
import BeautyCategoriesComponent from './BeautyCategoriesComponent'

const NavLinksComponent = () => {
  const [activeLink, setActiveLink] = useState("HOME");
  const [menuOpenFor, setMenuOpenFor] = useState(null);  
  const isMobile = useMediaQuery("(max-width: 600px)");

  const links = [
    { name: "MEN", href: "/categories" },
    { name: "WOMEN", href: "/categories" },
    { name: "KIDS", href: "/categories" },
    { name: "BEAUTY", href: "/categories" },
    { name: "HOME & KITCHEN", href: "/categories" },
  ];

  const handleLinkClick = (link, e) => {
    e.preventDefault();  
    setActiveLink(link);
    console.log("lactiveLink",link)
    setMenuOpenFor(menuOpenFor === link ? null : link);  
  };

  const closeMenu = () => {
    setMenuOpenFor(null);
  };

  return (
    <Controls.Box>
      <Controls.Grid container justifyContent="center" sx={{ position: "relative", }}>
        <Controls.Grid item xs={12}>
          {isMobile ? (
            <Controls.Grid item>
              <Controls.IconButton
                edge="start"
                aria-label="menu"
                sx={{ color: "black" }}
              >
                <Controls.MenuIcon />
              </Controls.IconButton>
            </Controls.Grid>
          ) : (
            <Controls.Grid item >
              <Controls.Box sx={{ display: "flex", gap: { xs: 3, sm: 1.6, md: 1.6, lg: 4 ,xl:8} }}>
                {links.map((link) => (
                  <NavLink
                  key={link.name}
                  to={link.href}
                  style={{ 
                    color: theme.palette.one.bag,
                    textDecoration: "none",
                    cursor: "pointer",
                    fontFamily: "SouceSansPro",
                    fontWeight: activeLink ? "bold" : "normal",
                  }}
                  onClick={(e) => handleLinkClick(link.name, e)}
                >
                  <Controls.Box
                    sx={{
                      fontSize: { xs: "7px", sm: "11px",md:"12px", lg: "15px" ,xl:"20px"}, 
                    }}
                  >
                    {link.name}
                  </Controls.Box>
                </NavLink>
                ))}
              </Controls.Box>
            </Controls.Grid>
          )}
        </Controls.Grid>
      </Controls.Grid>

   
      {menuOpenFor && (
        <Controls.Box
          sx={{
            position: "absolute",
            top: "100%",  
            left: 0,  
            right: 0,  
            padding: 2,
            backgroundColor: "#f1f1f1", 
            width: {xs:"100%",sm:"90%",md:"85%",lg:"82%",xxl:"85%"} ,
            margin: "0 auto",  
          }}
        >
           <Controls.Grid item gap={2} sx={{display:"flex"}}>
                        <Controls.Grid item p={1}>
                          <Controls.Typography variant="caption1" sx={{color:"#d9d7d7"}}>Shop By :</Controls.Typography>
                          </Controls.Grid>
                          <Controls.Grid item p={1} sx={{backgroundColor:"#d9d7d7",fontWeight:"bold"}}>
                          <Controls.Typography variant="caption1" >CATEGORIES</Controls.Typography>
                          </Controls.Grid>
                          <Controls.Grid item p={1} sx={{backgroundColor:"#d9d7d7"}}>
                          <Controls.Typography variant="caption1" >BRANDS</Controls.Typography>
                          </Controls.Grid> 
                        </Controls.Grid>
          <Controls.Box sx={{ display: "flex", flexDirection: "column", gap: 1 ,textAlign:"start"}}>
            {menuOpenFor === "MEN" && <MenCategoriesComponent  closeMenu={closeMenu}/>}
            {menuOpenFor === "WOMEN" && <WomenCategoriesComponent  closeMenu={closeMenu}/>}
            {menuOpenFor === "KIDS" && <KidsCategoriesComponent  closeMenu={closeMenu}/>}
            {menuOpenFor === "BEAUTY" && <BeautyCategoriesComponent  closeMenu={closeMenu}/>}
            {menuOpenFor === "HOME & KITCHEN" && <HomeCategoriesComponent  closeMenu={closeMenu}/>}
          </Controls.Box>
        </Controls.Box>
      )}
    </Controls.Box>
  );
};

export default NavLinksComponent;
