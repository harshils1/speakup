import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAip1B8Zc2iOojBCXcubF-C_9Vzb2qoprI",
  authDomain: "chatter-c6f09.firebaseapp.com",
  projectId: "chatter-c6f09",
  storageBucket: "chatter-c6f09.appspot.com",
  messagingSenderId: "123689292535",
  appId: "1:123689292535:web:740223b3ad2ec9b758b9f2",
  measurementId: "G-YTPGZ304N8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;