import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
l
const firebaseConfig = {
  apiKey: "AIzaSyBRHilYDnTiJ8fbkZeDa_Asx3COQRdwC9M",
  authDomain: "blogdev-prof-f56fc.firebaseapp.com",
  projectId: "blogdev-prof-f56fc",
  storageBucket: "blogdev-prof-f56fc.appspot.com",
  messagingSenderId: "463042332725",
  appId: "1:463042332725:web:1b35216f9ede192c94897c",
  measurementId: "G-QFCSR3EC4M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}