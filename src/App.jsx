import React, { Component } from 'react';
import './App.css';
import ModelView from './components/views/ModelView';


class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '100%', width: '100%'}}>
        <ModelView url={''} width={window.innerWidth} height={window.innerHeight}>
        </ModelView>
      </div>
    );
  }
}

export default App;
