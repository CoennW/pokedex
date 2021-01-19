import React from 'react';
import './Result.css';



function ResultItem(props) { 
  
  return (
   
    

      <div className="result-item" onClick={() => props.fetchPokemon(props.result.name)}>
        
        <img src={'https://img.pokemondb.net/sprites/home/normal/' + props.result.name + '.png'} alt="pokemon_picture"  />
        <p>{props.result.name[0].toUpperCase() + props.result.name.substring(1)}</p>
      </div>
    
    )
  }

export default ResultItem;