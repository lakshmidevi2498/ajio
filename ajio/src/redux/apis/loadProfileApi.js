import API from "../../API/API";
const api = new API();
const endPoints = "userdetails";
export const loadProfileApi = async ( userId,token) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("this is post call in API---->",endPoints);
      const response = await api.get(`${endPoints}/?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
