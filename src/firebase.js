import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByV2uc8U8dycUyl2PAoK9Q5KoHbSXj6mE",
  authDomain: "niss-technoogies.firebaseapp.com",
  projectId: "niss-technoogies",
  storageBucket: "niss-technoogies.firebasestorage.app",
  messagingSenderId: "600080229189",
  appId: "1:600080229189:web:45ca72d2a62286d7cd942c",
  measurementId: "G-X55DMKFXD3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);