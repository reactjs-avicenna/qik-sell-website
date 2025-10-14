import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {
  getDatabase,
  set,
  ref,
  update,
  push,
  onValue,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBFd0oTnt-6sFa9YgH4YCQGi0USPCpqico",
  authDomain: "qiksell-avicenna.firebaseapp.com",
  databaseURL: "https://qiksell-avicenna-default-rtdb.firebaseio.com",
  projectId: "qiksell-avicenna",
  storageBucket: "qiksell-avicenna.firebasestorage.app",
  messagingSenderId: "288605894789",
  appId: "1:288605894789:web:9824c2d2977c917ddad1ec",
  measurementId: "G-ZQZ62RW9XR"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// export const db=getFirestore(app)
export const auth = getAuth(app);
export const storage = getStorage(app);
