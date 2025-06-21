// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


//   apiKey: "AIzaSyAwCkrnF71sN0KDjqqsRapof7QSW7CigVA",
//   authDomain: "fit-arena-6de23.firebaseapp.com",
//   projectId: "fit-arena-6de23",
//   storageBucket: "fit-arena-6de23.firebasestorage.app",
//   messagingSenderId: "983999698860",
//   appId: "1:983999698860:web:0a9414a19c6bc8e75c4c09"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);