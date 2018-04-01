import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ModelView from './components/views/ModelView';


class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '100%', width: '100%'}}>
        <ModelView url={''}>
        </ModelView>
      </div>
    );
  }
}

export default App;
