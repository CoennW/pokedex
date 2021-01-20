import React from 'react';
import './PokemonOverview.css';


function Card(props) {
   
    const stats  = props.stats;
    const title = props.title;
    const cardDataTitle = [];
    const cardData = [];
    
    switch(props.title) {
        case props.cardTitles[0]:
            // Basic info
            cardDataTitle.push('Height: ', 'Weight: ', 'Base XP: ')
            cardData.push(stats.height, stats.weight, stats.base_experience)
            break;
        case props.cardTitles[1]:
            // Abilities
            const ability = stats.abilities;
            Array.prototype.push.apply(cardDataTitle, ability.map((x,i) => {return i + 1 + ': '}))
            Array.prototype.push.apply(cardData, ability.map((x,i) => {return x.ability.name}))
            break;
        case props.cardTitles[2]:
            // Base Stats
            const statData = stats.stats;
            Array.prototype.push.apply(cardDataTitle, statData.map((x,i) => {return x.stat.name + ': '}))
            Array.prototype.push.apply(cardData, statData.map((x,i) => {return x.base_stat}))
            break;
        case props.cardTitles[3]:
            // Moves
            console.log('jo');
            const moves = stats.moves;
            Array.prototype.push.apply(cardDataTitle, moves.map((x,i) => {return i + 1 + ': '}))
            Array.prototype.push.apply(cardData, moves.map((x,i) => {return x.move.name }))
            break;
        default:
          // code block
      }

  return (
       
            <div className="card"  id={title.toLowerCase()}>
                <h3>{props.title}</h3>
                
                    {cardData.map((stat, index) => {
                        return <ul><div className="style-element"></div><li key={index}>{cardDataTitle[index] + stat}</li></ul>
                    })}
                
            </div>
               
         
    )
  }

export default Card;