// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe3mb2zndPZp0f4y_r5_afLdel66MWIz0",
  authDomain: "fusion-digital-marketing.firebaseapp.com",
  projectId: "fusion-digital-marketing",
  storageBucket: "fusion-digital-marketing.appspot.com",
  messagingSenderId: "48161797910",
  appId: "1:48161797910:web:96f929b7edcc66a87c0237",
  measurementId: "G-GSN6VVB6JE"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore database as 'firestore'
const firestore = getFirestore(app);

export { firestore };
