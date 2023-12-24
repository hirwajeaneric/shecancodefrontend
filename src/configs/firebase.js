// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBeKSVfmFQML7XOQaSbgnFETYWQzpZdV88",
  authDomain: "she-can-code-job-application.firebaseapp.com",
  projectId: "she-can-code-job-application",
  storageBucket: "she-can-code-job-application.appspot.com",
  messagingSenderId: "968386963577",
  appId: "1:968386963577:web:3772112ba75ab999054ca8",
  measurementId: "G-K3155B35ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);