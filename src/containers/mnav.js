import React, { Component } from 'react';
import './nav.css';

import Lnav from'./lnav.js';


 class Nav extends React.Component {

    render(){
        return(
          
            <div>

<nav role="navigation">
  <div id="menuToggle">
  <input type ="closemenu" />
    <input type="checkbox" />
    



    <span></span>
    <span></span>
    <span></span>
    
    
    
    <ul id="menu">
   
      <Lnav />
      
    </ul>
  </div>
</nav>
        </div>
        );
    }
}


export default Nav;