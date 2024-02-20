import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASirw7H5XOMgB39a-StmTaaeM-bpdHg8w",
  authDomain: "cakeshop-dfa7c.firebaseapp.com",
  databaseURL: "https://cakeshop-dfa7c-default-rtdb.firebaseio.com",
  projectId: "cakeshop-dfa7c",
  storageBucket: "cakeshop-dfa7c.appspot.com",
  messagingSenderId: "600545377534",
  appId: "1:600545377534:web:ae31e80313a1b427a479af"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
