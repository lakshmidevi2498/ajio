import API from "../../API/API";
const api = new API();
const endPoints = "order/update";
export const OrderpatchApi = async (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      
      
      const response = await api.put(
        `${endPoints}`,
        body 
        // {
        //   headers: {
        //     authorization: `Bearer ${token}`,
        //   }
        // }
      );
      resolve(response);
    } catch (error) {
      console.error("Error in OrderpatchApi:", error);
      reject(error);
    }
  });
};

