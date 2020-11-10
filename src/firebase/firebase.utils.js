import firebase  from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
const config = {
    apiKey: "AIzaSyBfic-B2eMchNVaT5NG2vOAmeRSr22fZZk",
    authDomain: "ecomerce-281e3.firebaseapp.com",
    databaseURL: "https://ecomerce-281e3.firebaseio.com",
    projectId: "ecomerce-281e3",
    storageBucket: "ecomerce-281e3.appspot.com",
    messagingSenderId: "519645733101",
    appId: "1:519645733101:web:4a840e2f6423d65cdeece4",
    measurementId: "G-T5QDRVY1KX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();// 
provider.setCustomParameters({prompt:'select_account'});//we want always tigger google popup when ever we use googleauthprovider for auth and sign in
export const signInwithGoogle = ()=> auth.signInWithPopup(provider);//to sign with google popups

export default firebase;
