import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDOj9np2lt-nR6czrBV5-5Soy6ZXtBH_qk",
  authDomain: "reactword-fa319.firebaseapp.com",
  projectId: "reactword-fa319",
  storageBucket: "reactword-fa319.firebasestorage.app",
  messagingSenderId: "279455382120",
  appId: "1:279455382120:web:949252d2dd390811c2d9dd",
  measurementId: "G-04HQFG27NL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exportar auth y provider de Google
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Firestore
const db = getFirestore(app);

export { auth, googleProvider, db, signOut };
