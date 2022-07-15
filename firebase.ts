// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQAtwTPFWOI1o7CWdMUrTUIObFrruS6-o",
    authDomain: "netflix-jmg-clone.firebaseapp.com",
    projectId: "netflix-jmg-clone",
    storageBucket: "netflix-jmg-clone.appspot.com",
    messagingSenderId: "105779059813",
    appId: "1:105779059813:web:01150834e030040ba2fa8c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }