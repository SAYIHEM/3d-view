import React from 'react';
import { Component } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

class ModelScene extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      width: props.width ? props.width : 100, // TODO: Default size
      height: props.height ? props.height : 100,
      cameraPosition: props.cameraPosition ? props.cameraPosition : new THREE.Vector3(0, 0, 6)
    };
  }

  render() {
    return (
      <React3
        ref={node => {
          if (node !== null) {
            this.canvas = node;
            this.props.cb(this);
          }
        }}
        mainCamera='camera'
        width={this.state.width}
        height={this.state.height}
      >
        <scene>
          <perspectiveCamera
            name='camera'
            fov={75}
            aspect={this.state.width / this.state.height}
            near={0.1}
            far={1000}

            position={this.state.cameraPosition}
          />
          <mesh>
            <boxGeometry
              width={1}
              height={1}
              depth={1}
            />
            <meshBasicMaterial
              color={0x00ff00}
            />
          </mesh>
        </scene>
      </React3>
    );
  }

  /*componentDidMount() {

    window.addEventListener('resize', this._handleWindowResize.bind(this))
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleWindowResize.bind(this));
  }

  _handleWindowResize() {
    let canvas = ReactDOM.findDOMNode(this.canvas);

    this.setState({
      width: canvas.parentNode.offsetWidth,
      height: canvas.parentNode.offsetHeight
    });
  }*/
}

export default ModelScene;