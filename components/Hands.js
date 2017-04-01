import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Hand from './Hand';

export default class Hands extends React.Component {
  static propTypes = {
    playerHand: PropTypes.string.isRequired,
    cpuHand: PropTypes.string.isRequired
  }

  render() {
    const { playerHand, cpuHand } = this.props;
    
    return (
      <View style={styles.hands}>
        <Hand hand={playerHand} />
        <Hand hand={cpuHand} isCpu={true} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  hands: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
  },
})
