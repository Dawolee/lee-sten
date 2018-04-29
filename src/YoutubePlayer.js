import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class YouTubePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://www.youtube.com/watch?v=Dy4HA3vUv2c',
      urlfield: '',
      playing: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false
    };
  }

  urlUpdate = e => {
    let link = this.state.urlfield;
    this.setState({ url: link });
  };

  urlOnChange = e => {
    this.setState({ urlfield: e.target.value });
  };

  toggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) });
  };
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };
  onSeekMouseDown = e => {
    this.setState({ seeking: true });
  };
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) });
  };
  onSeekMouseUp = e => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };
  ref = player => {
    this.player = player;
  };
  playPause = () => {
    this.setState({ playing: !this.state.playing });
  };
  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) });
  };
  onProgress = state => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };
  render() {
    return (
      <div className="youtube-body">
        <div className="url-bar">
          <input
            type="text"
            name="ytURL"
            placeholder="YouTube link here!"
            onChange={this.urlOnChange}
          />
          <button onClick={this.urlUpdate}>Load Song</button>
        </div>
        <ReactPlayer
          width="0px"
          height="0px"
          url={this.state.url}
          playing={this.state.playing}
          loop={this.state.loop}
          playbackRate={this.state.playbackRate}
          volume={this.state.volume}
          muted={this.state.muted}
          ref={this.ref}
          onProgress={this.onProgress}
        />
        <div>
          <p>Volume Control</p>
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={this.state.volume}
            onChange={this.setVolume}
          />
        </div>
        <div>
          <label htmlFor="muted">Muted</label>
          <input
            id="muted"
            type="checkbox"
            checked={this.state.muted}
            onChange={this.toggleMuted}
          />
        </div>
        <progress max={1} value={this.state.played} />
        <div>
          <p>Progress Control</p>
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={this.state.played}
            onMouseDown={this.onSeekMouseDown}
            onChange={this.onSeekChange}
            onMouseUp={this.onSeekMouseUp}
          />
        </div>
        <div>
          <button onClick={this.playPause}>
            {this.state.playing ? 'Pause' : 'Play'}
          </button>
          <button onClick={this.setPlaybackRate} value={1}>
            1
          </button>
          <button onClick={this.setPlaybackRate} value={1.5}>
            1.5
          </button>
          <button onClick={this.setPlaybackRate} value={2}>
            2
          </button>
        </div>
      </div>
    );
  }
}
