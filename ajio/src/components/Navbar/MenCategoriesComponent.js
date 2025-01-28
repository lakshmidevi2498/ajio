import React from 'react'
import Controls from '../../commons/Controls'
import { useNavigate } from 'react-router-dom';
import MenCategoriesComponentOne from './MenCategoriesComponentOne';

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
          <MenCategoriesComponentOne    handleCategories={handleCategories} categoriesFour={categoriesFour} categoriesThree={categoriesThree}categoriesTwo={categoriesTwo}categories={categories}closeMenu={closeMenu} navigate={navigate}/>
        </Controls.Grid>
    </Controls.Grid>
    </>

  )
}

export default MenCategoriesComponent