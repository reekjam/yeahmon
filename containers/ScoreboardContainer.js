import React from 'react';
import { connect } from 'react-redux';
import Scoreboard from '../components/Scoreboard';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  playerHand: state.playerHand,
  cpuHand: state.cpuHand,
  playerScore: state.playerScore,
  cpuScore: state.cpuScore,
  results: state.results
})

export default connect(
  mapStateToProps
)(Scoreboard);
