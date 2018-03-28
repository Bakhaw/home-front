import React, { Component } from 'react';

import Item from './Item';
import items from '../items';


class Piece extends Component {
  constructor(props) {
    super(props);
    this.state = { items }
  }

  displayItems = () => {
    const { items } = this.state;
    const piece = this.props.match.params.piece;

    const appart = items[piece];

    return appart.map((data, index) => {
      return (
        <div key={index}>
          <Item data={data}/>
        </div>
      );
    })
  }

  render() {
    const piece = this.props.match.params.piece;    
    return (
      <div>
        <h4 style={{ textTransform: 'capitalize' }}>{piece}</h4>
        {this.displayItems()}
      </div>
    );
  }
}

export default Piece;