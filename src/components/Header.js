import React from 'react';
import Logo from '/Users/andrelogan/dev/DevShop/React/first-react/src/logo.svg';

function Header() {
    return (
        
    <header>
          <nav className="nav">
          <img 
            src={Logo}
            alt='react logo' 
            width="100px"
        />
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
          </nav>
      </header>
      
    )
}

export default Header;