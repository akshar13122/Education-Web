import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCAn-1g69ovhN7pYZr0ASdPzsCB3JPw8YQ",
    authDomain: "login-auth-40020.firebaseapp.com",
    projectId: "login-auth-40020",
    storageBucket: "login-auth-40020.appspot.com",
    messagingSenderId: "599210029812",
    appId: "1:599210029812:web:3b31a410e9653358bda4a1"
  };

  const app = initializeApp(firebaseConfig);
  export const auth=getAuth();
  export default app;