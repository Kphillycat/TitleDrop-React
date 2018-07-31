import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBx_HE7nCTG8Pi_wqPq3uDykTqD2eUf2_k",
  authDomain: "vivid-torch-9530.firebaseapp.com",
  databaseURL: "https://vivid-torch-9530.firebaseio.com",
  projectId: "vivid-torch-9530",
  storageBucket: "vivid-torch-9530.appspot.com",
  messagingSenderId: "352428896588"
};

firebase.initializeApp(config);

const db = firebase.database();

export default firebase;

export const moviesRef = db.ref("movies/");
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
