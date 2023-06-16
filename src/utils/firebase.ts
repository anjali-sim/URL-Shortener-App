import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyDWN0MILp7GYkPrCZQB6nkHbZZZQIGeMIM",
  authDomain: "url-shortener-app-9e46d.firebaseapp.com",
  projectId: "url-shortener-app-9e46d",
  storageBucket: "url-shortener-app-9e46d.appspot.com",
  messagingSenderId: "498438820911",
  appId: "1:498438820911:web:db2eaca2175cf1503462da",
  measurementId: "G-ZW4LZPSZNT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const db = firebase.firestore();

export { app, auth, db };
