// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAWYTG_JbU8hU4DfVbSO_bnV98SR0vTjk",
  authDomain: "netflix-b9831.firebaseapp.com",
  projectId: "netflix-b9831",
  storageBucket: "netflix-b9831.appspot.com",
  messagingSenderId: "283849432003",
  appId: "1:283849432003:web:ad1ab75c0fffcb79edfb76",
  measurementId: "G-Y452QNZFE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth();