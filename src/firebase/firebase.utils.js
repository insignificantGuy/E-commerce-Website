import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDsIi2w7X2eNx4n9d_M9h2ECJ5r2NSCEw4",
    authDomain: "ecommerce-db-33c3b.firebaseapp.com",
    projectId: "ecommerce-db-33c3b",
    storageBucket: "ecommerce-db-33c3b.appspot.com",
    messagingSenderId: "666450276616",
    appId: "1:666450276616:web:9ff2c1ef79b034055cbcbd",
    measurementId: "G-0793X9GQ8Z"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
