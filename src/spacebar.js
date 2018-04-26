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
      if (e.keyCode === 16) {
        soundque.push(16);
      }
      if (e.keyCode === 32) {
        this.setState({ playing: 'space clicked' });
        if (this.state.audio) {
          this.state.audio.currentTime = 0;
          this.state.audio.play();
        }
        setTimeout(() => {
          this.setState({ playing: 'space' });
        }, 50);
      }
      if (soundque.length) {
        this.state.audio.loop = true;
      }
    });
    window.addEventListener('keyup', e => {
      if (e.keyCode === 16) {
        soundque.pop();
      }
      if (!soundque.length) {
        this.state.audio.loop = false;
      }
    });
  }

  render() {
    return (
      <Dropzone className={this.state.playing}>
        <div />
      </Dropzone>
    );
  }
}
