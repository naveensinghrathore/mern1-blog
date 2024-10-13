// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern1-blog.firebaseapp.com",
  projectId: "mern1-blog",
  storageBucket: "mern1-blog.appspot.com",
  messagingSenderId: "532792698521",
  appId: "1:532792698521:web:80870281c24f8456e0fa08"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



 




























