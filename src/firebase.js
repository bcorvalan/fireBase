import firebase from "firebase/app"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCrrydG2OQmV5g4KO9GISzFBQPpn_TTSOU",
  authDomain: "coderhouse-55b48.firebaseapp.com",
  projectId: "coderhouse-55b48",
  storageBucket: "coderhouse-55b48.appspot.com",
  messagingSenderId: "1092113434811",
  appId: "1:1092113434811:web:a0a039ddd9372e8aefc19e",
});

export function getFirebase() {
  return app;
}
export function getFireStore() {
  return firebase.firestore(app);
}