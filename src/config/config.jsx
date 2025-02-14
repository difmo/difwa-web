// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore"; // Firestore imports

const firebaseConfig = {
  apiKey: "AIzaSyAv-boTUF4ZfJGu14ZDysoAX9l-OajLHUE",
  authDomain: "codechat-45ec2.firebaseapp.com",
  databaseURL: "https://codechat-45ec2-default-rtdb.firebaseio.com",
  projectId: "codechat-45ec2",
  storageBucket: "codechat-45ec2.appspot.com",
  messagingSenderId: "685191561219",
  appId: "1:685191561219:web:78e7d1cee0f87ee5e9ce36",
  measurementId: "G-9ZGFR9J7SJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore service
const db = getFirestore(app);

export { db, doc, getDoc, updateDoc };
