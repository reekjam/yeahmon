import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { mapNameToEmoji } from '../helpers/emoji-mapper';

export default class Hands extends React.Component {
  static propTypes = {
    playerHand: PropTypes.string.isRequired,
    cpuHand: PropTypes.string.isRequired
  }

  render() {
    const { playerHand, cpuHand } = this.props;

    return (
      <View style={styles.hands}>
        <Text style={styles.hand}>{mapNameToEmoji(playerHand)}</Text>
        <Text style={styles.hand}>{mapNameToEmoji(cpuHand)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  hands: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#4D4C69',
  },
  hand: {
    fontSize: 80,
  },
})
