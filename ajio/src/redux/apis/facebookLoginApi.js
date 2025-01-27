
export const facebookLoginApi = async () => {
  const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? 'https://ajio-2.onrender.com' 
  : 'http://localhost:5050';
  const allowedOriginsFrontend = process.env.NODE_ENV === 'production' 
  ? 'https://ajio-2.onrender.com' 
  : 'http://localhost:3000';

  return new Promise((resolve, reject) => {
  
    const authWindow = window.open(`${allowedOrigins}/auth/facebook`, "_self");

 
    window.addEventListener("message", (event) => {
      if (event.origin !== allowedOriginsFrontend) return;  

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
