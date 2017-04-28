import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HelloButtonJSX }  from './components/HelloButton/HelloButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Get Reactive --- Demo</h2>
        </div>
        <hr />
        <div className="App-intro">
          <h3>Demo</h3>
          <em>This component is in src/components/HelloButton</em>
          <br /><br />
          <HelloButtonJSX >Click me </HelloButtonJSX>
        </div>
        <hr />
      </div>
    );
  }
}

export default App;
