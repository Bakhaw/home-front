import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'material-ui/List';

import Item from './Item';
import AddButton from './AddButton';

class Piece extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  async componentWillMount() {
    const piece = this.props.match.params.piece;
    const res = await fetch(`http://localhost:8090/${piece}`);
    const items = await res.json();
    this.setState({ items });
  }

  toggleCheck = async (id) => {
    const piece = this.props.match.params.piece;    
    await fetch(`http://localhost:8090/${piece}/update/${id}`, {
      method: 'POST'
    });
    window.location.reload();
  }

  removeItem = async (id) => {
    const piece = this.props.match.params.piece;
    await fetch(`http://localhost:8090/${piece}/delete/${id}`);
    window.location.reload();
  }

  render() {
    const piece = this.props.match.params.piece;
    return (
      <div>
        <div className="header">
          <Link to='/'>
            <i className="fas fa-chevron-left"></i>
          </Link>
          <h4 style={{ textTransform: 'capitalize' }}>{piece}</h4>
          <AddButton piece={piece}/>
        </div>
        {this.state.items.map((data, index) => {
          return (
            <div key={index} className="items-container">
              <List>
                <Item data={data}
                      toggleCheck={() => this.toggleCheck(data._id)}
                      removeItem={() => this.removeItem(data._id)}/>
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