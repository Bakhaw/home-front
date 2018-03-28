import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Appart from '../components/Appart';
import Piece from '../components/Piece';

class Routing extends Component {
  render() { 
    return (
      <Router>
          <Switch>
            <Route path='/appart/:piece' component={Piece}/>
            <Route path='/' component={Appart}/>
          </Switch>
      </Router>
    );
  }
}
 
export default Routing;