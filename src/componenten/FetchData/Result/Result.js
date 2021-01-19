import React from 'react';
import ResultItem from './ResultItem';
import './Result.css';


function Result(props) {

  let toRender;
  
  if (typeof props.results === 'undefined') {
    toRender = <p>'Loading!'</p>;
  } else {
    toRender = props.results.map((result, index) => {return <ResultItem  fetchPokemon={props.fetchPokemon} key={index} result={result} />})
    
    
  }
  
  return (
      
      <div className="result-items-grid" >
        {toRender}
      </div>
    
    )
  }

export default Result;