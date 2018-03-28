import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';

class PieceRoute extends Component {
  render() { 
    return (
      <div>
        <Link to={`/appart/${this.props.url}`}>
          <MenuItem primaryText={this.props.primaryText}
                    leftIcon={<i className={`fas fa-${this.props.leftIcon}`}></i>}/>
        </Link>
      </div>
    );
  }
}
 
export default PieceRoute;