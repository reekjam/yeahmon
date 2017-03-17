import React from 'react';
import { connect } from 'react-redux';
import { playHand } from '../actions';
import Option from '../components/Option';
import { HANDS } from '../constants';

const randomHand = () => {
  return HANDS[Math.floor(Math.random() * HANDS.length)]
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  state
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onOptionPress: () => {
      dispatch(playHand(ownProps.name, randomHand()));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Option);
