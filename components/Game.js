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
        <ScoreboardContainer />
        <View style={styles.container}>
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
    flexDirection: 'column'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
