import API from "../../API/API";
const api = new API();
const endPoints = "download-invoice";
export const postInvoiceApi = async (orders) => {
  return new Promise(async (resolve, reject) => {
    try {

      const response = await api.post(`${endPoints}`,{orders}, { responseType: "blob" } );

      resolve(response);
   
    } catch (error) {
      console.error("Error in postInvoiceApi:", error);
      reject(error);
    }
  });
};
