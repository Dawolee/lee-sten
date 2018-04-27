import React, { Component } from 'react';

export default class RecordButtons extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="wrapper">
        <div id="buttons">
          <button className="record">Record</button>
          <button className="stop">Stop</button>
        </div>
        <section className="sound-clips" />
      </div>
    );
  }
}
