import React, { Component } from 'react';
import './App.css';
import KeyBoard from './keyBoard';
import RecorderButtons from './recorderButtons';
import Canvas from './canvas';
import audioHelperFunc from './audioAPIHelper';
import YouTubePlayer from './youtubePlayer';

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
        <div className="main-components">
          <RecorderButtons />
          <KeyBoard className="keyboard-body" />
          <YouTubePlayer className="youtube-body" />
        </div>
      </div>
    );
  }
}

export default App;
