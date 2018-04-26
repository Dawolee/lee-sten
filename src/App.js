import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import KeyBoard from './keyBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lee-sten: Create some sick beats yo!</h1>
        </header>
        <KeyBoard />
      </div>
    );
  }
}

export default App;
