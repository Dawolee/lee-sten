import React, { Component } from 'react';
import './App.css';
import KeyBoard from './keyBoard';
import RecorderButtons from './recorderButtons';
import Canvas from './canvas';
import audioHelperFunc from './audioAPIHelper';

class App extends Component {
  componentDidMount() {
    audioHelperFunc();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lee-sten : Da Woon and Only</h1>
          <Canvas />
        </header>
        <KeyBoard />
        <RecorderButtons />
      </div>
    );
  }
}

export default App;
