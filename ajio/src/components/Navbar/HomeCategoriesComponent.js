import React from 'react'
import Controls from '../../commons/Controls'
import { useNavigate } from 'react-router-dom';

const HomeCategoriesComponent = ({closeMenu}) => {
  const categories = [
    {
        kidOne: ["NEW IN: CLOTHING ",
            "NEW IN: FOOTWEAR & ACCS ",
            "INNERWEAR & SLEEPWEAR ",],


    },
    {
        title: "BED LINEN",
        items: [
            { name: "Bedsheets" },
            { name: "Bedding Sets" },
            { name: "Blankets, Dohars & Quilts" },
            { name: "Comforters" },
            { name: "Bed Covers" },
            { name: "Mattress Protectors" },
            { name: "Quilt & Duvet Covers" },
        ],
    },
    {
       
        title: "CUSHIONS & PILLOWS",
        items: [
            { name: "Cushions" ,link:"/categories/Home&Kitchen/cushions"},
            { name: "Pillows" },
            { name: "Bed Wedges & Neck Pillows" },
            { name: "Bolsters" },
            { name: "Cushion Covers" },
            { name: "Pillow Covers" },
           
        ], 
    },

];

const categoriesTwo = [
    {
        title: " CURTAIN & ACCESSORIESHOT",
        items: [
            { name: "Window Curtains" },
            { name: "Door Curtains" }, 

        ],
    },
    {
        title: "KITCHEN",
        items: [
            { name: "Cookware & Cutlery",link:"/categories/Home&Kitchen/cookware" },
            { name: "Bakeware" },
            { name: "Kitchen Tools" },
            { name: "Kitchen Aprons, Gloves & Towel" },
            { name: "Kitchen Organisers" },
        ],
    },
    {
        title: "DINING",
        items: [
            { name: "Serveware & Drinkware" },
            { name: "Table Linen Sets" },
            { name: "Table Covers & Runners" },
            { name: "Table Napkins" },
            { name: "Placemats & Coasters" }
        ],
    },

]

const categoriesThree = [{
    title: " HOME DECORHOT",
    items: [
        { name: "Wall Decor" ,link:"/categories/Home&Kitchen/wall decor"},
        { name: "Wall Shelves" },
        { name: "Clocks" },
        { name: "Photo Frames" },
        { name: "Mirrors" },
        { name: "Lamp, Diyas & Candle" },
        { name: "Home Fragnance" },
        { name: "Plants & Flowers" },
    ],
},
{
    title: "FESTIVE GIFTS",
    items: [
        { name: "Bells & Wind Chimes" },
        { name: "Decorative Pots, Plates & Jars" },
        { name: "Fengshui" },
        { name: "Indoor Fountains" },
        { name: "Religious Idols" },
        {name:"Vases",link:"/categories/Home&Kitchen/vases"}
    ],
},


]
const categoriesFour = [
  {
    title: "BATH",
    items: [
        { name: "Bath Towel & Robes" },
        { name: "Hand & Face Towels" },
        { name: "Towel Sets" },
        { name: "Bath Curtains & Mats" },
        { name: "Bathroom Organisers" },
        { name: "Laundry Baskets & Dryers" },
        { name: "Holders & More" ,link:"/categories/Home&Kitchen/Holders"  }
    ], 
},
{
  title: "FEATURED STORIES",
  items: [
      { name: "GIFT For Everyone Under 999" },
      { name: "Winter Carnival Upto 60" },
      { name: "Kids Room Min 40" },
      { name: "Heritage Of India" },
  ],
},
]
const navigate = useNavigate()
  return (
    <>
    
    <Controls.Grid container >
                <Controls.Grid item xs={12} p={3} sx={{ display: "flex", }}>
                    <Controls.Grid item xs={3} >
                        {categories.map((category, index) => (
                            <Controls.Grid item xs={12} key={index}>

                                <Controls.Typography sx={{ fontWeight: "bold", mb: 1 }}>
                                    {category.title}
                                </Controls.Typography>


                                {category.kidOne && (
                                    <Controls.Grid item xs={12}>
                                        {category.kidOne.map((item, idx) => (
                                            <Controls.Typography
                                                key={idx}
                                                sx={{
                                                    mb: 0.5,
                                                    fontSize: "13px",
                                                    fontWeight: "bold",
                                                    cursor: item ? "pointer" : "default",
                                                }}
                                             
                                            >
                                                {item}
                                            </Controls.Typography>
                                        ))}
                                    </Controls.Grid>
                                )}

                                {category.items && (
                                    <Controls.Grid item xs={12}>
                                        {category.items.map((item, idx) => (
                                            <Controls.Typography
                                                key={idx}
                                                sx={{
                                                    mb: 0.5,
                                                    fontSize: "13px",
                                                    cursor: "pointer",
                                                    '&:hover': item ? { textDecoration: "underline" } : {},
                                                }}
                                                onClick={() => {
                                                    if (item.link) {
                                                      navigate(item.link); 
                                                      closeMenu(); 
                                                    }
                                                  }}
                                            >
                                                {item.name}
                                            </Controls.Typography>
                                        ))}
                                    </Controls.Grid>
                                )}
                            </Controls.Grid>
                        ))}
                    </Controls.Grid>
               

                <Controls.Grid item xs={3} >
                    {categoriesTwo.map((category, index) => (
                        <Controls.Grid item xs={12} key={index} mb={2}>
                            <Controls.Typography sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Controls.Typography>
                            {category.items.map((item, idx) => (
                                <Controls.Typography
                                    key={idx}
                                    onClick={() => {
                                        if (item.link) {
                                          navigate(item.link); 
                                          closeMenu(); 
                                        }
                                      }}
                                    sx={{
                                        mb: 0.5,
                                        fontSize: "13px",
                                        cursor: item.link ? "pointer" : "default",
                                        '&:hover': item ? { textDecoration: "underline" } : {},
                                    }}
                                >
                                    {item.name}
                                </Controls.Typography>
                            ))}
                        </Controls.Grid>
                    ))}
                </Controls.Grid>
                <Controls.Grid item xs={3} >
                    {categoriesThree.map((category, index) => (
                        <Controls.Grid item xs={12} key={index} mb={2}>
                            {/* Title */}
                            {category.title && (
                                <Controls.Typography sx={{ fontWeight: "bold", mb: 1 }}>
                                    {category.title}
                                </Controls.Typography>
                            )}

                            {/* Render items if available */}
                            {category.items &&
                                category.items.map((item, idx) => (
                                    <Controls.Typography
                                        key={`item-${index}-${idx}`}
                                        sx={{
                                            mb: 0.5,
                                            fontSize: "13px",
                                            cursor: "pointer",
                                            "&:hover": { textDecoration: "underline" },
                                        }}
                                        onClick={() => {
                                            if (item.link) {
                                              navigate(item.link); 
                                              closeMenu(); 
                                            }
                                          }}
                                    >
                                        {item.name}
                                    </Controls.Typography>
                                ))}

                         
                            {category.kid &&
                                category.kid.map((item, idx) => (
                                    <Controls.Typography
                                        key={`kid-${index}-${idx}`}
                                        sx={{
                                            mb: 0.5,
                                            fontWeight: "bold",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {item}
                                    </Controls.Typography>
                                ))}
                        </Controls.Grid>
                    ))}

                </Controls.Grid>
                <Controls.Grid item xs={3} >
                    {categoriesFour.map((category, index) => (
                        <Controls.Grid item xs={12} key={index} mb={2}>
                            <Controls.Typography sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Controls.Typography>
                            {category.items.map((item, idx) => (
                                <Controls.Typography
                                    key={idx}
                                    onClick={() => {
                                        if (item.link) {
                                          navigate(item.link); 
                                          closeMenu(); 
                                        }
                                      }}
                                    sx={{
                                        mb: 0.5,
                                        fontSize: "13px",
                                        cursor: item.link ? "pointer" : "default",
                                        '&:hover': item ? { textDecoration: "underline" } : {},
                                    }}
                                >
                                    {item.name}
                                </Controls.Typography>
                            ))}
                        </Controls.Grid>
                    ))}
                </Controls.Grid>
                </Controls.Grid>
            </Controls.Grid>
    </>
  )
}

export default HomeCategoriesComponent