import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCERVWAWRNG6STJLfuRqi3VdxJ88zeKdrU",
    authDomain: "clone-7096e.firebaseapp.com",
    projectId: "clone-7096e",
    storageBucket: "clone-7096e.appspot.com",
    messagingSenderId: "776293799971",
    appId: "1:776293799971:web:8edc9167f0a8b7db8c7996"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};