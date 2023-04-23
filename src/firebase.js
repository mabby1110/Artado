// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJTkbS0UtlAIWPihPCJDfPDtltCK-A7zg",
  authDomain: "artado-77079.firebaseapp.com",
  projectId: "artado-77079",
  storageBucket: "artado-77079.appspot.com",
  messagingSenderId: "874320070624",
  appId: "1:874320070624:web:f6cbab86d29c25e1c7cd85"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)