//-------------------------------------------------------------------------------------------------
// Import the functions you need from the SDKs you need
//-------------------------------------------------------------------------------------------------

import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    getDocs,
    collection,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

//-------------------------------------------------------------------------------------------------
// Your web app's Firebase configuration
//-------------------------------------------------------------------------------------------------

const firebaseConfig = {
    apiKey: "AIzaSyB9ldPEsig6sGzGtlyhYZut5cTrAWzpad4",
    authDomain: "schedoo-db.firebaseapp.com",
    projectId: "schedoo-db",
    storageBucket: "schedoo-db.appspot.com",
    messagingSenderId: "848892930008",
    appId: "1:848892930008:web:f48220a21485ce4ab774ad",
};

//-------------------------------------------------------------------------------------------------
// Initialize Firebase
//-------------------------------------------------------------------------------------------------

initializeApp(firebaseConfig);

// ------------------------------------------------------------------------------------------------
// Google Authentication Section
// ------------------------------------------------------------------------------------------------

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signOutWithGoogle = () => signOut(auth);

// ---------------------------------------------------------------------------------------------------
// Firestore DB & Document Creation Section
// ---------------------------------------------------------------------------------------------------

export const db = getFirestore();

export const createDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.user.uid);
    const userSnapShot = await getDoc(userDocRef);
    //      If document does not exist create a document
    if (!userSnapShot.exists()) {
        const { email, displayName } = userAuth.user;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log("Error creating the user: ", error.message);
        }
    }
    return userDocRef;
};
