import React from 'react';
import { connect } from 'react-redux';
import Option from '../components/Option';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  state
})

export default connect(mapStateToProps)(Option);
