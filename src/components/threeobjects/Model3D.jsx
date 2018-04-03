import React from 'react';
import { Component } from 'react';
import * as THREE from 'three';
import ModelLoader from "../../utils/ModelLoader";


class Model3D extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      url: props.url,
      position: props.position ? props.position : new THREE.Vector3(0, 0, 0)
    };
  }

  render() {
    return (
      <group
        ref='modelcontainer'
        castShadow
        receiveShadow
        position={this.state.position}
      >

      </group>
    );
  }

  componentDidMount() {
    let callback = (model) => this.refs.modelcontainer.add(model);
    let loader = new ModelLoader(this.state.url, callback);

    this.refs.modelcontainer.add();
  }
}

export default Model3D;