import API from "../../API/API";
const api = new API();
const endPoints = "wishlist";
export const postWishlistApi = async (userId,productId) => {
  return new Promise(async (resolve, reject) => {
    try {
 
      const response = await api.post(`${endPoints}/${userId}/${productId}`);

      resolve(response);
   
    } catch (error) {
      console.error("Error in postWishlistApi:", error);
      reject(error);
    }
  });
};
