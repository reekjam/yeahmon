import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class Scoreboard extends React.Component {
  render() {
    const { playerScore, cpuScore } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.score}>Your Score: {playerScore}</Text>
        <Text style={styles.score}>CPU Score: {cpuScore}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgreen'
  },
  score: {
    fontSize: 20,
    color: 'white'
  }
})
