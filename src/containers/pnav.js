import React, { Component } from 'react';

import { Switch,Route } from 'react-router-dom';

import Time from '../Lay/time.js';

import Lay from '../Lay/layout.js';
import Thing from '../Lay/thingtodo.js';
class Pnav extends Component{
  render(){
    return(
    <main>
      <Switch>
        <Route exact path='/' component={Lay}/>
        <Route path='/thingtodo' component={Thing}/>
        <Route path='/timetogo' component={Time}/>
        
      </Switch>
    </main>
    );
  }
  }
  export default Pnav;