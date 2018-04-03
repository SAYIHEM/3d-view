import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import ModelScene from './ModelScene';
import ReactResizeDetector from 'react-resize-detector';


class ModelView extends Component {

  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <div
        id='viewcontainer'
        ref={node => {
          if (node !== null) {
            this.container = node;
          }
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={this.onResize.bind(this)}
        />
      </div>
    );
  }

  componentDidMount() {
    ReactDOM.render(
      <ModelScene
        id='modelscene'
        width={this.container.clientWidth}
        height={this.container.clientHeight}
        cb={(n) => this.scene = n}
      />, this.container
    );

  }

  onResize(width, height) {
    this.scene.setState({
      width: width,
      height: height
    });
  }
}

export default ModelView;