import API from "../../API/API";
const api = new API();
const endPoints = "order";
export const loadOrderApi = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("this is post call in API---->",endPoints);
      const response = await api.get(`${endPoints}/${userId}`,{
        // headers:{
        //   authorization:`Bearer ${token}`,
        // }
      });
      console.log("fetched user in loadOrderApi", response);
      console.log("fetched user in loadOrderApi", response.data);
      resolve(response);
   
    } catch (error) {
      console.error("Error in loadOrderApi:", error);
      reject(error);
    }
  });
};
