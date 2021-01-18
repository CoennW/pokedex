import React from 'react';
import Header from '../header/Header';
import FetchData from '../FetchData/FetchData'
import './App.css';
const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex()

 // or with Promises
// P.getPokemonByName("eevee")
// .then(function(response) {
//   console.log(response)
// })

function App(props) {
    return (
      <div className="app-container">
        <Header></Header>
        <FetchData></FetchData>
      </div>
    ) 
  } 
 
export default App;