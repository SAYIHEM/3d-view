import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import ModelScene from './ModelScene';

class ModelView extends Component {

  render() {
    return (
      <div id='viewcontainer' ref='viewcontainer'/>
    );
  }

  componentDidMount() {
    ReactDOM.render(
      <ModelScene
        width={window.innerWidth}
        height={window.innerHeight}
      />, this.refs.viewcontainer
    );
  }
}

export default ModelView;