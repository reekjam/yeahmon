import React, { PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import { mapNameToEmoji } from '../helpers/emoji-mapper';

export default class Option extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onOptionPress: PropTypes.func.isRequired,
  }
  static displayName = 'Option'

  render() {
    const { name, onOptionPress } = this.props;

    return (
      <TouchableOpacity onPress={onOptionPress} style={styles.optionHand}>
        <Text style={styles.optionText}>{mapNameToEmoji(name)}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  optionHand: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 40,
    paddingBottom: 10
  },
})
