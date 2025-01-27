import API from "../../API/API";
const api = new API();
const endPoints = "cart";
export const deleteCartApi = async (userId,productId ) => {
  return new Promise(async (resolve, reject) => {
    try {
  
      const response = await api.delete(`${endPoints}/${userId}/${productId}`);

      resolve(response);
   
    } catch (error) {
      console.error("Error in deleteCartApi:", error);
      reject(error);
    }
  });
};
