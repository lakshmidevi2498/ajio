import API from "../../API/API";
const api = new API();
const endPoints = "order/update";
export const OrderpatchApi = async (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("this is post call in API---->", endPoints);
      // console.log("this is post call in API---->", id ,"fghj",token);
      console.log("this is OrderpatchApil in API---->", body);
      
      
      const response = await api.put(
        `${endPoints}`,
        body 
        // {
        //   headers: {
        //     authorization: `Bearer ${token}`,
        //   }
        // }
      );
      console.log("fetched user in OrderpatchApi", response);
      resolve(response);
    } catch (error) {
      console.error("Error in OrderpatchApi:", error);
      reject(error);
    }
  });
};

