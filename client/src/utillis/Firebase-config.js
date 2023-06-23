import { initializeApp } from "firebase/app";
import {
  getAuth,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  deleteDoc
}  from  'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC5N4s2Jpe2xRoSNQsCE-rk8vlp8ORBCdc",
  authDomain: "mystore-c62e2.firebaseapp.com",
  projectId: "mystore-c62e2",
  storageBucket: "mystore-c62e2.appspot.com",
  messagingSenderId: "939877199115",
  appId: "1:939877199115:web:48012bb5e270fa927b860e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,collection,addDoc,updateDoc,doc,getDocs,deleteDoc
};