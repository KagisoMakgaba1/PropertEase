// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propertease-80a63.firebaseapp.com",
  projectId: "propertease-80a63",
  storageBucket: "propertease-80a63.appspot.com",
  messagingSenderId: "975534256636",
  appId: "1:975534256636:web:35e97fc9bfe0ada29fc279",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);