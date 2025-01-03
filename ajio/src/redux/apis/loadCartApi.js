import API from "../../API/API";
const api = new API();
const endPoints = "cart";
export const loadCartApi = async (token, userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("this is post call in API---->",endPoints);
      const response = await api.get(`${endPoints}/${userId}`,{
        headers:{
          authorization:`Bearer ${token}`,
        }
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
