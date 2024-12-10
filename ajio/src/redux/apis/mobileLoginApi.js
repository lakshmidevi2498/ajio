import API from "../../API/API";
const api = new API();
const endPoints = "sent-otp";
export const mobileLoginApi = async (phoneNumber) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("this is get call in API---->",endPoints);
      const response = await api.post(`${endPoints}`,{phoneNumber});
      console.log("fetched data in mobileLoginApi", response);
      resolve(response);
   
    } catch (error) {
      console.error("Error in mobileLoginApi:", error);
      reject(error);
    }
  });
};
