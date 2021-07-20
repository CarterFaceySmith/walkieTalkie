import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = { 
    // Add config here
    apiKey: "AIzaSyBeMcFt_aQhUznzjFC3hYVVsasd3po31Q0",
    authDomain: "walkietalkie-369f6.firebaseapp.com",
    projectId: "walkietalkie-369f6",
    storageBucket: "walkietalkie-369f6.appspot.com",
    messagingSenderId: "1013221599480",
    appId: "1:1013221599480:web:10a7e4ced27eded2c0f30d",
    measurementId: "G-FX06MTNY0E"

};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();