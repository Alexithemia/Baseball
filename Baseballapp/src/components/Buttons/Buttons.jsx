import React from 'react';

const Buttons = (props) => {

  return (
    <div className="buttons">
      <button onClick={props.out} hidden={props.end}>Out</button>
      <button onClick={props.run} hidden={props.end}>Run</button>
      <button onClick={props.newGame} hidden={!props.end}>New Game?</button>
    </div>
  );
}


export default Buttons;
