import React, {useState} from 'react';
import './Result.css';



function ResultItem(props) { 

  const [isImageLoaded, setImageLoaded] = useState(false);
  
  

  return (



      <div className="result-item" onClick={() => props.fetchPokemon(props.result.name)}>

        <h4 id="pokemonID">{isImageLoaded ? props.pokemonID : "000"}</h4>
        <div className="pokemon-img-container"><img onLoad={() => {setImageLoaded(true)}} style={(isImageLoaded) ? {display: 'inline-block'} : {display: 'none'}} src={'https://img.pokemondb.net/sprites/home/normal/' + props.result.name + '.png'} alt="pokemon_picture"  /></div>
        <p>{props.result.name[0].toUpperCase() + props.result.name.substring(1)}</p>

      </div>
    
    )
  }

export default ResultItem;