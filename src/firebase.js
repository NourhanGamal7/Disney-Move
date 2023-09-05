
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from 'firebase'
// import firebase from 'firebase'
// import firebase from './firebase';

// import 'firebase/auth';
// import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyBjYdf7G9OSV6TWNwieyFfOl7nhWhgvUdY",
//   authDomain: "disneyplus-clone-da854.firebaseapp.com",
//   projectId: "disneyplus-clone-da854",
//   storageBucket: "disneyplus-clone-da854.appspot.com",
//   messagingSenderId: "1044540058851",
//   appId: "1:1044540058851:web:ce6921a8585cc3051ae9d6",
//   measurementId: "G-TX5LK9XYTY"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;


import firebase from './firebase'; // Updated import statement

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBjYdf7G9OSV6TWNwieyFfOl7nhWhgvUdY",
  authDomain: "disneyplus-clone-da854.firebaseapp.com",
  projectId: "disneyplus-clone-da854",
  storageBucket: "disneyplus-clone-da854.appspot.com",
  messagingSenderId: "1044540058851",
  appId: "1:1044540058851:web:ce6921a8585cc3051ae9d6",
  measurementId: "G-TX5LK9XYTY"
};

firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage, db };


export default firebase;



