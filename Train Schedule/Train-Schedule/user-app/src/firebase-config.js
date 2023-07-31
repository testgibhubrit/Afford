// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZvP60mpuyfeGYpBzJEwcvce2wGGt_SGI",
  authDomain: "train-schedule-484e9.firebaseapp.com",
  projectId: "train-schedule-484e9",
  storageBucket: "train-schedule-484e9.appspot.com",
  messagingSenderId: "407407405706",
  appId: "1:407407405706:web:de3ef003a7a85d79925b73",
  measurementId: "G-ZCHKXVN684"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

