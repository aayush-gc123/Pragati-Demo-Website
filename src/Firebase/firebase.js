// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAi_YlkDACBd86CiuoQy8v7N6URxM2Suxc",
    authDomain: "pragati-demo-cbc7e.firebaseapp.com",
    projectId: "pragati-demo-cbc7e",
    storageBucket: "pragati-demo-cbc7e.appspot.com",
    messagingSenderId: "521516743951",
    appId: "1:521516743951:web:189d9c281f97e3a0c1d27a",
    measurementId: "G-CPF1HGMBL1"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
