// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// import {  getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_APIKEY,
//   authDomain: process.env.FIREBASE_AUTHDOMAIN,
//   projectId: process.env.FIREBASE_PROJECTID,
//   storageBucket: process.env.FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.FIREBASE_SENDERID,
//   appId: process.env.FIREBASE_APPID,
//   measurementId: process.env.FIREBASE_MEASUREMENTID
// };

const firebaseConfig = {
    apiKey: "AIzaSyCfYOeRkfyh1dY4Oi_ggCV0QWdWhdWnJAk",
    authDomain: "coding-platform-9ae9c.firebaseapp.com",
    projectId: "coding-platform-9ae9c",
    storageBucket: "coding-platform-9ae9c.appspot.com",
    messagingSenderId: "13000926343",
    appId: "1:13000926343:web:db9c5706db9a2c2ff40422",
    measurementId: "G-MYR7V3MH9M"
  };
  


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app)
const auth = getAuth(app);

export {app,firestore, auth}

