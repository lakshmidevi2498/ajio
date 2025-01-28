import React from 'react'
import Controls from '../../commons/Controls'
import KidsComponentOne from './KidsComponentOne';

const KidsCategoriesComponent = ({closeMenu}) => {
    
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
                <KidsComponentOne      categoriesFour={categoriesFour}categoriesThree={categoriesThree}categoriesTwo={categoriesTwo}categories={categories}closeMenu={closeMenu}/>
            </Controls.Grid>
        </>

    )
}

export default KidsCategoriesComponent