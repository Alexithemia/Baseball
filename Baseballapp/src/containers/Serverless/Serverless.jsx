import React, { Component } from 'react';

import ScoreBoard from '../../components/ScoreBoard';
import Buttons from '../../components/Buttons';

class Serverless extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vistorTotal: 0,
      homeTotal: 0,
      outs: 0,
      innings: [0],
      gamePosition: 0
    };

    this.handleSubmit = this.handleOut.bind(this);
    this.handleInputChange = this.handleRun.bind(this);
  }

  handleOut(e) {
    this.setState({ outs: this.state.outs += 1 });
    if (this.state.outs === 3) {
      this.setState({ outs: 0 });
      this.setState({ innings: [...this.state.innings, 0] });
      this.setState({ gamePosition: this.state.gamePosition += 1 });
    }
  }

  handleRun(e) {
    var tempInnings = this.state.innings;
    tempInnings[this.state.gamePosition] += 1;
    this.setState({ innings: tempInnings });
    if ((this.state.gamePosition % 2) === 0) {
      this.setState({ vistorTotal: this.state.vistorTotal += 1 });
    } else {
      this.setState({ homeTotal: this.state.homeTotal += 1 });
    }
  }

  render() {
    return (
      <div className="RecordContainer">
        <ScoreBoard innings={this.props.innings} homeTotal={this.props.homeTotal} vistorTotal={this.props.vistorTotal} />
        <Buttons out={this.handleOut} run={this.handleRun} />
      </div>
    )
  }
};


export default Serverless;