import React from 'react'
import Controls from '../../commons/Controls'
import { useNavigate } from 'react-router-dom';

const KidsCategoriesComponent = ({closeMenu}) => {
    const navigate = useNavigate()
    const categories = [
        {
            kidOne: ["NEW IN: CLOTHING ",
                "NEW IN: FOOTWEAR & ACCS ",
                "INNERWEAR & SLEEPWEAR ",],


        },
        {
            title: "BOYS",
            items: [
                { name: "Denims & Trousers" },
                { name: "Joggers & Track Pants" },
                { name: "Outerwear" ,link:"/categories/kid/Outwear"},
                { name: "Shorts & 3/4ths" },
                { name: "T-shirts" },
            ],
        },
        {
            title: "Toys",
            title: "SHOP BY AGE",
            items: [
                { name: "0 to 2 Years" },
                { name: "2 to 5 Years" },
                { name: "5 to 8 Years" },
                { name: "8 to 12 Years " },
                { name: "12 Years and Above " },
            ],
        },

    ];

    const categoriesTwo = [
        {
            title: " FEATURED",
            items: [
                { name: "Denims Under 799" },
                { name: "Shirts Under 599" },
                { name: "T-Shirts Under 399" },

            ],
        },
        {
            title: "GIRLS",
            items: [
                { name: "Dresses & Frocks",link:"/categories/kid/Dress&Frocks"  },
                { name: "Jeans & Jeggings" },
                { name: "LeggingsOuterwear" },
                { name: "Skirts & Shorts" },
                { name: "Tops & T-shirts" },
            ],
        },
        {
            title: "SHOP BY AGE",
            items: [
                { name: "0 to 2 Years" },
                { name: "2 to 5 Years" },
                { name: "5 to 8 Years" },
                { name: "8 to 12 Years" },
                { name: "12 Years and Above" }
            ],
        },
    ]

    const categoriesThree = [{
        title: " FEATURED",
        items: [
            { name: "Dresses Under 499" },
            { name: "Tops Under 399" ,link:"/categories/kid/Tops" },
        ],
    },
    {
        title: "BABY",
        items: [
            { name: "Sets" },
        ],
    },
    {
        title: "TOYS AND BABYCARE",
        items: [
            { name: "Action-Figurine & Collectibles" },
            { name: "Creative & Educational Toys" },
            { name: "Gaming, Robots & Vehicles" ,link:"/categories/kid/Gaming"  },
            { name: "Infants Toys" },
            { name: "Role & Pretend PlaySchool" },
            { name: "School Supplies & BooksSoft ,Toys" ,link:"/categories/kid/School Supplies"},
            { name: "Toy-Guns & Accessories" }
        ],
    },
    {
        kid:
            ["COLLECTIONS",
                "AJIO EXCLUSIVES ",
                "FOOTWEAR & ACCESSORIES",],
    },

    ]
    const categoriesFour = [
        {
            title: "FEATURED BRANDS",
            items: [
                { name: "Crocs" },
                { name: "MINI KLUB" },
                { name: "Gini & Jony" },
                { name: "HamleysMothercare" },
                { name: "Marks & Spencer" },
                { name: "Pepe Jeans" },
                { name: "Peppermint" },
                { name: "UCB Kids" },
                { name: "U.S.P.A Kids" },
                { name: "MILA BABY" },
                { name: "Adidas Kids" },
                { name: "Lee Cooper" },

            ],
        },
        {
            title: "Festive Edits",
            items: [
                { name: "Girls Diwali Dress" },
                { name: "Boys Diwali Dress" },
            ],
        },
    ]


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
                                                    fontSize:"13px",
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

                            {/* Render kid if available */}
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
                                    // onClick={() => item.link && navigate(item.link)}
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

export default KidsCategoriesComponent