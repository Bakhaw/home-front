import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentDelete from 'material-ui/svg-icons/action/delete';

const RemoveButton = (props) => (
  <div className="remove-button">
    <FloatingActionButton mini={true} secondary={true}>
      <ContentDelete onClick={props.removeItem} />
    </FloatingActionButton>
  </div>
);

export default RemoveButton;