// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA28QXa78zXoVE2Cv1ahNvIihWYdPsyHJU",
    authDomain: "citas-4603b.firebaseapp.com",
    projectId: "citas-4603b",
    storageBucket: "citas-4603b.appspot.com",
    messagingSenderId: "1049946589099",
    appId: "1:1049946589099:web:b32158a81933022bd134ee",
    measurementId: "G-DGT34HPZDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const getDataFire = getFirestore();

export { app, getDataFire }
