import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem} from 'material-ui/List';

import PieceRoute from './PieceRoute';

class Appart extends Component {
  render() {
    return (
      <div>
        <List>
          <ListItem>

            <PieceRoute url='entree' primaryText='Entrée' leftIcon='home'/>
            <PieceRoute url='bathroom' primaryText='Bathroom' leftIcon='bath'/>
            <PieceRoute url='cuisine' primaryText='Cuisine' leftIcon='utensils'/>
            <PieceRoute url='salon' primaryText='Salon' leftIcon='couch'/>
            <PieceRoute url='chambre' primaryText='Chambre' leftIcon='bed'/>

          </ListItem>
        </List>
      </div>
    );
  }
}

export default Appart;