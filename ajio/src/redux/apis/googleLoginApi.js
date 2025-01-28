
export const googleLoginApi = () => {
  const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? 'https://ajio-2.onrender.com' 
  : 'http://localhost:5051';
  const allowedOriginsFrontend = process.env.NODE_ENV === 'production' 
  ? 'https://ajio-2.onrender.com' 
  : 'http://localhost:3000';

  return new Promise((resolve, reject) => {
  
    const authWindow = window.open(`${allowedOrigins}/auth/google`, "_self");

 
    window.addEventListener("message", (event) => {
      if (event.origin !== allowedOriginsFrontend) return;  

      const { user, token, error } = event.data;
      console.log("event.data",event.data)

      if (user && token) {
        resolve({ user, token });
      } else {
        reject(error || "Google sign-in failed");
      }

      authWindow.close();
    });
  });
};
