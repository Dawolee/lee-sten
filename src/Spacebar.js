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
    const { socket } = this.props;
    socket.on('clickedToAll', val => {
      let aud = this.state.audio;
      if (this.props.keyVal === val.val) {
        this.setState({ playing: 'space assigned clicked' });
        if (this.state.audio) {
          aud.currentTime = 0;
          aud.play();
        }
        setTimeout(() => {
          this.setState({ playing: 'space assigned' });
        }, 50);
      }
    });
    window.addEventListener('keydown', e => {
      let sound = this.state.audio;
      if (e.keyCode === 32) {
        socket.emit('click', this.props.keyVal);
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
