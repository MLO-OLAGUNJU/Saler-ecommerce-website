// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxsw4i-pof9sY437m-aBwbF_HOh8TzIt4",
  authDomain: "saler-ecommerce-shop.firebaseapp.com",
  projectId: "saler-ecommerce-shop",
  storageBucket: "saler-ecommerce-shop.appspot.com",
  messagingSenderId: "461647032775",
  appId: "1:461647032775:web:f1cc3eed540d755d6ce9e2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
