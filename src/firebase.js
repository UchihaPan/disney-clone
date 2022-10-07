import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJ8lHftgYCTxRnhKG1lH_GM56ylx50uzk",
  authDomain: "disney-clone-3e3c8.firebaseapp.com",
  projectId: "disney-clone-3e3c8",
  storageBucket: "disney-clone-3e3c8.appspot.com",
  messagingSenderId: "319309775223",
  appId: "1:319309775223:web:549610c02c28b0f831a172",
  measurementId: "G-LESLH0PCN6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
