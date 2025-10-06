// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUOi5R9sNWoi-Q96D1rVIufm8a2pbFmVU",
    authDomain: "homework5-b8c52.firebaseapp.com",
    projectId: "homework5-b8c52",
    storageBucket: "homework5-b8c52.firebasestorage.app",
    messagingSenderId: "715609711599",
    appId: "1:715609711599:web:623c299cad5fd314dc8c1a",
    measurementId: "G-GYYBK87K1H"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);