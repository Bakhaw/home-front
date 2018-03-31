import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends Component {
  render() {
    return (
      <div>
        <form action={`http://localhost:8090/${this.props.piece}/add`} method="post">
          <TextField name="name" hintText="Élement"
                     underlineFocusStyle={{ borderColor: '#ff4081' }} />
          {this.props.children}
        </form>
      </div>
    );
  }
}

export default Form;