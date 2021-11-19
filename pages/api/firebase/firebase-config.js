// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAECu0MUQxsxVsVWMtC8e5HkdSALGXFA5o",
  authDomain: "ceolex-c935e.firebaseapp.com",
  projectId: "ceolex-c935e",
  storageBucket: "ceolex-c935e.appspot.com",
  messagingSenderId: "202466857749",
  appId: "1:202466857749:web:f5e9479ad35bc217310f1c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
