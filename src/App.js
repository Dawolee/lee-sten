import React, { Component } from 'react';
import './App.css';
import KeyBoard from './KeyBoard';
import RecorderButtons from './RecorderButtons';
import Canvas from './canvas';
import audioHelperFunc from './audioAPIHelper';
import YouTubePlayer from './YoutubePlayer';
import Metronome from './Metronome';
import socketIOClient from 'socket.io-client';
const socket = socketIOClient('exampleipfollowedbyport3001');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joined: false,
      left: false
    };
  }
  componentDidMount() {
    audioHelperFunc();
  }

  render() {
    socket.on('joined', () => {
      console.log('someone has joined the room!');
    });
    socket.on('left', () => {
      console.log('someone has left the room!');
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lee-sten : Da Woon and Only</h1>
          <Canvas />
        </header>
        <div className="main-components">
          <RecorderButtons />
          <KeyBoard socket={socket} />
          <YouTubePlayer />
        </div>
        <Metronome />
        <section id="soundClips" />
      </div>
    );
  }
}

export default App;
