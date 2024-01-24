import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAqmu0o_3M-BDAsnoGG3BSM6ZFqElMcv4E",
    authDomain: "quizapp-53b87.firebaseapp.com",
    projectId: "quizapp-53b87",
    storageBucket: "quizapp-53b87.appspot.com",
    messagingSenderId: "255013567111",
    appId: "1:255013567111:web:a356513ef723dbf3a59622",
    measurementId: "G-QE0T5TZBED"
  };

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export{firestore};