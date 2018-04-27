import React, { Component } from 'react';

export default class RecordButtons extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="recorder-btns">
        <p>Record a custom sound!</p>
        <button className="record">Record</button>
        <button className="stop">Stop</button>
        <section id="soundClips" />
      </div>
    );
  }
}
