import React, { Component } from 'react';
import { connect } from "react-redux";
import { runServer, outServer, newGameServer, uploadGame } from '../../actions';

import ScoreBoard from '../../components/Scoreboard';
import Buttons from '../../components/Buttons';

class WithServer extends Component {

  componentDidMount() {
    this.props.uploadGame(this.props)
  }

  render() {
    return (
      <div className="recordContainer">
        <ScoreBoard innings={this.props.innings} homeTotal={this.props.homeTotal} visitorTotal={this.props.visitorTotal} outs={this.props.outs} end={this.props.gameEnd} position={this.props.gamePosition} />
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
    gameEnd: state.gameEnd,
    gamePosition: state.gamePosition
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleRun: () => {
      return dispatch(runServer())
    },
    handleOut: () => {
      return dispatch(outServer())
    },
    handleNewGame: () => {
      return dispatch(newGameServer())
    },
    uploadGame: (props) => {
      return dispatch(uploadGame(props))
    }
  }
}

WithServer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WithServer);

export default WithServer;