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
      return (
        <Emoji name={randomEmoji()} />
      );
      break;
  }
}

const randomEmoji = () => {
  let options = [
    'pizza',
    'ghost',
    'jack_o_lantern',
    'robot_face',
    'skull',
    'alien',
    'taco',
    'burrito',
    'fries',
    'hamburger'
  ];

  return options[Math.floor(Math.random() * options.length)]
}
