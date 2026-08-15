import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1WBFB55VzuIAH0VxDtyGjb0ZnxyFDaB8",
  authDomain: "niss-property.firebaseapp.com",
  projectId: "niss-property",
  storageBucket: "niss-property.firebasestorage.app",
  messagingSenderId: "182566973810",
  appId: "1:182566973810:web:efe5b80c42a4830f482deb",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);