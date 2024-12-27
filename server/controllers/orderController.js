import orderSchema from '../models/orderModel.js'
import Cart from '../models/cartModel.js'
import mongoose from 'mongoose'
import cartModel from '../models/cartModel.js'; 

export const deleteOrderController  = async (req,res) => {
    const {id} = req.params
    const {price,bagTotal,bagDiscount,orderTotal,addressId,paymentDetails}  =req.body
    console.log("req.params",req.params ,req.body)
    try {
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid or missing order ID' });
          }
      
          
          const orderToUpdate = await Cart.findByIdAndUpdate((id),
         
            { orderStatus: 'success' },
            { new: true }
      );
     console.log("orderToUpdate",orderToUpdate)
      
          if (!orderToUpdate) {
            return res.status(404).json({ message: 'Order not found in user checkout' });
          }
      
          
          // let orders = await ordersSchema.findOne({ users: orderToUpdate.users });
      
          // if (!orders) {
             
            let order = new orderSchema({
              user: orderToUpdate.user,
            //   items:item,
              totalAmount:price,
              bagTotal:bagTotal,
              bagDiscount:bagDiscount,
              orderTotal:orderTotal,
            //   products: [orderToUpdate.products || []],   
            cart: orderToUpdate._id,
              paymentStatus:"completed",
              shippingStatus:"Confirmed",
              address:addressId,
              paymentDetails: {
                paymentId: paymentDetails.paymentId,
                orderId: paymentDetails.orderId,
            },

              orderDate: new Date(),
            });
          // } 
         
          await order.save();
          console.log("orders", order);
      
          res.status(200).json({ message: 'Order Place successfully!!', order: order });
    } catch (error) {
        console.log("error",error)
        res.status(500).json({message:"Internal server error",error})
    }
}


export const getOrderController = async (req, res) => {
    try {
      const { userId } = req.params;
      console.log("req.params", req.params);
  
      if (!userId) {
        return res.json({ message: "userId is required" });
      }
  
      
      const orders = await orderSchema.find({ user: userId });
      console.log("orders", orders);
  
      if (!orders || orders.length === 0) {
        return res.json({ message: "You don't have any orders yet" });
      }
  
      
      const orderDetails = await Promise.all(
        orders.map(item =>
          item.populate([
            { path: 'user' }, 
            { 
              path: 'cart', 
              populate: {
                path: 'products.product', 
              }
            },
            { path: 'address' } 
          ])
        )
      );
      
  
      res.status(200).json({
        // message: "Order history fetched successfully",
        orderDetails,
      });
  
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ message: "server error", error });
    }
  };
  
  export const updateOrderController = async (req, res) => {
    try {
      const { orderedStatus, selectedReason, productShippingStatus, cartId, productId,productOrderedStatus } = req.body;
      console.log("req.body updateordersController", req.body);
  
      const updated = await cartModel.findByIdAndUpdate(cartId);
      console.log("updated", updated);
  
      if (!updated) {
        return res.status(404).json({ message: "Order not found" });
      }
  
      // Find the product to cancel
      const cancelledProduct = updated.products.find((item) => item._id.equals(productId));
      console.log("cancelledProduct", cancelledProduct);
  
      if (!cancelledProduct) {
        return res.status(404).json({ message: "Product not found in the order" });
      }
  
      if (orderedStatus === "Cancelled") {
        // Update the specific product in the array
        cancelledProduct.productCancelledDate = new Date();
        cancelledProduct.productCancelledReason = selectedReason;
        cancelledProduct.productShippingStatus = productShippingStatus;
        cancelledProduct.productOrderedStatus =productOrderedStatus
      }
  
      await updated.save();
  
      res.status(200).json({ message: "Your order was cancelled successfully", updated });
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ message: "Server error", error });
    }
  };
  