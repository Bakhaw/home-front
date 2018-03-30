import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'material-ui/List';

import Item from './Item';
import { entree } from '../items/entree';
import { bathroom } from '../items/bathroom';
import { cuisine } from '../items/cuisine';
import { salon } from '../items/salon';
import { chambre } from '../items/chambre';


class Piece extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      entree,
      bathroom,
      cuisine,
      salon,
      chambre 
    }
  }

  toggleCheck = (item, piece) => {
    const arr = this.state[piece];
    const newItems = arr.map((data, index) => {
      if (item.name === data.name) {
        return {
          ...data,
          checked: !data.checked
        }
      }
      return data;
    })

    this.setState({
      [piece]: newItems
    });
  }

  render() {
    const piece = this.props.match.params.piece;
    const arr = this.state[piece];
    
    return (
      <div>
        <div className="header">
          <Link to='/'>
            <i className="fas fa-chevron-left"></i>
          </Link>
          <h4 style={{ textTransform: 'capitalize' }}>{piece}</h4>
          <p></p>
        </div>
        {arr.map((data, index) => {
          return (
            <div key={index}>
              <List>
                <Item data={data}
                      toggleCheck={() => this.toggleCheck(data, piece)}/>
              </List>
            </div>
          );
          })
        }
      </div>
    );
  }
}

export default Piece;