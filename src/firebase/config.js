// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTTJqQJ59980frfiLLqfQH8LsD1RF3to4",
  authDomain: "proj-coderhouse-react.firebaseapp.com",
  projectId: "proj-coderhouse-react",
  storageBucket: "proj-coderhouse-react.appspot.com",
  messagingSenderId: "758650817531",
  appId: "1:758650817531:web:ddf4833cc0a99466f1995e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);