// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuADru8ky-gakY5k65dhcoqKMqvWzB4eA",
  authDomain: "gynadever.firebaseapp.com",
  projectId: "gynadever",
  storageBucket: "gynadever.firebasestorage.app",
  messagingSenderId: "246783949787",
  appId: "1:246783949787:web:860e389c9e32afe71185fe",
  measurementId: "G-0C4NL0WCHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);