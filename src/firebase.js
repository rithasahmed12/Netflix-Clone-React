// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrntHdiRU0gii1I1S7RTeE6iuWlpqgiiM",
  authDomain: "netflix-react-clone-976d-eda14.firebaseapp.com",
  projectId: "netflix-react-clone-976d7",
  storageBucket: "netflix-react-clone-976d7.appspot.com",
  messagingSenderId: "727192202999",
  appId: "1:727192202999:web:8940ecbd48f22ac0ae2df2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)
