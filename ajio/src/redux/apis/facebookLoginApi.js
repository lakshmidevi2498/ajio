import API from "../../API/API";
const api = new API();
const endPoints = "user/signin";
export const facebookLoginApi = async () => {

  return new Promise((resolve, reject) => {
  
    const authWindow = window.open("https://ajio-7e20.onrender.com/auth/facebook", "_self");

 
    window.addEventListener("message", (event) => {
      if (event.origin !== "https://ajio-7e20.onrender.com") return;  

      const { user, token, error } = event.data;

      if (user && token) {
        resolve({ user, token });
      } else {
        reject(error || "facrbook sign-in failed");
      }

      authWindow.close();
    });
  });
};
