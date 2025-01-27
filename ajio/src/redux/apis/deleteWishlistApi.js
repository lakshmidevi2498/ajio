import API from "../../API/API";
const api = new API();
const endPoints = "wishlist";
export const deleteWishlistApi = async (userId,productId ) => {
  return new Promise(async (resolve, reject) => {
    try {

      const response = await api.delete(`${endPoints}/${userId}/${productId}`
      );
      resolve(response);
   
    } catch (error) {
      console.error("Error in deleteWishlistApi:", error);
      reject(error);
    }
  });
};
