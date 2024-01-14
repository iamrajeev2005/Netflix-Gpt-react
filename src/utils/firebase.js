// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkKiLcor1E0porTOdFxhqaWE4B7EFoXAk",
  authDomain: "netflix-gpt-v1.firebaseapp.com",
  projectId: "netflix-gpt-v1",
  storageBucket: "netflix-gpt-v1.appspot.com",
  messagingSenderId: "814646525731",
  appId: "1:814646525731:web:9d2e742f14aca62b019696",
  measurementId: "G-ENC47RTMDD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
