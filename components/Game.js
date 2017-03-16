import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Option from './Option';

export default class Game extends React.Component {
  render() {
    const options = [
      'paper',
      'scissors',
      'rock'
    ]

    return (
      <View style={styles.container}>
        {options.map((option, i) => {
          return (
            <Option key={i} name={option} />
          );
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
