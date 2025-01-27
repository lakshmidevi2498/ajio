
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

 
export { auth, provider, db };


