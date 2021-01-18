import React, {useState} from 'react';
import './Result.css';

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex()



function ResultItem(props) { 
 
  
  
  
    //   P.getPokemonByName(props.result.name)
    //   .then(function(response) {
        
    //     setImgURL('https://pokeres.bastionbot.org/images/pokemon/' + response.id  + '.png');

    // }) 
  
   
 
  return (
   
    

      <div className="result-item">
        
        <img src={'https://img.pokemondb.net/sprites/home/normal/' + props.result.name + '.png'} alt="pokemon_picture"  />
        <p>{props.result.name[0].toUpperCase() + props.result.name.substring(1)}</p>
      </div>
    
    )
  }

export default ResultItem;