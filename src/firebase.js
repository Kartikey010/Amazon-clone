// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBYHIFov0GauMMpY9NSQjGg8_7hev4C7pc",
    authDomain: "challenge-f00bb.firebaseapp.com",
    projectId: "challenge-f00bb",
    storageBucket: "challenge-f00bb.appspot.com",
    messagingSenderId: "414653885065",
    appId: "1:414653885065:web:8f7ffaecf111366aa73458",
    measurementId: "G-LB7FFTRSKZ"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth =firebase.auth();

  export {db,auth};