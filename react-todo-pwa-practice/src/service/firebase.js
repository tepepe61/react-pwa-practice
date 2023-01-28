import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAI,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  storageBucket: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

// グーグルログイン
export const signInWithGoogle = () => {
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      console.log("signok!");
    })
    .catch((error) => {
      console.log("signng!");
    });
};

export const logOut = () => {
  // 1. このthenとcatchの書き方Promiseチェーンというらしい
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("logoutok!");
      document.location.reload();
    })
    .catch((error) => {
      console.log(error.message);
    });
};
