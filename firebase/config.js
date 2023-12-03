// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";
import { getAuth} from "firebase/auth"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDT55jE9ulE48EeQWbuX2Ylvw0_axBlFc",
  authDomain: "nextjs-store-85538.firebaseapp.com",
  projectId: "nextjs-store-85538",
  storageBucket: "nextjs-store-85538.appspot.com",
  messagingSenderId: "583342911578",
  appId: "1:583342911578:web:696a7f61b90d4c7857e863"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)
export const auth = getAuth(app);