import API from "../../API/API";
const api = new API();
const endPoints = "cart";
export const postCartApi = async (userId,productId,size) => {
  return new Promise(async (resolve, reject) => {
    try {

      const response = await api.post(`${endPoints}/${userId}/${productId}`,{
        size 
      });

      resolve(response);
   
    } catch (error) {
      console.error("Error in postCartApi:", error);
      reject(error);
    }
  });
};
