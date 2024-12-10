import productSchema from '../models/productModel.js';
import axios from 'axios'; 


export const addProductController = async( req,res) => {
    try {
        const {categories,subcatergory ,name ,brandname, price, image,quantity ,offerprice,rating,reviews,discountOne,discountTwo,innerimages,getitprice,color,code} = req.body;
        console.log("req.body", req.body);
        
        if (!categories || !subcatergory || !name || !brandname || !image || !price || !quantity  || !innerimages ) {
          console.log('Missing or undefined fields in request body:', req.body);
          return res.status(400).json({ message: 'All fields are required' });
      }
       
    
    const response = await axios.get(image, { responseType: "arraybuffer" });
    const base64Image = `data:${response.headers["content-type"]};base64,${Buffer.from(response.data).toString("base64")}`;


    const base64InnerImages = [];
    for (let i = 0; i < innerimages.length; i++) {
      const innerImageResponse = await axios.get(innerimages[i], { responseType: "arraybuffer" });
      const base64InnerImage = `data:${innerImageResponse.headers["content-type"]};base64,${Buffer.from(innerImageResponse.data).toString("base64")}`;
      base64InnerImages.push(base64InnerImage);
    }

    // const productDetails = new productSchema({
    //   image: base64Image,
    //   categories,
    //   subcategory,
    //   name,
    //   brandname,
    //   price,
    //   quantity,
    //   offerprice,
    //   rating,
    //   reviews,
    //   discount,
       
    //   getitprice,
    //   color,
    //   code,
    // });
       
        const productDetails = new productSchema({ image: base64Image,categories,subcatergory ,name ,brandname, price,quantity ,offerprice,rating,reviews,discountOne,discountTwo,innerimages: base64InnerImages,getitprice,color,code });
        console.log("productDetails",productDetails);
        await productDetails.save();
    
        res.status(201).json({   productDetails });
      } catch (error) {
        console.log("Error in products controller", error);
        res.status(500).json({ message: 'Server error', error: error.message });
      }
}

export const getProductController = async ( req,res) => {
    try {
        const productsData = await productSchema.find(); 
        res.status(200).json(productsData);
      } catch (error) {
        console.log("Error in products controller", error);
        res.status(500).json({  error: error.message });
      }

 } 