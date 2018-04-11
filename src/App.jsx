import React from 'react';
import { Component } from 'react';
import ModelView from './components/views/ModelView';

class App extends Component {

  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <ModelView url={'http://people.sc.fsu.edu/~jburkardt/data/obj/airboat.obj'}/>
      </div>
    );
  }
}

export default App;