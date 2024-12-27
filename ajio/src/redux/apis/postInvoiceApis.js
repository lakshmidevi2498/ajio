import API from "../../API/API";
const api = new API();
const endPoints = "download-invoice";
export const postInvoiceApi = async (orders) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("this is post call in API---->",endPoints);
      const response = await api.post(`${endPoints}`,{orders}, { responseType: "blob" } );
      console.log("fetched user in postInvoiceApi", response);
      console.log("fetched user in postInvoiceApi", response.data);
      resolve(response);
   
    } catch (error) {
      console.error("Error in postInvoiceApi:", error);
      reject(error);
    }
  });
};
