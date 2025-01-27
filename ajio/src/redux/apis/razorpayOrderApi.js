import API from "../../API/API";
const api = new API();
const endPoints = "order";

export const razorpayOrderApi = async (data) => {   
  return new Promise(async (resolve, reject) => {
    try {

      const response = await api.post(
        endPoints, 
        data,  
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      resolve(response);
    } catch (error) {
      console.error("Error in razorpayOrderApi:", error);
      reject(error);
    }
  });
};
