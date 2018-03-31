import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

import RemoveButton from './RemoveButton';

class Item extends Component {
  render() {
    return (
      <div className="item">
        <ListItem primaryText={this.props.data.name}
                  leftIcon={<Checkbox checked={this.props.data.checked} iconStyle={{ fill: '#ff4081' }}/>}
                  onClick={this.props.toggleCheck}
                  style={{ width: "75vw" }}
        />
        <RemoveButton removeItem={this.props.removeItem}/>
      </div>
    );
  }
}

export default Item;