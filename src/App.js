import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCrrydG2OQmV5g4KO9GISzFBQPpn_TTSOU",
  authDomain: "coderhouse-55b48.firebaseapp.com",
  projectId: "coderhouse-55b48",
  storageBucket: "coderhouse-55b48.appspot.com",
  messagingSenderId: "1092113434811",
  appId: "1:1092113434811:web:a0a039ddd9372e8aefc19e",
});

function getFirebase() {
  return app;
}
function getFireStore() {
  return firebase.firestore(app);
}


function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
  setLoading(true)
  const db =  getFireStore()
  const itemCollection = db.collection("items")
  itemCollection.get().then(
    (querySnapshot)=>{
      if(querySnapshot.size === 0){
        console.log('no hay resultados')
      }
      setItems(querySnapshot.docs.map(doc => doc.data()))
    }
  ).catch((error)=>{console.log('Error searching items', error)}).finally(()=>{setLoading(false)})

  }, []);
  return <div className="App">
    {console.log(items)}
  </div>;
}

export default App;
