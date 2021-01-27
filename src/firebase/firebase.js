import firebase from 'firebase/app';
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCAqISLFsdLgCIKVbbp9emrmn1uK7QKh98",
  authDomain: "canvasapp-12c44.firebaseapp.com",
  projectId: "canvasapp-12c44",
  storageBucket: "canvasapp-12c44.appspot.com",
  messagingSenderId: "807307236355",
  appId: "1:807307236355:web:53986b47e8301dc111aa36",
  measurementId: "G-ENQLN56K2H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };