import API from "../../API/API";
const api = new API();
const endPoints = "address";
export const postAddressApi = async (values,userId) => {
  return new Promise(async (resolve, reject) => {
    try {
   
      const response = await api.post(`${endPoints}/${userId}`,{values });

      resolve(response);
   
    } catch (error) {
      console.error("Error in postAddressApi:", error);
      reject(error);
    }
  });
};
