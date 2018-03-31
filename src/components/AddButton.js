import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import Form from './Form';

const AddButton = (props) => (
  <FloatingActionButton mini={true} secondary={true}>
    <ContentAdd onClick={props.handleOpen}/>
  </FloatingActionButton>
);

export default class Modal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const buttons = [
      <FlatButton
        label="Annuler"
        onClick={this.handleClose}
        key={0}
      />,
      <RaisedButton
        label="Valider"
        secondary={true}
        type="submit"
        key={1}        
      />,
    ];

    return (
      <div>
        <AddButton handleOpen={this.handleOpen}/>
        <Dialog
          title="Nouvel élément"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
        <Form piece={this.props.piece}>
          {buttons}
        </Form>
        </Dialog>
      </div>
    );
  }
}