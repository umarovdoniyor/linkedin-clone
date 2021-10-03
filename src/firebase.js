import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCzxiSV6E1O4s7LecHaa8C2w3RW-Vyxfno',
  authDomain: 'linkedin-clone-edef6.firebaseapp.com',
  projectId: 'linkedin-clone-edef6',
  storageBucket: 'linkedin-clone-edef6.appspot.com',
  messagingSenderId: '767443429394',
  appId: '1:767443429394:web:1e19117726967a1f3510cb',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
