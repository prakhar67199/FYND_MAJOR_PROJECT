/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB47wq1_pcYmEnAh1XiCJb3I0r6JyVwEv8",
    authDomain: "blog-auth-one.firebaseapp.com",
    projectId: "blog-auth-one",
    storageBucket: "blog-auth-one.appspot.com",
    messagingSenderId: "361104454083",
    appId: "1:361104454083:web:111dd135a6102ce9c04d76"
};

const app = initializeApp(firebaseConfig);

// Google Auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {        
        user = result.user;
    })
    .catch((error) => {
        console.log(error)
    });

    return user;

}