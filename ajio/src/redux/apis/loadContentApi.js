import API from "../../API/API";
const api = new API();
const endPoints = "content";
export const loadContentApi = async ( ) => {
  return new Promise(async (resolve, reject) => {
    try {

      const response = await api.get(`${endPoints}`);
      resolve(response);
   
    } catch (error) {
      console.error("Error in loadcontentApi:", error);
      reject(error);
    }
  });
};
