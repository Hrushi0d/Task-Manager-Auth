// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAruIWKQ7kObpftSiz8pEBFoZMwAnz5jP0",
  authDomain: "hd-s-general.firebaseapp.com",
  projectId: "hd-s-general",
  storageBucket: "hd-s-general.firebasestorage.app",
  messagingSenderId: "59236837101",
  appId: "1:59236837101:web:4728db541c165d23cccee4",
  measurementId: "G-06NZ8GC935"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)

const handleSignin = async (email, password) => {
    
}