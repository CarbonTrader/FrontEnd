
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB0iqTgq24OmwpEbm33Tiy5kMjagtQ3C8E",
      
        authDomain: "carbontrader-1111.firebaseapp.com",
      
        projectId: "carbontrader-1111",
      
        storageBucket: "carbontrader-1111.appspot.com",
      
        messagingSenderId: "715973020967",
      
        appId: "1:715973020967:web:217b1c3b77f713a58eed02",
      
        measurementId: "G-7KQ5GH4SNN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export  {firebase};


