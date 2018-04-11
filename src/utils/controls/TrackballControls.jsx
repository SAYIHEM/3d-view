import React from 'react';
import { Component } from 'react';
import * as THREE from 'three';
let TControls = require('three-trackballcontrols');

class TrackballControls {

  constructor(camera, domElement) {

    this.controls = new TControls(camera, domElement); // TODO: Fix controls
  }

}

export default TrackballControls;