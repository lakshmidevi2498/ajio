import API from "../../API/API";
const api = new API();
const endPoints = "address";
export const updateAddressApi = async (values,editAddress) => {
  return new Promise(async (resolve, reject) => {
    try {

      const response = await api.put(`${endPoints}/${editAddress}`, {
        values
      });

      resolve(response);
   
    } catch (error) {
      console.error("Error in loadCartApi:", error);
      reject(error);
    }
  });
};
