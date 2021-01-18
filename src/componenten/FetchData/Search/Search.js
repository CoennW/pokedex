import React, { useState } from 'react';
import './Search.css';
const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex()


 



function Search(props) {
  
  let list = [];
  const [toShow, setList] = useState([]);
    // or with Promises
  P.getPokemonsList({offset:0, limit:1118})
  .then(function(response) {
      
      response.results.map((x, index) => {
        list.push(x.name);

      })
      console.log(list);
  })  

  const handleSearchInput = value => {
   
    setList( list.filter(name => name.includes(value)))
    
    
  }


    return (
      <div>
        <input onInput={(e) => handleSearchInput(e.target.value)} id="searchbar" type="text" placeholder="Search Pokémon..."></input>
        <div className="search-results">
          {toShow.length < 100 ? toShow.map((i => {return <p>{i}</p>})) :  null}
        </div>
      </div>
    )
  }

export default Search;