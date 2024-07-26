// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeFgQhJ0SAbLPLxhrkWgH2ZR5xaeFXthY",
  authDomain: "uptaeb-website.firebaseapp.com",
  projectId: "uptaeb-website",
  storageBucket: "uptaeb-website.appspot.com",
  messagingSenderId: "92508463660",
  appId: "1:92508463660:web:094b673b6c6e58dc76a789",
  measurementId: "G-LLDKQY446Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);