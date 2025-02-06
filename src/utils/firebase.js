// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:  "AIzaSyAgmChP3nSb0GlM__RdH79PDzJOGm1Bv3E",
  authDomain: "netflixgpt-3ac6d.firebaseapp.com",
  projectId: "netflixgpt-3ac6d",
  storageBucket: "netflixgpt-3ac6d.firebasestorage.app",
  messagingSenderId: "1085681722624",
  appId: "1:1085681722624:web:4f63d123cbe9620734ffe5",
  measurementId: "G-00ZTWYLS20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();