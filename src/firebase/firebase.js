import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // https://firebase.google.com/docs/firestore/quickstart

const firebaseConfig = {
  apiKey: "AIzaSyBo7UUOteaj0DvndU1fIjlkFSGlqZ4eNhI",
  authDomain: "fir-app-padtest.firebaseapp.com",
  projectId: "fir-app-padtest",
  storageBucket: "fir-app-padtest.appspot.com",
  messagingSenderId: "664720680794",
  appId: "1:664720680794:web:9a78c1e0bd47524308b563"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); //https://firebase.google.com/docs/firestore/quickstart