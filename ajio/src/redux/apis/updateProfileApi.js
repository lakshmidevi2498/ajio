import API from "../../API/API";
const api = new API();
const endPoints = "userdetails";
export const updateProfileApi = async ( userId,values) => {
  return new Promise(async (resolve, reject) => {
    try {

      const response = await api.put(`${endPoints}/?userId=${userId}`, {
        values
      });

      resolve(response);
   
    } catch (error) {
      console.error("Error in loadProfileApi:", error);
      reject(error);
    }
  });
};
