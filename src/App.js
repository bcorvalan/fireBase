import React, { useState } from "react";
import * as firebase from 'firebase';
import 'firebase/firestore'
import {getFireStore } from './firebase'

function App() {
  const [id, setId] = useState([])
  const [price, setPrice] = useState([])
  const db =  getFireStore()

  const gorroColection = db.collection("gorros")

  const pedido ={
    cliente: {
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    price:45645645645
  }
function sendOrder(){
  gorroColection.add(pedido).then(({id})=>{
    setId(id)
  }).catch(e => {console.log(e)}).finally(console.log('se termino'))
}
function savePrice(e){
  setPrice(e.target.value)
}
function updateData(){
  const docRef = db.collection('gorros').doc(id)
  docRef.update({price: price})
}

return <div className="App">
  <button onClick={sendOrder}>Orden de compra</button>
    <label>Precio</label>
    <input onChange={savePrice}placeholder="Precio"></input>
    <button onClick={updateData}>Modificar precio</button>
  </div>;
}

export default App;
