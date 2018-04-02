import React from "react";
import { Component } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';


class ModelView extends Component {

  width = null;
  height = null;

  constructor(props) {
    super(props);

    this.state = {
        width: props.width ? props.width : 100,
        height: props.height ? props.height : 100,
        cameraPosition: props.cameraPosition ? props.cameraPosition : new THREE.Vector3(0, 0, 5),
        cubeRotation: new THREE.Euler()
    };

    console.log(this.state);
  }

  render() {

    let renderer = null;

    if (this.state) {
      let aspectratio = this.state.width / this.state.height;
      let cameraprops = {
        fov : 75, aspect : aspectratio,
        near : 1, far : 5000,
        position : new THREE.Vector3(0,0,600),
        lookat : new THREE.Vector3(0,0,0)
      };

      renderer = (
        <React3 mainCamera='camera'
                width={this.state.width}
                height={this.state.height}
                onAnimate={this._onAnimate()}>
          <scene>
            <perspectiveCamera name='camera'
                               fov={75}
                               aspect={this.state.width / this.state.height}
                               near={0.1}
                               far={1000}
                               position={this.state.cameraPosition}>

            </perspectiveCamera>
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

    return (
      <div ref='container' style={{width: '100%', height: '100%'}}>
          <React3 mainCamera='camera'
                  width={this.state.width}
                  height={this.state.height}
                  onAnimate={this._onAnimate()}>
              <scene>
                  <perspectiveCamera name='camera'
                                     fov={75}
                                     aspect={this.state.width / this.state.height}
                                     near={0.1}
                                     far={1000}
                                     position={this.state.cameraPosition}>

                  </perspectiveCamera>
                  <mesh rotation={this.state.cubeRotation}>
                      <boxGeometry
                          width={120}
                          height={120}
                          depth={120}
                      />
                      <meshBasicMaterial
                          color={0x00ff00}
                      />
                  </mesh>
              </scene>
          </React3>
      </div>
    );


  }

  _onAnimate() {
    console.log("ani");
  }


  componentDidMount1() {
    let container = this.refs.container;

    this.setState({
      width: container.clientWidth,
      height: container.clientHeight
    })
  }

  componentDidUpdate1() {
    let container = this.refs.container;

    if (this.width !== container.clientWidth || this.height !== container.clientHeight) {
      this.width = container.clientWidth;
      this.height = container.clientHeight;

      console.log(this.state.height);
      console.log(this.state.width);


      this.setState({
        width: this.width,
        height: this.height
      });
    }
  }

}

export default ModelView;