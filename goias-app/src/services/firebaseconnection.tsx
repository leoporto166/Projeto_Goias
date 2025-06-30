

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNlvRR0oAHzDAkvO2Pf56vrpZKme5GBvo",
  authDomain: "dbgoias.firebaseapp.com",
  projectId: "dbgoias",
  storageBucket: "dbgoias.firebasestorage.app",
  messagingSenderId: "984617046548",
  appId: "1:984617046548:web:a2bb1c1cdbdcca9d998d01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}