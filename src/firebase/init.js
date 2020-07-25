import firebase from 'firebase';
import firestore from 'firebase/firestore';

 const firebaseConfig = {
    apiKey: "AIzaSyDppocDwCy5DqlVrM1OSD1XyI8zz-dRGwI",
    authDomain: "charity-f0c19.firebaseapp.com",
    databaseURL: "https://charity-f0c19.firebaseio.com",
    projectId: "charity-f0c19",
    storageBucket: "charity-f0c19.appspot.com",
    messagingSenderId: "282344256533",
    appId: "1:282344256533:web:70f9d98a7df78ccab24a1c",
    measurementId: "G-6C70N2CSBC"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();