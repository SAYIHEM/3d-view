import React from 'react';
import { Component } from 'react';
import ModelScene from './ModelScene';
import ReactResizeDetector from 'react-resize-detector';


class ModelView extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div
        ref={node => this.container = node}
        style={{width: '100%', height: '100%'}}
      >
        <ModelScene
          url={this.props.url}
          cb={(n) => {this.scene = n}}
        />
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={this.onResize}
        />
      </div>
    );
  }

  componentDidMount() {
    this.scene.setState({
      width: this.container.clientWidth,
      height: this.container.clientHeight
    });
  }

  onResize = (width, height) => { // TODO: Fix Bug when scaled to 100%
    this.scene.setState({
      width: width,
      height: height
    });
  }
}

export default ModelView;