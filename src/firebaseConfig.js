// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔑 Ganti isi firebaseConfig ini dengan milikmu dari Firebase Console
const firebaseConfig = {
  apiKey: "API_KEY_KAMU",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Inisialisasi Firebase dan Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
