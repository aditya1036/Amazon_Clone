// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANtaFbKIH14dq5LUeARVSEWPIXr1u4ABU",
  authDomain: "clone-102cc.firebaseapp.com",
  projectId: "clone-102cc",
  storageBucket: "clone-102cc.appspot.com",
  messagingSenderId: "964995212391",
  appId: "1:964995212391:web:494c0b6d11f6cafb7720c2",
  measurementId: "G-KCCHW2562B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);