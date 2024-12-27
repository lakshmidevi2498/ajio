import API from "../../API/API";
const api = new API();
const endPoints = "content";
export const loadContentApi = async ( ) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("this is post call in API---->",endPoints);
      const response = await api.get(`${endPoints}`);
      console.log("fetched user in loadcontentApi", response);
      console.log("fetched user in loadcontentApi", response.data);
      resolve(response);
   
    } catch (error) {
      console.error("Error in loadcontentApi:", error);
      reject(error);
    }
  });
};
