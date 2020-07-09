import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCXyLwN9iIC2SvnZoOqy7JzWY_z5r8_fWY",
  authDomain: "cash-market-c4e9a.firebaseapp.com",
  databaseURL: "https://cash-market-c4e9a.firebaseio.com",
  projectId: "cash-market-c4e9a",
  storageBucket: "cash-market-c4e9a.appspot.com",
  messagingSenderId: "990410766870",
  appId: "1:990410766870:web:5c37a99600c8351de61337",
  measurementId: "G-BJYCTS5PXN"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();