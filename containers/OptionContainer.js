import React from 'react';
import { connect } from 'react-redux';
import { startMatch } from '../actions';
import Option from '../components/Option';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  state
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onOptionPress: () => {
      dispatch(startMatch(ownProps.name));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Option);
