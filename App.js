import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import reducer from './reducers';
import Game from './components/Game';

export default class App extends React.Component {
  render() {
    const store = createStore(reducer);

    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}
