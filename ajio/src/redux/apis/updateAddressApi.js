import API from "../../API/API";
const api = new API();
const endPoints = "address";
export const updateAddressApi = async (values,editAddress) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("this is post call in API---->",endPoints);
      const response = await api.put(`${endPoints}/${editAddress}`, {
        values
      });
      console.log("fetched user in loadCartApi", response);
      console.log("fetched user in loadCartApi", response.data);
      resolve(response);
   
    } catch (error) {
      console.error("Error in loadCartApi:", error);
      reject(error);
    }
  });
};
