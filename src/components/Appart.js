import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';

import PieceRoute from './PieceRoute';

class Appart extends Component {
  render() {
    return (
      <div>
        <Paper>
          <Menu desktop>

            <PieceRoute url='entree' primaryText='Entrée' leftIcon='home'/>
            <PieceRoute url='bathroom' primaryText='Bathroom' leftIcon='bath'/>
            <PieceRoute url='cuisine' primaryText='Cuisine' leftIcon='utensils'/>
            <PieceRoute url='salon' primaryText='Salon' leftIcon='couch'/>
            <PieceRoute url='chambre' primaryText='Chambre' leftIcon='bed'/>

          </Menu>
        </Paper>
      </div>
    );
  }
}

export default Appart;