import React from 'react';
import Card from './Card';
import './PokemonOverview.css';


function OverviewData(props) {
    const cardTitles = ['Basic info', 'Abilities', 'Base Stats', 'Moves'];
    const toRender = cardTitles.map((title, i) => {
        return <Card key={i} title={title} cardTitles={cardTitles} stats={props.stats} />
    })

  return (
        <div className="overview-data">
            <div className="cards-container">
                {toRender}
            </div>
        </div>
    )
  }

export default OverviewData;