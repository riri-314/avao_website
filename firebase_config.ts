// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { connectFirestoreEmulator, getFirestore } from "@firebase/firestore";
import { connectAuthEmulator, getAuth } from "@firebase/auth";
import { connectStorageEmulator, getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: "avao-lln.appspot.com",
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,

};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app)

export const storage = getStorage(app);

export const analytics = getAnalytics(app);

if (location.hostname === "localhost") {
    // Point to the Storage emulator running on localhost.
    connectStorageEmulator(storage, "127.0.0.1", 9199);
    connectAuthEmulator(auth, "http://127.0.0.1:9099");
    connectFirestoreEmulator(db, '127.0.0.1', 8080);
  } 