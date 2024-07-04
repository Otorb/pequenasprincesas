// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi1JlCMfhk7hLCxoUQEQYjX44YheNv5AE",
  authDomain: "holads.firebaseapp.com",
  databaseURL: "https://holads-default-rtdb.firebaseio.com",
  projectId: "holads",
  storageBucket: "holads.appspot.com",
  messagingSenderId: "111699694477",
  appId: "1:111699694477:web:409aeacd405b4932b863c4",
  measurementId: "G-G1N0F3YZ0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
