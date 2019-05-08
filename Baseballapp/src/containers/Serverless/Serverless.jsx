import React, { Component } from 'react';

import ScoreBoard from '../../components/Scoreboard';
import Buttons from '../../components/Buttons';

class Serverless extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vistorTotal: 0,
      homeTotal: 0,
      outs: 0,
      innings: [0],
      gamePosition: 0,
      gameEnd: false
    };

    this.handleOut = this.handleOut.bind(this);
    this.handleRun = this.handleRun.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleOut() {
    this.setState({ outs: this.state.outs + 1 }, () => {
      if (this.state.outs === 3) {
        this.setState({ outs: 0 });
        this.setState({ innings: [...this.state.innings, 0] });
        this.setState({ gamePosition: this.state.gamePosition + 1 }, () => {
          if (this.state.gamePosition > 5) {
            this.setState({ gameEnd: true });
          }
        });
      }
    })
  }

  handleRun() {
    var tempInnings = this.state.innings;
    tempInnings[this.state.gamePosition] += 1;
    this.setState({ innings: tempInnings });
    if ((this.state.gamePosition % 2) === 0) {
      this.setState({ vistorTotal: this.state.vistorTotal + 1 });
    } else {
      this.setState({ homeTotal: this.state.homeTotal + 1 });
    }
  }

  handleNewGame() {
    this.setState({
      vistorTotal: 0,
      homeTotal: 0,
      outs: 0,
      innings: [0],
      gamePosition: 0,
      gameEnd: false
    });
  }

  render() {
    return (
      <div className="recordContainer">
        <ScoreBoard innings={this.state.innings} homeTotal={this.state.homeTotal} visitorTotal={this.state.vistorTotal} outs={this.state.outs} end={this.state.gameEnd} />
        <Buttons out={this.handleOut} run={this.handleRun} end={this.state.gameEnd} newGame={this.handleNewGame} />
      </div>
    )
  }
};


export default Serverless;