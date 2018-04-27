import React, { Component } from 'react';
import { openhat, snare, kick, ride, crash1, china } from './sounds';
import Dropzone from 'react-dropzone';

export default class SingleKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: 'key',
      assigned: false,
      audio: null
    };
  }

  addSound(acceptedFiles, rejectedFiles) {
    if (!this.state.assigned) {
      const promise = new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(acceptedFiles[0]);
        reader.onload = () => {
          if (!!reader.result) {
            resolve(reader.result);
          } else {
            reject(Error('Failed converting to base64'));
          }
        };
      });
      promise
        .then(result => {
          let sound = new Audio(result);
          this.setState({ assigned: true });
          this.setState({ audio: sound });
          this.setState({ playing: 'key assigned' });
        })
        .catch(err => console.log(err));
    }
  }

  componentDidMount() {
    if (!this.state.assigned) {
      if (this.props.keyVal === 90) {
        this.setState({ audio: kick });
        this.setState({ assigned: true });
        this.setState({ playing: 'key assigned' });
      } else if (this.props.keyVal === 88) {
        this.setState({ audio: kick });
        this.setState({ assigned: true });
        this.setState({ playing: 'key assigned' });
      } else if (this.props.keyVal === 67) {
        this.setState({ audio: openhat });
        this.setState({ assigned: true });
        this.setState({ playing: 'key assigned' });
      } else if (this.props.keyVal === 86) {
        this.setState({ audio: china });
        this.setState({ assigned: true });
        this.setState({ playing: 'key assigned' });
      } else if (this.props.keyVal === 66) {
        this.setState({ audio: ride });
        this.setState({ assigned: true });
        this.setState({ playing: 'key assigned' });
      } else if (this.props.keyVal === 77) {
        this.setState({ audio: snare });
        this.setState({ assigned: true });
        this.setState({ playing: 'key assigned' });
      } else if (this.props.keyVal === 78) {
        this.setState({ audio: crash1 });
        this.setState({ assigned: true });
        this.setState({ playing: 'key assigned' });
      }
    }
    window.addEventListener('keydown', e => {
      let sound = this.state.audio;
      if (e.keyCode === this.props.keyVal) {
        this.state.assigned
          ? this.setState({ playing: 'key assigned clicked' })
          : this.setState({ playing: 'key clicked' });
        if (sound) {
          sound.currentTime = 0;
          sound.play();
        }
        setTimeout(() => {
          this.state.assigned
            ? this.setState({ playing: 'key assigned' })
            : this.setState({ playing: 'key' });
        }, 50);
      }
    });
  }

  render() {
    return (
      <Dropzone
        onDrop={this.addSound.bind(this)}
        className={this.state.playing}
      />
    );
  }
}
