import React, { Component } from 'react';
import { connect } from "react-redux";
import { run, out, newGame } from '../../actions';

import ScoreBoard from '../../components/Scoreboard';
import Buttons from '../../components/Buttons';

class WithRedux extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="recordContainer">
        <ScoreBoard innings={this.props.innings} homeTotal={this.props.homeTotal} visitorTotal={this.props.visitorTotal} outs={this.props.outs} end={this.props.gameEnd} />
        <Buttons out={this.props.handleOut} run={this.props.handleRun} end={this.props.gameEnd} newGame={this.props.handleNewGame} />
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    innings: state.innings,
    homeTotal: state.homeTotal,
    visitorTotal: state.visitorTotal,
    outs: state.outs,
    gameEnd: state.gameEnd
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleRun: () => {
      return dispatch(run())
    },
    handleOut: () => {
      return dispatch(out())
    },
    handleNewGame: () => {
      return dispatch(newGame())
    }
  }
}

WithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(WithRedux);

export default WithRedux;