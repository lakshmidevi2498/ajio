import API from "../../API/API";
const api = new API();
const endPoints = "products";
export const loadProductsDataApi = async () => {
  return new Promise(async (resolve, reject) => {
    try {

      const response = await api.get(`${endPoints}`);
      resolve(response);
   
    } catch (error) {
      console.error("Error in loadProductsDataApi:", error);
      reject(error);
    }
  });
};
