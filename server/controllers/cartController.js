import Cart from '../models/cartModel.js'; 

export const postCartController = async (req, res) => {
    const { userId, productId } = req.params;
    const { size } = req.body;

    console.log("userId, productId, size", userId, productId, size);

    try {
        if (!userId && !productId) {
            res.status(400).json({ message: "userId, productId are required" })
        }
        const cartSize = size || 'S';

        let cart = await Cart.findOne({ user: userId,orderStatus: 'pending' });
  console.log("cart",cart)
        if (cart) {

            const existingProduct = cart.products.find(
                item => item.product.equals(productId) && item.size === cartSize
            );
            
            if (!existingProduct) {
                cart.products.push({ product: productId, size: cartSize, quantity: 1 });
                cart.cartDate = new Date();
                const updatedCart = await cart.save();
                res.status(200).json({ message: 'Product added to cart', cart: updatedCart });
            } else {
                res.status(200).json({ message: 'Product already in the cart', cart });
            }
            
        } else {


            const newCartItem = new Cart({
                user: userId,
                products: [{ product: productId, size: cartSize, quantity: 1 }],
                cartDate: new Date(),
                orderStatus:"pending",
                
            });


            await newCartItem.save();

            res.status(201).json({ message: "Item added to cart successfully.", newCartItem });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error", error });
    }
};

export const getCartController = async (req, res) => {
    const { userId } = req.params;
    console.log("userId", userId)
    try {

        const cartDetails = await Cart.findOne({user:userId,orderStatus:"pending"})
        .populate({
            path: 'products.product',
            model: 'Product' 
        })
        .populate('user')
        res.status(200).json({
            // message:"Your cart details are",
            cartDetails})
    } catch (error) {
        console.log("error", error)
        res.status(500).json({ message: "Internal server error", error })

    }
}

export const updateCartController = async (req, res) => {
    const { userId } = req.params;
    const { id, size, qty } = req.body;
    console.log("request", userId, id, size, qty);

    try {
        
        if (!userId || !id || !size || !qty) {
            return res.status(400).json({ message: "All values are required" });
        }
        // console.log("")

        const updatedCart = await Cart.findOne({ user: userId,orderStatus:"pending" });
        console.log("updatedCart",updatedCart)

        if (!updatedCart) {
            return res.status(404).json({ message: "User not found" });
        }

        const productIndex = updatedCart.products.findIndex(
            item => item.product.equals(id)
        );
        console.log("productIndex",productIndex)

        if (productIndex === -1) {
            return res.status(400).json({ message: "Product not found in cart" });
        }
   
        updatedCart.products[productIndex].size = size; 
        updatedCart.products[productIndex].quantity = parseInt(qty); 

        await updatedCart.save();

        return res.status(200).json({
            // message: "Product updated successfully",
            cart: updatedCart.products[productIndex]
        });

    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: "Internal server error", error });
    }
};





export const deleteCartController = async (req, res) => {
    const { userId, productId } = req.params;
    console.log("req.params", req.params);

    try {
        if (!userId || !productId) {
            return res.status(400).json({ message: "userId and productId are required" });
        }

        const deletedProduct = await Cart.findOne({ user: userId,orderStatus:"pending" });
        console.log("deletedProduct", deletedProduct);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Cart not found" });
        }

 
        if (!deletedProduct.products.some(item => item.product.equals(productId))) {
            return res.status(400).json({ message: "Product not found in cart" });
        }
 
        deletedProduct.products = deletedProduct.products.filter(
            item => !(item.product.equals(productId))
        );
        await deletedProduct.save();
        
        res.status(200).json({ 
            // message: "Product removed from cart",
             cart: deletedProduct });
        
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: "Internal server error", error });
    }
};


