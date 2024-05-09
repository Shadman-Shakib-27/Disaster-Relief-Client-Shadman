// Import the functions you need from the SDKs you need --> Shadman
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9-1wuAjvO0LeRVcgmvgSVFZNWsdHprh0",
  authDomain: "disaster-relief-shadman.firebaseapp.com",
  projectId: "disaster-relief-shadman",
  storageBucket: "disaster-relief-shadman.appspot.com",
  messagingSenderId: "732918338366",
  appId: "1:732918338366:web:13f0d9b518cfa5d753926f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);