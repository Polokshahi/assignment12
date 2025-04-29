// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-_oCpfUjk9nUYbxQqRh0OXgAVtz34nGU",
  authDomain: "tourism-managment-7dfa2.firebaseapp.com",
  projectId: "tourism-managment-7dfa2",
  storageBucket: "tourism-managment-7dfa2.firebasestorage.app",
  messagingSenderId: "572050524576",
  appId: "1:572050524576:web:e8780f6f687f89391c7cc5"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);