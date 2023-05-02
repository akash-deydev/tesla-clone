import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDCzxjRYqiVVf29R8HtyDM5ZvQMA-NC9Ag",
    authDomain: "tesla-clone-a5e4d.firebaseapp.com",
    projectId: "tesla-clone-a5e4d",
    storageBucket: "tesla-clone-a5e4d.appspot.com",
    messagingSenderId: "70997914363",
    appId: "1:70997914363:web:a2d30d2e7779a9be58765e"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();

export { auth }

