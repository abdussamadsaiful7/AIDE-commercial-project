// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};
// const firebaseConfig = {
//   apiKey: "AIzaSyA9Tnh9SkiznkRb0F1Y3yuj2LotXZR9i6Q",
//   authDomain: "aide-task.firebaseapp.com",
//   projectId: "aide-task",
//   storageBucket: "aide-task.appspot.com",
//   messagingSenderId: "521481830872",
//   appId: "1:521481830872:web:2de6190b926036a4ad32ad"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;