/* eslint-disable prettier/prettier */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAsAX-PzaCNb3E_WDRvKPq_Jpyf79kUbWY",
  authDomain: "criosproyect-dm.firebaseapp.com",
  projectId: "criosproyect-dm",
  storageBucket: "criosproyect-dm.appspot.com",
  messagingSenderId: "1049072307225",
  appId: "1:1049072307225:web:c1e318e935574efdbbee88"
};

// Inicializar Firebase solo si no está inicializado
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };