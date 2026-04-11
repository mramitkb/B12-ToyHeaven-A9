// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaV9k3dZs028TFUHnioMc1NMII3LzNQTE",
  authDomain: "toy-heaven-a9.firebaseapp.com",
  projectId: "toy-heaven-a9",
  storageBucket: "toy-heaven-a9.firebasestorage.app",
  messagingSenderId: "1078471047779",
  appId: "1:1078471047779:web:d9d8cae477b2b11baa1656"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);