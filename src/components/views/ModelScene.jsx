import React from 'react';
import { Component } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import Model3D from "../threeobjects/Model3D";

class ModelScene extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      url: props.url,
      width: props.width ? props.width : 100, // TODO: Default size
      height: props.height ? props.height : 100,
      cameraPosition: props.cameraPosition ? props.cameraPosition : new THREE.Vector3(0, 0, 5)
    };

    let cameratitle = 'camera';
    
    this.cameraprops = {
      name: cameratitle, fov: 75,
      near: 0.1, far: 1000,
      aspect: this.state.width / this.state.height,
    };
    
    this.react3props = {
      ref: this.props.cb(this),
      mainCamera: cameratitle,
    }
  }

  render() {
    return (
      <React3
        width={this.state.width}
        height={this.state.height}
        {...this.react3props}
      >
        <scene>
          <perspectiveCamera
            position={this.state.cameraPosition}
            {...this.cameraprops}
          />
          <Model3D url={this.state.url} c/>
        </scene>
      </React3>
    );
  }
}

export default ModelScene;