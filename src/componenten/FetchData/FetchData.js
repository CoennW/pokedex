import React, {useState, useEffect} from 'react';
import Search from './Search/Search';
import Result from './Result/Result';
import './FetchData.css';

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex()


function FetchData(props) {

  const [endPoint, setEndPoint] = useState({offset:0, limit:20});

  const [fetchedPokemonList, setPokemonList] = useState();

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
  
    return (
      <div>
        <p>Pokemon ID's: {endPoint.offset} - {endPoint.offset + endPoint.limit}</p>
          <Search></Search> 
          <button onClick={() => setEndPoint({offset: endPoint.offset - (endPoint.offset <= 0 ? 0 : 20), limit: 20})}>Back</button>
          <button onClick={() => setEndPoint({offset: endPoint.offset + 20, limit: 20})}>Next</button>
          <Result results={fetchedPokemonList}></Result>
          
         
      </div>
    )
  }

export default FetchData;