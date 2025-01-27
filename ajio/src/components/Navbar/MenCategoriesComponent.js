import React from 'react'
import Controls from '../../commons/Controls'
import { useNavigate } from 'react-router-dom';

const MenCategoriesComponent = ({closeMenu}) => {
    const navigate = useNavigate()
    const categories = [
        {
             menOne : ["CLOTHING ",
            "FOOTWEAR ",
            "ACCESSORIES ",
            "ALL THAT NEW ",] ,
             menTwo : 
                ["Clothing" ,
                "Footwear " ,
                "Accessories", 
                "All that New" , ],
           menThree :  ["AJIO GLOBAL",
                "PLUS SIZE",
                "NIGHT & LONGUEWEAR",
                "GROOMING",
                "ETHNIC & FESTIVE",],
                menFour :[
                "kurtha & shirts",
                 "Nehru Jackets"]
        },
        
    ];
    const categoriesTwo = [
        {
            title: "WESTERN WEAR",
            items: [
               { name: "Jackets & Coats" ,link:"/categories/men/jackets&jones"},
                { name: "Jeans" },
                { name: "Shirts",link:"/categories/men/shirt" },
                {name:"Shorts &3/4th"},
                {name:"Sweaters & Hoodies"},
                {name:"Track pants"},
                {name:"Trousers & Pants"},
                {name:"T-shirt"}, 
            ],
        },
        {
            title: "FOOTWEAR",
            items: [
                { name: "Casual Shoes" ,link:"/categories/men/footwear"},
                { name: "Flip-Flops & Slippers" },
                { name: " Formal Shoes" },
                { name: "Sandals " },
                { name: "Sneakers " },
                { name: "Sports Shoes " },
            ],
        },
    ]
       const categoriesThree = [ 
        {
            title: " ACCESSORIES",
            items: [
                { name: "backPacks" },
                { name: "Bags & Wallets" },
                { name: "Belts" },
                { name: "caps& Hats" },
                { name: "Fashion Accessories" },
                { name: "Luggage & Trolleys" },
                { name: "socks" },
                { name: "Sunglasses & Frames" },
                { name: "watches",link:"/categories/men/watches" },

            ],
        },
        {
            title: " PRECIOUS JEWELLERY",
            items: [
                { name: "Gold and Silver Coins" },
                { name: "Gold and Diamond Jewellery" },
                { name: "Silver Jewellery" },
            ],
        },
        {
            title: " INNER WEAR",
            items: [
                { name: "Briefs" },
                { name: "Trunks & Boxers" },
                { name: "Vests" },
            ],
        },
    ]

       const categoriesFour = [ {
            title: " FEATURED",
            items: [
                { name: "Bags under 1499" },
                { name: "Footwear under 1499" },
                { name: "jeans under 1199" },
                { name: "Shorts &3/4ths under 499" },
            ],
        },
        {
            title: " FESTIVE EDITS",
            items: [
                { name: "Diwali Kurta",link:"/categories/men/festive" },
                { name: "Dhotis" },
                { name: "Readymate Dhotis" },
                { name: "Ramraj Dhotis" },
            ],
        },
    ]

    const handleCategories = () => {
        navigate('/categories')
      }


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
                {category.menOne.map((item, idx) => (
                    <Controls.Typography
                        key={idx} 
                        sx={{
                            mb: 0.5,
                            fontWeight:'bold',
                            cursor: item ? "pointer" : "default",
                            
                        }}
                        onClick={handleCategories}
                    >
                        {item}
                    </Controls.Typography>
                ))}
            </Controls.Grid>
            <Controls.Grid item xs={12} key={index}>
            <Controls.Typography sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Controls.Typography>
            {category.menTwo.map((item, idx) => (
                <Controls.Typography
                    key={idx} 
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
        <Controls.Grid item xs={12} key={index}>
            <Controls.Typography sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Controls.Typography>
            {category.menThree.map((item, idx) => (
                <Controls.Typography
                    key={idx} 
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
            {category.menFour.map((item, idx) => (
                <Controls.Typography
                    key={idx} 
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

export default MenCategoriesComponent