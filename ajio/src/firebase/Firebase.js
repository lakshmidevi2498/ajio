
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDPyAKtRDQe9weGgnPieHhkgazbl13H5o",
  authDomain: "airbnb-3c69f.firebaseapp.com",
  projectId: "airbnb-3c69f",
  storageBucket: "airbnb-3c69f.appspot.com",
  messagingSenderId: "217690700753",
  appId: "1:217690700753:web:7633557dca9cb34cb1bef0",
  measurementId: "G-6VP28X5MXD",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);

// Export for use in other parts of your app
export { auth, provider, db };




// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider()
// export {  RecaptchaVerifier, signInWithPhoneNumber };

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCYPDonAq8Z92d15ViwxMf5FWN7DRgDfFQ",
//   authDomain: "ajio-373a1.firebaseapp.com",
//   projectId: "ajio-373a1",
//   storageBucket: "ajio-373a1.firebasestorage.app",
//   messagingSenderId: "32463444991",
//   appId: "1:32463444991:web:62b9817075a25e7b89e5ca",
//   measurementId: "G-ZRPJ1FD1R0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);