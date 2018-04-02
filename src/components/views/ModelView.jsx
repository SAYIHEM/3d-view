import { Component } from 'react';
import {Mesh, Object3D, PerspectiveCamera, Renderer, Scene} from 'react-three';
import * as THREE from 'three';
import React from 'react';
import {ExampleScene} from '../cupcake';

class ModelView extends Component {

  width = null;
  height = null;

  constructor(props) {
    super(props);

    this.state = {width: props.width, height: props.height};
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
        <Renderer width={this.state.width} heigth={this.state.height}>
          <Scene camera='maincamera' width={this.state.width} height={this.state.width}>
            <PerspectiveCamera name='maincamera' {...cameraprops}/>

            <Object3D quaternion={new THREE.Quaternion()}
                      position={new THREE.Vector3(0,0,0)}
                      material={new THREE.MeshBasicMaterial( {color: 0x00ff00} )}>
              <Mesh position={new THREE.Vector3(0,-100,0)} geometry={THREE.BoxGeometry(200,200,200)}/>
            </Object3D>

          </Scene>
        </Renderer>
      );
    }

    var MeshFactory = React.createFactory(Mesh);
    var boxgeometry = new THREE.BoxGeometry( 200,200,200);

    var test2 = (
      <Object3D quaternion={new THREE.Quaternion()}
                position={new THREE.Vector3(0,0,0)}
                material={THREE.ImageUtils.loadTexture('assets/creamPing.png')}>
        <Mesh position={new THREE.Vector3(0,-100,0)} geometry={boxgeometry}/>
      </Object3D>
    );

    var test = React.createElement(
      Object3D,
      {quaternion:new THREE.Quaternion(), position:new THREE.Vector3(0,0,0)},
      MeshFactory({position:new THREE.Vector3(0,-100,0), geometry:boxgeometry}),
      MeshFactory({position:new THREE.Vector3(0, 100,0), geometry:boxgeometry})
    );

    return (
      <div ref='container' style={{width: '100%', height: '100%'}}>
        {renderer}
      </div>
    );


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