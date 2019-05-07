import React from 'react';

const ScoreBoard = (props) => {

  return (
    <div className="scoreBoard">
      <table>
        <tr>
          <th></th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>RUNS</th>
        </tr>
        <tr>
          <td>Visitor</td>
          <td>{props.innings[0] || props.innings[0] === 0 ? props.innings[0] : ''}</td>
          <td>{props.innings[2] || props.innings[2] === 0 ? props.innings[2] : ''}</td>
          <td>{props.innings[4] || props.innings[4] === 0 ? props.innings[4] : ''}</td>
          <td>{props.visitorTotal}</td>
        </tr>
        <tr>
          <td>Home</td>
          <td>{props.innings[1] || props.innings[1] === 0 ? props.innings[1] : ''}</td>
          <td>{props.innings[3] || props.innings[3] === 0 ? props.innings[3] : ''}</td>
          <td>{props.innings[5] || props.innings[5] === 0 ? props.innings[5] : ''}</td>
          <td>{props.homeTotal}</td>
        </tr>
      </table>
      <div>Outs: {props.outs}</div>
    </div>
  );
}


export default ScoreBoard;
