import React from 'react';
import { Component } from 'react';
import ModelView from './components/views/ModelView';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      width: '200',
      height: '200'
    }
  }

  render() {
    return (
      <div
        style={{width: this.state.width, height: this.state.height}}
        onClick={this.handleClick.bind(this)}
      >
        <ModelView/>
      </div>
    );
  }

  handleClick() {
    this.setState({
      width: '100',
      height: '100'
    })
  }
}

export default App;