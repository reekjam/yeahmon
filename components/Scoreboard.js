import React, { PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import HandsContainer from '../containers/HandsContainer';

export default class Scoreboard extends React.Component {
  static propTypes = {
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
        <View style={styles.results}>
          <Text style={styles.verdict}>{results.verdict}</Text>
        </View>
        <HandsContainer />
        <View style={styles.scores}>
          <Text style={styles.score}>{playerScore}</Text>
          <Text style={styles.score}>{cpuScore}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  results: {
    flex: 2,
    backgroundColor: '#4D4C69',
    alignItems: 'center',
    justifyContent: 'center'
  },
  verdict: {
    fontSize: 25,
    color: '#BEBF5B'
  },
  scores: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  score: {
    fontSize: 20,
    color: '#3C3740',
  }
})
