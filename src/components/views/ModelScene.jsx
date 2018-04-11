import React from 'react';
import { Component } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import Model3D from "../threeobjects/Model3D";
import SimpleBox from "../threeobjects/SimpleBox";
import TrackballControls from "../../utils/controls/TrackballControls";

class ModelScene extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      width: props.width ? props.width : 1, // TODO: Default size
      height: props.height ? props.height : 1,
      cameraPosition: props.cameraPosition ? props.cameraPosition : new THREE.Vector3(0, 0, 5)
    };

    let cameratitle = 'camera';
    
    this.cameraprops = {
      name: cameratitle,
      fov: 75,
      near: 0.1,
      far: 1000
    };
    
    this.react3props = {
      ref: this.props.cb(this),
      mainCamera: cameratitle,
    };

    // Callback reference to canvas container
    this.props.cb(this);
  }

  render() {
    return (
      <React3
        canvasRef={node => {this.react3 = node}}
        width={this.state.width}
        height={this.state.height}
        {...this.react3props}
      >
        <scene>
          <perspectiveCamera
            ref={node => {this.camera = node}}
            position={this.state.cameraPosition}
            aspect={this.state.width / this.state.height}
            {...this.cameraprops}
          >
          </perspectiveCamera>
          <SimpleBox/>
          {/*<Model3D url={this.props.url}/>*/}
        </scene>

      </React3>
    );
  }

  componentDidMount() {
    this.control = new TrackballControls(this.camera, this.react3);
  }
}

export default ModelScene;