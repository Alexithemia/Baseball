import React from 'react';

const Buttons = (props) => {

  return (
    <div className="buttons">
      <button onClick={props.out}>Out</button>
      <button onClick={props.run}>Run</button>
    </div>
  );
}


export default Buttons;
