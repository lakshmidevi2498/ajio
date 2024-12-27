import React, { useState ,useRef} from "react";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";

const categories = {
  men: ["Shirts", "Trousers", "Shoes", "Accessories"],
  women: ["Dresses", "Tops", "Footwear", "Jewelry"],
  kids: ["T-Shirts", "Shorts", "Toys", "School Supplies"],
  sale: ["Up to 50% Off", "Buy 1 Get 1", "Flash Sale"],
};

const NavbarWithHoverMenu = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const menuRef = useRef(null);

  const handleCategoryClick = (categoryKey) => {
    setActiveCategory((prevCategory) => 
      prevCategory === categoryKey ? null : categoryKey
    );  
  };

  const handleMouseEnter = (categoryKey) => {
    setActiveCategory(categoryKey);  
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);  
  };

  return (
    <>
 <AppBar position="static">
        <Toolbar>
          {Object.keys(categories).map((key) => (
            <Button
              key={key}
              onClick={() => handleCategoryClick(key)}
              sx={{
                color: "white",
                textTransform: "capitalize",
                padding: "10px",
              }}
            >
              {key}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      <div ref={menuRef}>
        {activeCategory && (
          <Box
            sx={{
              padding: 2,
              marginTop: 1,
              backgroundColor: "#f1f1f1",
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              {`${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Categories`}
            </Typography>
            {categories[activeCategory].map((item, index) => (
              <Typography key={index} variant="body1" sx={{ marginBottom: 1 }}>
                {item}
              </Typography>
            ))}
          </Box>
        )}
      </div>
    </>
  );
};

export default NavbarWithHoverMenu;
