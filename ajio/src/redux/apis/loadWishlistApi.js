import API from "../../API/API";
const api = new API();
const endPoints = "wishlist";
export const loadWishlistApi = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
  
      const response = await api.get(`${endPoints}/${userId}`
      );
      resolve(response);
   
    } catch (error) {
      console.error("Error in loadCartApi:", error);
      reject(error);
    }
  });
};
