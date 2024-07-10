// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU15c_l2PhJKMi2ibu2iDotD4cDo3aR9k",
  authDomain: "netflix-e8de6.firebaseapp.com",
  projectId: "netflix-e8de6",
  storageBucket: "netflix-e8de6.appspot.com",
  messagingSenderId: "857537144718",
  appId: "1:857537144718:web:860f386a7f4f227289e6df",
  measurementId: "G-F1QY5NGCWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);