import API from "../../API/API";
const api = new API();
const endPoints = "order";
export const loadOrderApi = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
   
      const response = await api.get(`${endPoints}/${userId}`,{
        // headers:{
        //   authorization:`Bearer ${token}`,
        // }
      });
      resolve(response);
   
    } catch (error) {
      console.error("Error in loadOrderApi:", error);
      reject(error);
    }
  });
};
