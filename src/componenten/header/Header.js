import React from 'react';
import './Header.css';

function Header(props) {
    return (
      <div className="header-container">
        <h1 id="pageHeader">The Pokémon search app!</h1>
        <p>Made by Coen Walter</p>
      </div>
    )
  }

export default Header;