import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'Manny',
      }
    }
  }

  componentDidMount() {
    console.log('Component just loaded');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.user.name}, Welcome to React</h2>
        </div>
        <Intro user={this.state.user}/>
      </div>
    );
  }
}

export default App;
