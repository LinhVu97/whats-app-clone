import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC7c14SnT4_jvFNKCn9xOKlbKjU5uxsiac",
    authDomain: "whats-app-clone-9c59e.firebaseapp.com",
    databaseURL: "https://whats-app-clone-9c59e.firebaseio.com",
    projectId: "whats-app-clone-9c59e",
    storageBucket: "whats-app-clone-9c59e.appspot.com",
    messagingSenderId: "550673431993",
    appId: "1:550673431993:web:1cff73f80b55fb7b220a68",
    measurementId: "G-ZVPYPP9PVH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;