import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import './Search.css';
const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex()


 



function Search(props) {
  
  let list = [];
  let realList = useRef([]);
  const [toShow, setList] = useState([]);
  const node = useRef();


    // or with Promises
  P.getPokemonsList({offset:0, limit:1118})
  .then(function(response) {
      
      response.results.map((x, index) => {
        list.push(x.name);

      })
  })  

  const handleSearchInput = value => {
    setList(list.filter(name => name.includes(value)))
  }
  
  
  useEffect(() => {
    realList.current = toShow.slice(0,10);

    if(toShow.length === 0) {
      document.getElementById('searchResults').style.display = 'none';

      
    } else 
    {
      
      document.getElementById('searchResults').style.display = 'block';
    }
}, [toShow] );

  
return (
      <div className="search-container">
        <input onInput={(e) => handleSearchInput(e.target.value)} id="searchbar" type="text" placeholder="Search Pokémon..."></input>
        <div className="search-results-container" id="searchResults">
          {console.log(realList.current)}
          {realList.current.length <= 20 ? realList.current.map((i => {return <p key={i} className="result-items">{i}</p>})) :  null}
        </div>
      </div>
    )
  }

  


export default Search;