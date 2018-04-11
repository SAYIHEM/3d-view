import React from 'react';
import * as THREE from 'three';
let TControls = require('three-trackballcontrols');
let OrbitControls = require('three-orbit-controls')(THREE);

class TrackballControls {

  constructor(camera, domElement) {

    //this.controls = new TControls(camera, domElement); // TODO: Fix controls
    this.controls = new OrbitControls(camera);
  }

}

export default TrackballControls;