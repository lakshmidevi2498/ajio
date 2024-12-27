import API from "../../API/API";
const api = new API();
const endPoints = "cart";
export const postCartApi = async (userId,productId,size) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("this is post call in API---->",endPoints);
      const response = await api.post(`${endPoints}/${userId}/${productId}`,{
        size 
      });
      console.log("fetched user in postCartApi", response);
      console.log("fetched user in postCartApi", response.data);
      resolve(response);
   
    } catch (error) {
      console.error("Error in postCartApi:", error);
      reject(error);
    }
  });
};
