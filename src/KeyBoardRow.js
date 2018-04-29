import React from 'react';
import SingleKey from './SingleKey';

export default props => {
  return (
    <div className="keyboard-row">
      {props.keyValues.map(key => {
        return <SingleKey key={key} keyVal={key} />;
      })}
    </div>
  );
};
