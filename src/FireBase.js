// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAyDM82rBpyaULB7lF8sOanqAUMwlWMr84",
  authDomain: "sensorylearn.firebaseapp.com",
  projectId: "sensorylearn",
  storageBucket: "sensorylearn.appspot.com",
  messagingSenderId: "800360905600",
  appId: "1:800360905600:web:ccd73ef8a0185e51981f65",
  measurementId: "G-YR26EY7TZX"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};