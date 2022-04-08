   
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {

  authDomain: "tik-tok-5f332.firebaseapp.com",
  projectId: "tik-tok-5f332",
  storageBucket: "tik-tok-5f332.appspot.com",
  messagingSenderId: "149729838655",
  appId: "1:149729838655:web:449df1c8c3ddcf79e31a8a",
  measurementId: "G-9SFF7DYS55",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
export default db;
