import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainCounter from './components/Counter/MainCounter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Tutorials --- Demos</h2>
        </div>
        <hr />
        <div className="App-intro">
          <h3>Demo 1</h3>
          <h4>Counter -- Increment and Decrement</h4>
          <em>This component is in src/components/counter</em>
        </div>
        <MainCounter />
        <hr />
      </div>
    );
  }
}

export default App;
