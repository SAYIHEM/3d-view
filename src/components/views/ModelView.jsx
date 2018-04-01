import { Component } from 'react';
import { PerspectiveCamera, Renderer, Scene } from 'react-three';
import * as THREE from 'three';
import React from 'react';
import AutoScale from 'react-auto-scale';

class ModelView extends Component {


  constructor(props) {
    super(props);

    this.state = {width: props.width, height: props.height};
  }

  render() {
    let aspectratio = this.state.width / this.state.height;
    let cameraprops = {
      fov : 75, aspect : aspectratio,
      near : 1, far : 5000,
      position : new THREE.Vector3(0,0,600),
      lookat : new THREE.Vector3(0,0,0)};

    return (
      <AutoScale>
        <Renderer width={this.state.width} heigth={this.state.height}>
          <Scene camera='maincamera' width={this.state.width} height={this.state.width}>
            <PerspectiveCamera name='maincamera' {...cameraprops}/>
          </Scene>
        </Renderer>
      </AutoScale>
    );
  }
}

export default ModelView;