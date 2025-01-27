import API from "../../API/API";
const api = new API();
const endPoints = "sent-otp";
export const mobileLoginApi = async (phoneNumber,providerId,uId) => {
  return new Promise(async (resolve, reject) => {
    try {
    
      const response = await api.post(`${endPoints}`,{phoneNumber,providerId,uId});
    
      resolve(response);
   
    } catch (error) {
      console.error("Error in mobileLoginApi:", error);
      reject(error);
    }
  });
};
