
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "interviewiq-b550d.firebaseapp.com",
  projectId: "interviewiq-b550d",
  storageBucket: "interviewiq-b550d.firebasestorage.app",
  messagingSenderId: "1097198877287",
  appId: "1:1097198877287:web:d885fc372c068018c8b2c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };