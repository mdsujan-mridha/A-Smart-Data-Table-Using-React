// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw2n03IJGgsf1RyvuT0_fkt55GktqfdcY",
  authDomain: "datatable-5159f.firebaseapp.com",
  projectId: "datatable-5159f",
  storageBucket: "datatable-5159f.appspot.com",
  messagingSenderId: "588606606743",
  appId: "1:588606606743:web:ab96cc1a3a2e23c6d648d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
