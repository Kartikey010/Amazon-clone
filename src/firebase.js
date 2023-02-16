// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// const firebaseConfig = {
//     apiKey: "AIzaSyBYHIFov0GauMMpY9NSQjGg8_7hev4C7pc",
//     authDomain: "challenge-f00bb.firebaseapp.com",
//     projectId: "challenge-f00bb",
//     storageBucket: "challenge-f00bb.appspot.com",
//     messagingSenderId: "414653885065",
//     appId: "1:414653885065:web:8f7ffaecf111366aa73458",
//     measurementId: "G-LB7FFTRSKZ"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyCc-4HueoEWyJONrva37jUBIT3XuoaHyGI",
  authDomain: "clone-fa337.firebaseapp.com",
  projectId: "clone-fa337",
  storageBucket: "clone-fa337.appspot.com",
  messagingSenderId: "970791470274",
  appId: "1:970791470274:web:df6ab62502422bd517275b"
};

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth =firebase.auth();

  export {db,auth};