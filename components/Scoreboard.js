import React, { PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class Scoreboard extends React.Component {
  static propTypes = {
    playerHand: PropTypes.string.isRequired,
    cpuHand: PropTypes.string.isRequired,
    playerScore: PropTypes.number.isRequired,
    cpuScore: PropTypes.number.isRequired,
    results: PropTypes.object.isRequired
  }

  render() {
    const {
      playerHand,
      cpuHand,
      playerScore,
      cpuScore,
      results
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.verdict}>
          <Text>{results.verdict}</Text>
          <Text>{playerHand}{results.descriptor}{cpuHand}</Text>
        </View>
        <View style={styles.scores}>
          <Text style={styles.score}>Your Score: {playerScore}</Text>
          <Text style={styles.score}>CPU Score: {cpuScore}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgreen'
  },
  scores: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  score: {
    fontSize: 20,
    color: 'white'
  },
  verdict: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
