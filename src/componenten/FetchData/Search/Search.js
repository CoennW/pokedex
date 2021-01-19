import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import './Search.css';
const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex()


 



function Search(props) {
  
  let list = [];
  let realList = useRef([]);
  const [toShow, setList] = useState([]);
  


    // or with Promises
  P.getPokemonsList({offset:0, limit:1118})
  .then(function(response) {
      
      response.results.map((x, index) => {
        list.push(x.name);

      })
  })  

  const handleSearchInput = value => {
    
    setList(list.filter(name => name.includes(value.toLowerCase())))
    
  }

  const handleCloseSearch = (id) => {
    
    document.getElementById('closeSearchResult').style.display = 'none';
    document.getElementById('searchResults').style.display = 'none';
  }


  const handleSearchClick = pokemonName => {
    props.fetchPokemon(pokemonName);
    handleCloseSearch();
  }
  
  
  useEffect(() => {
    realList.current = toShow.slice(0,10);

    if(toShow.length === 0 || document.getElementById('searchResults').value === '') {
      document.getElementById('searchResults').style.display = 'none';
      document.getElementById('closeSearchResult').style.display = 'none';

    } else 
    {
      document.getElementById('closeSearchResult').style.display = 'block';
      document.getElementById('searchResults').style.display = 'block';
    }
}, [toShow] );

  
return (
      <div className="search-container">
        <input onChange={(e) => handleSearchInput(e.target.value)} id="searchbar" type="text" placeholder="Search Pokémon..."></input>
        <div id="closeSearchResult" onClick={(e) => handleCloseSearch()} ></div>
        <div className="search-results-container" id="searchResults">
          <button onClick={(e) => handleCloseSearch()}>X</button>
          
          {realList.current.length <= 20 ? realList.current.map((i => {return <p onClick={() => handleSearchClick(i)} key={i} className="result-items">{i}</p>})) :  null}
        </div>
      </div>
    )
  }

  


export default Search;