// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBlTANWc1JZLmJlXkNFdi8rcPB3JikXhAg",
    authDomain: "linkedin-clone-5042e.firebaseapp.com",
    projectId: "linkedin-clone-5042e",
    storageBucket: "linkedin-clone-5042e.appspot.com",
    messagingSenderId: "767037826714",
    appId: "1:767037826714:web:f6d9f9eced05060660a123",
    measurementId: "G-3C7CM4FMRD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{db,auth} ;