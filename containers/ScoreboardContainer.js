import React from 'react';
import { connect } from 'react-redux';
import Scoreboard from '../components/Scoreboard';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  playerScore: state.playerScore,
  cpuScore: state.cpuScore
})

export default connect(
  mapStateToProps
)(Scoreboard);
