// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-34bfb.firebaseapp.com",
  projectId: "mern-estate-34bfb",
  storageBucket: "mern-estate-34bfb.appspot.com",
  messagingSenderId: "586556387010",
  appId: "1:586556387010:web:4371bb9251d34babf4d55b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);