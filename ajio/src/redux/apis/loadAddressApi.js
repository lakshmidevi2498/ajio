import API from "../../API/API";
const api = new API();
const endPoints = "address";
export const loadAddressApi = async ( userId) => {
  return new Promise(async (resolve, reject) => {
    try {
 
      const response = await api.get(`${endPoints}/${userId}`,{
        // headers:{
        //   authorization:`Bearer ${token}`,
        // }
      });
     
      resolve(response);
   
    } catch (error) {
      console.error("Error in loadAddressApi:", error);
      reject(error);
    }
  });
};
