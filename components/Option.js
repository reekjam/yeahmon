import React, { PropTypes } from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
} from 'react-native';
import { HANDS } from '../constants';

export default class Option extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }
  static displayName = 'Option'

  constructor(props) {
    super(props);

    this.play = this.play.bind(this);
  }

  randomHand() {
    return HANDS[Math.floor(Math.random() * HANDS.length)]
  }

  play() {
    const playerHand = this.props.name;
    const randomHand = this.randomHand();

    this.compareHands(playerHand, randomHand)
  }

  compareHands(playerHand, cpuHand) {
    if (playerHand === cpuHand) {
      console.log('tie game')
    }

    const playerIndex = HANDS.indexOf(playerHand);
    const cpuIndex = HANDS.indexOf(cpuHand);

    if (HANDS[(playerIndex + 1) % HANDS.length] == cpuHand) {
      console.log('you lose')
    }

    if (HANDS[(playerIndex + 2) % HANDS.length] == cpuHand) {
      console.log('you win')
    }
  }

  render() {
    const { name } = this.props;
    return (
      <View style={styles.option}>
        <TouchableHighlight onPress={this.play} style={styles[name]}>
          <Text style={styles.optionText}>{ name }</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  option: {
    flex: 1,
  },
  optionText: {
    fontSize: 26,
    color: 'white'
  },
  paper: {
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  scissors: {
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  rock: {
    backgroundColor: 'purple',
    alignItems: 'center',
  }
})
