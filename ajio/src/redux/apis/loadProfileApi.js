import API from "../../API/API";
const api = new API();
const endPoints = "userdetails";
export const loadProfileApi = async ( userId,token) => {
  return new Promise(async (resolve, reject) => {
    try {

      const response = await api.get(`${endPoints}/?userId=${userId}`, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      resolve(response);
   
    } catch (error) {
      console.error("Error in loadProfileApi:", error);
      reject(error);
    }
  });
};
