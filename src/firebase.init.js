// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUEB07lI0ZHu4o2rbe4-ayeTl845Oo0aE",
  authDomain: "atif-aslam-c6e56.firebaseapp.com",
  projectId: "atif-aslam-c6e56",
  storageBucket: "atif-aslam-c6e56.appspot.com",
  messagingSenderId: "135419525460",
  appId: "1:135419525460:web:6a386051bf29f17b0e70c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;