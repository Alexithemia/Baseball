import React from 'react';

const ScoreBoard = (props) => {

  return (
    <div className="scoreBoard">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>RUNS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Visitor</td>
            <td bgcolor={props.position === 0 ? "yellow" : ""}>{props.innings[0] || props.innings[0] === 0 ? props.innings[0] : ''}</td>
            <td bgcolor={props.position === 2 ? "yellow" : ""}>{props.innings[2] || props.innings[2] === 0 ? props.innings[2] : ''}</td>
            <td bgcolor={props.position === 4 ? "yellow" : ""}>{props.innings[4] || props.innings[4] === 0 ? props.innings[4] : ''}</td>
            <td>{props.visitorTotal}</td>
          </tr>
          <tr>
            <td>Home</td>
            <td bgcolor={props.position === 1 ? "yellow" : ""}>{props.innings[1] || props.innings[1] === 0 ? props.innings[1] : ''}</td>
            <td bgcolor={props.position === 3 ? "yellow" : ""}>{props.innings[3] || props.innings[3] === 0 ? props.innings[3] : ''}</td>
            <td bgcolor={props.position === 5 ? "yellow" : ""}>{props.innings[5] || props.innings[5] === 0 ? props.innings[5] : ''}</td>
            <td>{props.homeTotal}</td>
          </tr>
        </tbody>
      </table>
      <div className="outs" hidden={props.end}>Outs: {props.outs}</div>
      <div className="gameOver" hidden={!props.end}>Game Over! {props.visitorTotal === props.homeTotal ? 'Tie Game!' : props.visitorTotal > props.homeTotal ? 'Visitor Team Wins!' : 'Home Team Wins!'}</div>
    </div>
  );
}


export default ScoreBoard;
