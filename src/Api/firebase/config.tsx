import firebase from "firebase";
import dotenv from "dotenv";
dotenv.config();
const result = dotenv.config();

if (result.error) {
  console.log(result.error);
}

// Initialize Febase
firebase.initializeApp({
  apiKey: "AIzaSyAAyh4D3UdlOkQfU00B8ymwhRsESejzkSY",
  authDomain: "fishing-834c0.firebaseapp.com",
  databaseURL: "https://fishing-834c0.firebaseio.com",
  projectId: "fishing-834c0",
  storageBucket: "fishing-834c0.appspot.com",
  messagingSenderId: "85556555293",
  appId: "1:85556555293:web:2b7dc08c682ca332",
});

export const ref = firebase.database().ref();
export const auth = firebase.auth();
export const storage = firebase.storage();
