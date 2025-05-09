import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5nn4r1Xyb_6zLVmxiGf9PAzsd-3TkPHg",
  authDomain: "prepwise-626a5.firebaseapp.com",
  projectId: "prepwise-626a5",
  storageBucket: "prepwise-626a5.firebasestorage.app",
  messagingSenderId: "150794739016",
  appId: "1:150794739016:web:b2a2c2c794cd259b6b677d",
  measurementId: "G-FCD9805QC9"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);