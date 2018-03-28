import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Item extends Component {
  render() {
    return (
      <div>
        <Paper>
          <Menu desktop>
            <MenuItem disabled={this.props.data.checked ? true : false}
                      primaryText={this.props.data.name}
                      leftIcon={this.props.data.checked
                                  ? <i className="fas fa-check fa-10x"></i>
                                  : <i className="fas fa-times"></i>
                                }
                      rightIcon={this.props.data.expansive
                                  ? <i className="fas fa-dollar-sign"></i>
                                  : null
                                }/>
          </Menu>
        </Paper>
      </div>
    );
  }
}

export default Item;