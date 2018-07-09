import firebase from "firebase/app";
import "firebase/database";

const config = {};

firebase.initializeApp(config);

const db = firebase.database();
const moviesRef = db.ref("movies/");

export default moviesRef;
