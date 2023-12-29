// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA97wzDpjkZEA3p5yRtF-hg3pYHrNuhStU",
  authDomain: "amazingcomix-54dab.firebaseapp.com",
  projectId: "amazingcomix-54dab",
  storageBucket: "amazingcomix-54dab.appspot.com",
  messagingSenderId: "1096642256845",
  appId: "1:1096642256845:web:8b1ca8a67fe5bcb20dae84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
