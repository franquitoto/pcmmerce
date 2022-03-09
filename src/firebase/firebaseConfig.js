// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDWbD92eEzkgpMLsmSileBD7YqKRkkCo90",
  authDomain: "pcmerce-a1d70.firebaseapp.com",
  projectId: "pcmerce-a1d70",
  storageBucket: "pcmerce-a1d70.appspot.com",
  messagingSenderId: "352381381919",
  appId: "1:352381381919:web:e97e136989b77fb606542a",
  measurementId: "G-04Z0KSL71Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);