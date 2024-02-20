import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD59TwNZzlJWT_00Q0FpRgDKpfsxsnY-TQ",
    authDomain: "entertainment-web-app-388f0.firebaseapp.com",
    projectId: "entertainment-web-app-388f0",
    storageBucket: "entertainment-web-app-388f0.appspot.com",
    messagingSenderId: "848534963969",
    appId: "1:848534963969:web:473d82291a86384ff1bd00"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage();

export default auth;