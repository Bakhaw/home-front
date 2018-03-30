import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

class Item extends Component {

  state = {
    checked: ,
    notChecked:
  }

  render() {

    this.props.data.checked ? console.log('checked') : console.log('not checked');

    return (
      <div>
        <ListItem primaryText={this.props.data.name}
                  leftIcon={this.props.data.expansive
                    ? <i className="fas fa-dollar-sign gold"></i>
                    : <i className="fas fa-dollar-sign silver"></i>
                  }
                  rightIcon={this.props.data.checked
                    ? <i className="fas fa-check-square checked"></i>
                    : <i className="far fa-check-square non-checked"></i>
                  }
                  onClick={this.props.toggleCheck}
        />
      </div>
    );
  }
}

export default Item;