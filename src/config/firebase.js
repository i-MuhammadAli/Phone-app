import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBR545xDzwvbnzdJIyK8dPChQEu9fdKdcY",
  authDomain: "phonecall-app-48de2.firebaseapp.com",
  projectId: "phonecall-app-48de2",
  storageBucket: "phonecall-app-48de2.firebasestorage.app",
  messagingSenderId: "76405510114",
  appId: "1:76405510114:web:49b42e204c1541480bf3bb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
