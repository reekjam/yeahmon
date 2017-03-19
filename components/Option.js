import React, { PropTypes } from 'react';
import {
  Text,
  TouchableHighlight,
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
      <View style={styles.option}>
        <TouchableHighlight onPress={onOptionPress} style={styles.optionHand}>
          <Text style={styles.optionText}>{mapNameToEmoji(name)}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  option: {
    flex: 1,
  },
  optionHand: {
    alignItems: 'center'
  },
  optionText: {
    fontSize: 40,
  },
})
