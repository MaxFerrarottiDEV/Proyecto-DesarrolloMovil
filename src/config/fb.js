/* eslint-disable prettier/prettier */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

const firebaseConfig = {
  apiKey: Constants.manifest2.extra.apiKey,
  authDomain: Constants.manifest2.extra.authDomain,
  projectId: Constants.manifest2.extra.projectId,
  storageBucket: Constants.manifest2.extra.storageBucket,
  messagingSenderId: Constants.manifest2.extra.messagingSenderId,
  appId: Constants.manifest2.extra.appId
};

initializeApp(firebaseConfig);
export const database = getFirestore();