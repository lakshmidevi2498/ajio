import API from "../../API/API";
const api = new API();
const endPoints = "cart";
export const updateCartApi = async (userId,id,size,qty) => {
  return new Promise(async (resolve, reject) => {
    try {
  
      const response = await api.put(`${endPoints}/${userId}`, {
        id,size,qty
      });
      resolve(response);
   
    } catch (error) {
      console.error("Error in loadCartApi:", error);
      reject(error);
    }
  });
};
