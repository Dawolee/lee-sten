import React, { Component } from 'react';
import './App.css';
import KeyBoard from './KeyBoard';
import RecorderButtons from './RecorderButtons';
import Canvas from './canvas';
import audioHelperFunc from './audioAPIHelper';
import YouTubePlayer from './YoutubePlayer';
import Metronome from './Metronome';

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
          <KeyBoard />
          <YouTubePlayer />
        </div>
        <Metronome />
        <section id="soundClips" />
      </div>
    );
  }
}

export default App;
