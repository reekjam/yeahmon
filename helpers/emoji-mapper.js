import React from 'react';
import Emoji from 'react-native-emoji';

export const mapNameToEmoji = (name) => {
  switch (name) {
    case 'paper':
      return (
        <Emoji name='hand' />
      );
      break;
    case 'scissors':
      return (
        <Emoji name='v' />
      );
      break;
    case 'rock':
      return (
        <Emoji name='fist' />
      );
      break;
    default:
      return '';
      break;
  }
}
