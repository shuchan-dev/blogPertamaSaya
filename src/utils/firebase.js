// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-4f7d4.firebaseapp.com",
  projectId: "blog-4f7d4",
  storageBucket: "blog-4f7d4.appspot.com",
  messagingSenderId: "134320919281",
  appId: "1:134320919281:web:e216a198f30b8cbf2c0f50",
  // measurementId: process.env.ANALYTICS,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
