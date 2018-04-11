import React from 'react';
import { Component } from 'react';
import * as THREE from 'three';
import ModelLoader from "../../utils/ModelLoader";


class Model3D extends Component {

  constructor(props, context) {
    super(props, context);

    this.props.position = props.position ? props.position : THREE.Vector3(0, 0, 0);
  }

  render() {
    return (
      <group
        ref='modelcontainer'
        castShadow
        receiveShadow
        position={this.props.position}
      >

      </group>
    );
  }

  componentDidMount() {
    let callback = (model) => this.refs.modelcontainer.add(model);
    let loader = new ModelLoader(this.props.url, callback);
  }
}

export default Model3D;