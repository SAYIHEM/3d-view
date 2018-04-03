import React from 'react';
import { Component } from 'react';

class SimpleBox extends Component {
  render() {
    return (
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
    );
  }
}

export default SimpleBox;