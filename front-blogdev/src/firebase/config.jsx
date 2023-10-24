import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQXyGGJOohgjfZCdJVLme5hivH30_6i0I",
  authDomain: "blogdev-2a.firebaseapp.com",
  projectId: "blogdev-2a",
  storageBucket: "blogdev-2a.appspot.com",
  messagingSenderId: "591943240802",
  appId: "1:591943240802:web:6a3be7e67e0704a3bb953b",
  measurementId: "G-P9HE2FWQZS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};