import React from 'react';
import Controls from '../../commons/Controls';
import { useNavigate } from 'react-router-dom';

const BeautyCategoriesComponent = ({closeMenu}) => {
  const navigate = useNavigate()
  const categories = [
    { Beauty: ["Best Sellers", "Trending", "What's New", "Ajio Luxe"] },
    {
      title: "Skin Care",
      items: [
        { name: "Cleanser" },
        { name: "Moisturisers" ,link:"/categories/beauty/Moisturisers" },
        { name: "Serum Sunscreen" },
        { name: "Masks" },
        { name: "Eye Cream" },
        { name: "Lip Balm" },
        { name: "Hand Cream" },
      ],
    },
    
  ];

  const categoriesTwo = [
    {
      title: "Makeup",
      items: [
        { name: "Lipstick"  ,link:"/categories/beauty/lipstick"  },
        { name: "Lip Gloss" },
        { name: "Lip Liner" },
        { name: "Lip Balm" },
        { name: "Nail Care" },
        { name: "Mascara" ,link:"/categories/beauty/Mascara"  },
        { name: "Eyeliner & Kajals" },
        { name: "Foundation" },
        { name: "Concealer" },
      ],
    },
    {
      title: "Hair Care",
      items: [
        { name: "Shampoo" },
        { name: "Conditioner" },
        { name: "Hair Oil" },
        { name: "Hair Color & Styling" },
      ],
    },
   
  ];

  const categoriesThree = [
    {
      title: "Fragrances",
      items: [
        { name: "Perfumes" ,link:"/categories/beauty/perfumes" },
        { name: "Deodorants" },
        { name: "Body Mist" },
      ],
    },
    {
      title: "Bath & Body",
      items: [
        { name: "Face Wash"  ,link:"/categories/beauty/facewash" },
        { name: "Body Wash" },
        { name: "Body Scrub" },
      ],
    },
    {
      title: "Men Grooming",
      items: [
        { name: "Shaving Essentials" },
        { name: "Beard Essentials" },
        { name: "Hair Wax" },
        { name: "Deodorants" },
      ],
    },
    { Beauty: ["Appliances", "Baby Care"] },
  ];

  const categoriesFour = [
    {
      title: "FEATURED BRANDS",
      items: [
        { name: "Lakme" },
        { name: "Maybelline" },
        { name: "Beardo" },
        { name: "Loreal Paris" },
        { name: "Mcaffeine" },
        { name: "Mamaearth" },
        { name: "Plum" },
        { name: "MAC" },
        { name: "PAC" },
        { name: "Lotus" },
        { name: "Adidas Kids" },
        { name: "Forest Essentials" },
      ],
    },
  ];
  const handleCategories = (item) => {
    console.log("item",item)
    navigate(`${item}`)
    closeMenu()
  }

  return (
    <Controls.Grid container>
       <Controls.Grid item xs={12} p={3} sx={{ display: "flex", }}>
      {[categories, categoriesTwo, categoriesThree, categoriesFour].map(
        (categoryGroup, groupIndex) => (
          <Controls.Grid item xs={3} key={groupIndex}>
            {categoryGroup.map((category, index) => (
              <Controls.Grid item xs={12} key={index} mb={2}>
              
                {category.Beauty &&
                  category.Beauty.map((item, idx) => (
                    <Controls.Typography
                      key={`beauty-${groupIndex}-${index}-${idx}`}
                      sx={{
                        mb: 0.5,
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                      // onClick={handleCategories}
                    >
                      {item}
                    </Controls.Typography>
                  ))}

              
                {category.title && (
                  <Controls.Typography
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    {category.title}
                  </Controls.Typography>
                )}

             
                {category.items &&
                  category.items.map((item, idx) => (
                    <Controls.Typography
                      key={`item-${groupIndex}-${index}-${idx}`}
                      sx={{
                        mb: 0.5,
                        fontSize: "13px",
                        cursor: "pointer",
                        "&:hover": { textDecoration: "underline" },
                      }}
                      onClick={() => {
                        handleCategories(item.link)
                        // navigate(item.link); // Navigate to the link
                        // closeMenu();         // Close the menu
                      }}
                          
                       
                    >
                      {item.name}
                    </Controls.Typography>
                  ))}
              </Controls.Grid>
            ))}
          </Controls.Grid>
        )
      )}
      </Controls.Grid>
    </Controls.Grid>
  );
};

export default BeautyCategoriesComponent;
