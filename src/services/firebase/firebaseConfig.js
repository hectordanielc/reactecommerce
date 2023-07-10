
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA7NkW98Wpz9lcYvQueWJrFWt6rd5tUm2I",
    authDomain: "ecommerce-react-83936.firebaseapp.com",
    projectId: "ecommerce-react-83936",
    storageBucket: "ecommerce-react-83936.appspot.com",
    messagingSenderId: "1020617250158",
    appId: "1:1020617250158:web:6e7823a708518c26ac1d7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
