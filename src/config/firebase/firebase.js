// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBk1vbSf8Al6a0ujFPKvUbbGBAEmQDhmew",
  authDomain: "jatimsatu-dev.firebaseapp.com",
  projectId: "jatimsatu-dev",
  storageBucket: "jatimsatu-dev.appspot.com",
  messagingSenderId: "1052455087508",
  appId: "1:1052455087508:web:4805a2589f98b5ba45b381",
  measurementId: "G-Y5Y3PSCHZ9",
};

// Initialize Firebase and cloud storage
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
