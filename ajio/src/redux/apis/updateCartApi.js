import API from "../../API/API";
const api = new API();
const endPoints = "cart";
export const updateCartApi = async (userId,id,size,qty) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("this is post call in API---->",endPoints);
      const response = await api.put(`${endPoints}/${userId}`, {
        id,size,qty
      });
      console.log("fetched user in loadCartApi", response);
      console.log("fetched user in loadCartApi", response.data);
      resolve(response);
   
    } catch (error) {
      console.error("Error in loadCartApi:", error);
      reject(error);
    }
  });
};
