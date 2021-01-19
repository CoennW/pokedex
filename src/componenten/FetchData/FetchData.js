import React, {useState, useEffect} from 'react';
import Search from './Search/Search';
import PokemonOverview from './PokemonOverview/PokemonOverview';
import Result from './Result/Result';
import './FetchData.css';

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex()


function FetchData(props) {

  const [endPoint, setEndPoint] = useState({offset:0, limit:20});

  const [fetchedPokemonList, setPokemonList] = useState();

  const [fetchedPokemonData, setPokemonData] = useState();

  useEffect(() => {
    fetchPokeList(endPoint); 
  }, [endPoint] );


  const fetchPokeList = endPointObject => {
    // or with Promises
    P.getPokemonsList(endPointObject)
    .then(function(response) {
        setPokemonList(response.results);
    })  
  }

  const fetchPokemon = pokemonName => {
    P.getPokemonByName(pokemonName)
    .then(function(response) {
        setPokemonData(response);
    })  
  }

  const closePokemonOverview = () => {
    setPokemonData(null);
    console.log('closed!')
  }
  
  return (
    <div>
      <p>Pokemon ID's: {endPoint.offset} - {endPoint.offset + endPoint.limit}</p>
        <div className="flex">
          
          <Search fetchPokemon={fetchPokemon} />
          
          <div className="page-buttons">
            <p>Page:</p>
            <button onClick={() => setEndPoint({offset: endPoint.offset - (endPoint.offset <= 0 ? 0 : 20), limit: 20})}>Back</button>
            <button onClick={() => setEndPoint({offset: endPoint.offset + 20, limit: 20})}>Next</button>
          </div> 
        </div>      
        
        <Result results={fetchedPokemonList} fetchPokemon={fetchPokemon}>
        
        </Result>
        {fetchedPokemonData != null ? <PokemonOverview closePokemonOverview={closePokemonOverview} fetchedPokemonData={fetchedPokemonData}/> : null}
        
        
        
    </div>
  )
}

export default FetchData;