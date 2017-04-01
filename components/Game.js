import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import ScoreboardContainer from '../containers/ScoreboardContainer';
import OptionContainer from '../containers/OptionContainer';
import { handOptions } from '../constants';

export default class Game extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.scoreboard}>
          <ScoreboardContainer />
        </View>
        <View style={styles.hands}>
          {handOptions.map((option, i) => {
            return (
              <OptionContainer key={i} name={option} />
            );
          })}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  hands: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreboard: {
    flex: 5
  }
})
