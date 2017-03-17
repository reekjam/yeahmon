import React, { PropTypes } from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
} from 'react-native';

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
        <TouchableHighlight onPress={onOptionPress} style={styles[name]}>
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
