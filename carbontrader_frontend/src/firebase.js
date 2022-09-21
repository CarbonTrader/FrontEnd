import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import "firebase/auth"

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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app) 

export const auth = app.auth
export { db };
export default app