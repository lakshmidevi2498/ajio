

import API from "../../API/API";
const api = new API();
const endPoints = "order/validate";
export const razorpayOrderValidateApi = async (body) => {
  return new Promise(async (resolve, reject) => {
    try {

      const response = await api.post(`${endPoints}`,{body,
        headers: {
                    "Content-Type": "application/json"
                }
      });

      resolve(response);
   
    } catch (error) {
      console.error("Error in razorpayOrderValidateApi:", error);
      reject(error);
    }
  });
};
