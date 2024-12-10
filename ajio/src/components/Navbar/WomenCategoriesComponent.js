import React from 'react'
import Controls from '../../commons/Controls'
import { useNavigate } from 'react-router-dom';

const WomenCategoriesComponent = ({closeMenu}) => {
    const navigate=useNavigate()
  const categories = [
    {
        womenOne : ["CLOTHING ",
        "FOOTWEAR ",
        "ACCESSORIES ",
        "ALL THAT NEW ","CURVE SIZE","AJIO GLOBAL","NIGHT & LONGUE WEAR","BEAUTY","AUTHLEISURE","FUSION WEAR"] ,
         womenTwo : 
            ["Dress & Gowns" ,
            "Kurtas " ,
            "Kurtis & Tunics", 
            "Pants & Shorts" , "Jackets & shrugs","Shirts,Tops & Tunics"],
            }
    
];
const categoriesTwo = [
    {
        title: "ETHNIC WEAR",
        items: [
           { name: "Kurtas ",link:"/categories/women/kurtas"  },
            { name: "Dress materials" },
            { name: "Slawars & churidars" },
            {name:"Kurtis & Tunics"},
            {name:"Sarees "},
            {name:"Dupattas"},
            {name:"Kurta suits sets"},
            {name:"Blouses"}, 
            {name:"Leggings"}, 
            {name:"Skirts& Gahgras"}, 
            {name:"Shwals& Wraps"}, 
            {name:"Palazzos &Culottes"}, 
            

        ],
       
    },
    {
      title: "  JEWELLERY",
      items: [
          { name: "Gold and Silver Coins" },
          { name: "Gold and Diamond Jewellery" },
          { name: "Silver Jewellery" },
          { name: "Fashion Jewellery",link:'/categories/women/fashion jewellery' },
      ],
  },
   
]
   const categoriesThree = [ 
   
   
    {
        title: " LINGERIE & INNER WEAR",
        items: [
            { name: "Bras" },
            { name: "Panties " },
            { name: "Camisoles & Slips" },
            {name:"Maternity wear"},
             { name:"thermal wear"}
            
        ],
    },
    {
      title: " ACCESSORIES",
      items: [
          { name: "Sunglasses & Frames",link:'/categories/women/Sunglasses' },
          { name: "Watches" },
          { name: "Bag ,Belts & Wallets" },
          { name: "Stoles & Scraves" },
          { name: "Socks & Stocking" },
          { name: "Caps" },
          { name: "Luggage & Trolleys" },
          { name: "Sunglasses & Frames",link:'/categories/women/Sunglasses' },
          { name: "watches" },

      ],
  },
  {
    title: " FESTIVE EDITS",
    items: [
        { name: "Kerala Sarees" ,link:'/categories/women/Kerala Sarees'},
        { name: "Diwali Dresses" },
        { name: "Diwali Sarees" }, 
    ]
},
]

   const categoriesFour = [
     {
    title: "FOOTWEAR",
    items: [
        { name: "Casual Shoes" },
        { name: "Flat Sandals" },
        { name: "Sports Shoes" },
        { name: "Flip Flop & Slippers " },
        { name: "Heeled Sandals " ,link:"/categories/women/Heeled Sandals"},
        { name: "Heeled Shoes" },
        { name: "Boots " },
        { name: "Woodland " },
    ],
},
    
    {
      title: " WESTERN WERA ",
      items: [
          { name: "Tops " },
          { name: "T-shirts " },
          { name: "Jeans & Jeggings " }, 
          { name: "Dresses " },
          { name: "Trousers & Pants " },
          { name: "Shirts " },
          { name: "Track Pants " },
          { name: "Skirts & Shorts " },
          { name: "Jackets & Coats " },
          { name: "Jumpsuits & Playsuits " },
          { name: "Shrugs & Boleros " },
          { name: "Sweatshirts & Hoodies " }, 
      ]
  },
]
  return (
    <>
     <Controls.Grid container >
            <Controls.Grid item xs={12} p={3} sx={{display:"flex",}}>
            <Controls.Grid item xs={3}  sx={{}}>
        {categories.map((category, index) => (
            <>
            <Controls.Grid item xs={12} sx={{}}>
            <Controls.Grid item xs={12} key={index}>
                <Controls.Typography sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Controls.Typography>
                {category.womenOne.map((item, idx) => (
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
                            fontWeight:'bold',
                            cursor: item ? "pointer" : "default",
                            
                        }}
                    >
                        {item}
                    </Controls.Typography>
                ))}
            </Controls.Grid>
            <Controls.Grid item xs={12} key={index}>
            <Controls.Typography sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Controls.Typography>
            {category.womenTwo.map((item, idx) => (
                <Controls.Typography
                    key={idx}
                    // onClick={() => item.link 
                        // && navigate(item.link)
                    // }
                    sx={{
                        mb: 0.5,
                        fontSize:"13px",
                        fontWeight:'normal',
                        cursor: item ? "pointer" : "default",
                        '&:hover': item ? { textDecoration:"underline" } : {},
                    }}
                >
                    {item}
                </Controls.Typography>
            ))}
        </Controls.Grid>
        </Controls.Grid>
        </>
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
                                    fontSize:"13px",
                                    cursor: item.link ? "pointer" : "default",
                                   '&:hover': item ? { textDecoration:"underline" } : {},
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
                                    fontSize:"13px",
                                    cursor: item.link ? "pointer" : "default",
                                   '&:hover': item ? { textDecoration:"underline" } : {},
                                }}
                            >
                                {item.name}
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
                                    fontSize:"13px",
                                    cursor: item.link ? "pointer" : "default",
                                    '&:hover': item ? { textDecoration:"underline" } : {},
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

export default WomenCategoriesComponent