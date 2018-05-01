import React, { Component } from 'react';
import KeyBoardRow from './KeyBoardRow';
import Spacebar from './Spacebar';

export default class KeyBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row1: [49, 50, 51, 52, 53, 54, 55, 56, 57, 48],
      row2: [81, 87, 69, 82, 84, 89, 85, 73, 79, 80],
      row3: [65, 83, 68, 70, 71, 72, 74, 75, 76],
      row4: [90, 88, 67, 86, 66, 78, 77]
    };
  }

  render() {
    return (
      <div className="keyboard">
        {Object.keys(this.state).map(row => {
          return (
            <KeyBoardRow
              key={row}
              keyValues={this.state[row]}
              socket={this.props.socket}
            />
          );
        })}
        <Spacebar keyVal={32} socket={this.props.socket} />
      </div>
    );
  }
}
