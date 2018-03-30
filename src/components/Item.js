import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

class Item extends Component {
  state = {
    leftIcon: this.props.data.expansive ? "fas fa-dollar-sign gold" : "fas fa-dollar-sign silver",
    rightIcon: this.props.data.checked ? "fas fa-check-square checked" : "far fa-check-square not-checked"
  }

  render() {
    return (
      <div>
        <ListItem primaryText={this.props.data.name}
                  leftIcon={<i className={this.state.leftIcon}></i>}
                  rightIcon={<i className={this.state.rightIcon}></i>}
                  onClick={this.props.toggleCheck}
        />
      </div>
    );
  }
}

export default Item;