import API from "../../API/API";
const api = new API();
const endPoints = "order";
export const deleteOrderApi = async (id,price,bagTotal,bagDiscount,orderTotal,addressId,paymentDetails) => {
  return new Promise(async (resolve, reject) => {
    try {

      const response = await api.delete(`${endPoints}/${id}`,{price ,bagTotal,bagDiscount,orderTotal,addressId,paymentDetails});
      resolve(response);
   
    } catch (error) {
      console.error("Error in deleteOrderApi:", error);
      reject(error);
    }
  });
};
