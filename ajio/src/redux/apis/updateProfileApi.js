import API from "../../API/API";
const api = new API();
const endPoints = "userdetails";
export const updateProfileApi = async ( userId,values) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("this is post call in API---->",endPoints);
      const response = await api.put(`${endPoints}/?userId=${userId}`, {
        values
      });
      console.log("fetched user in loadProfileApi", response);
      console.log("fetched user in loadProfileApi", response.data);
      resolve(response);
   
    } catch (error) {
      console.error("Error in loadProfileApi:", error);
      reject(error);
    }
  });
};
