// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6tHnzURx7QnUFyVfSXZkcLQhauu2Ouh0",
  authDomain: "netflix-gpt-a53a9.firebaseapp.com",
  projectId: "netflix-gpt-a53a9",
  storageBucket: "netflix-gpt-a53a9.firebasestorage.app",
  messagingSenderId: "845007221699",
  appId: "1:845007221699:web:cc9c6d0d3040c14f534376",
  measurementId: "G-YGKWYFNZE0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
