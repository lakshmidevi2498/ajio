import API from "../../API/API";
const api = new API();
const endPoints = "admin";
export const adminLoginApi = async (user) => {
  return new Promise(async (resolve, reject) => {
    try {

      const response = await api.post(`${endPoints}`,user);
      resolve(response);
   
    } catch (error) {
      console.error("Error in adminLoginApi:", error);
      reject(error);
    }
  });
};
