import React, { Component } from 'react';
import { hihat } from './sounds';
import Dropzone from 'react-dropzone';

export default class Spacebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: null,
      assigned: false,
      playing: 'space'
    };
  }

  componentDidMount() {
    if (!this.state.assigned) {
      this.setState({ audio: hihat });
    }
    let soundque = [];
    window.addEventListener('keydown', e => {
      let sound = this.state.audio;
      if (e.keyCode === 16) {
        soundque.push(16);
      }
      if (e.keyCode === 32) {
        this.setState({ playing: 'space clicked' });
        if (sound) {
          sound.currentTime = 0;
          sound.play();
        }
        setTimeout(() => {
          this.setState({ playing: 'space' });
        }, 50);
      }
      if (soundque.length) {
        sound.loop = true;
      }
    });
    window.addEventListener('keyup', e => {
      let sound = this.state.audio;
      if (e.keyCode === 16) {
        soundque.pop();
      }
      if (!soundque.length) {
        sound.loop = false;
      }
    });
  }

  render() {
    return (
      <Dropzone className={this.state.playing}>
        <div className="assigned">Ready</div>
      </Dropzone>
    );
  }
}
