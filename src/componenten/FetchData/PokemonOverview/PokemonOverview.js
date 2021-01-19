import React from 'react';
import './PokemonOverview.css';


function PokemonOverview(props) {


  
  return (
      
    <div className="overview-container">
         <button onClick={() => props.closePokemonOverview()}>X</button>
          <div className="overview-header-container">
            <div className="overview-header">
                <div className="overview-header-data">
                    <h1>{props.fetchedPokemonData.name[0].toUpperCase() + props.fetchedPokemonData.name.substring(1)}</h1>
                    <p>Type:  &nbsp;  {props.fetchedPokemonData.types[0].type.name} {props.fetchedPokemonData.types[1] ? "• " + props.fetchedPokemonData.types[1].type.name : ""}</p>
                  
                    
                </div>
                <img src={'https://img.pokemondb.net/sprites/home/normal/' + props.fetchedPokemonData.name + '.png'} alt="pokemon_picture"  />
             </div>
          </div>
          <div className="overview-data">

          </div>  
    </div>
    
    )
  }

export default PokemonOverview;