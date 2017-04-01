import React from 'react';
import { connect } from 'react-redux';
import Hands from '../components/Hands';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  playerHand: state.playerHand,
  cpuHand: state.cpuHand
})

export default connect(
  mapStateToProps
)(Hands);
