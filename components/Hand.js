import React, { PropTypes } from 'react';
import {
  Animated,
  Text,
  StyleSheet
} from 'react-native';
import { mapNameToEmoji } from '../helpers/emoji-mapper';

export default class Hand extends React.Component {
  static propTypes = {
    hand: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(1)
    }
  }

  componentWillReceiveProps() {
    if (this.props.isCpu === true) {
      this.state.bounceValue.setValue(0);
      Animated.sequence([
        Animated.delay(1000),
        this._springAnimation()
      ]).start()
    } else {
      this.state.bounceValue.setValue(2)
      this._springAnimation().start()
    }
  }

  _springAnimation() {
    return Animated.spring(
      this.state.bounceValue,
      {
        toValue: 1,
        friction: 5
      }
    )
  }

  render() {
    const { hand, isCpu } = this.props;

    return (
      <Animated.Text style={{
        fontSize: 70,
        transform: [
          {scale: this.state.bounceValue}
        ]
      }}
      >
      {mapNameToEmoji(hand)}
      </Animated.Text>
    )
  }
}
