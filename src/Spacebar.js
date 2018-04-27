import React, { Component } from 'react';
import { hihat } from './sounds';
import Dropzone from 'react-dropzone';

export default class Spacebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: hihat,
      assigned: false,
      playing: 'space assigned'
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', e => {
      let sound = this.state.audio;
      if (e.keyCode === 32) {
        this.setState({ playing: 'space assigned clicked' });
        if (sound) {
          sound.currentTime = 0;
          sound.play();
        }
      }
    });
    window.addEventListener('keyup', e => {
      this.setState({ playing: 'space assigned' });
    });
  }

  render() {
    return <Dropzone className={this.state.playing} />;
  }
}
