import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY_FIREBASE,
  authDomain: "cafetoxic0.firebaseapp.com",
  databaseURL: "https://cafetoxic0-default-rtdb.firebaseio.com",
  projectId: "cafetoxic0",
  storageBucket: "cafetoxic0.appspot.com",
  messagingSenderId: "352369281028",
  appId: "1:352369281028:web:97397199e2495e66244d51"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
