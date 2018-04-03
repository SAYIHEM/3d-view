import React from 'react';
import { Component } from 'react';
import ModelView from './components/views/ModelView';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      style: {
        width: '100%',
        height: '100%'
      }
    }
  }

  render() {
    return (
      <div
        style={this.state.style}
        // onClick={this.handleClick.bind(this)}
      >
        <ModelView url={'http://people.sc.fsu.edu/~jburkardt/data/obj/airboat.obj'}/>
      </div>
    );
  }

  handleClick() {
    this.setState({
      style: {
        width: '200px',
        height: '200px'
      }
    })
  }
}

export default App;