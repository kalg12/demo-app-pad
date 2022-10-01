import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKXv8qJ2rqxz1qUdRmaxU4eryBKppuYVU",
  authDomain: "tallerpontealdiacrud.firebaseapp.com",
  projectId: "tallerpontealdiacrud",
  storageBucket: "tallerpontealdiacrud.appspot.com",
  messagingSenderId: "436639923865",
  appId: "1:436639923865:web:8b40396981c8c7b66e8208"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)