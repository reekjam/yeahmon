import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { StyleSheet, Text, View } from 'react-native';
import reducer from './reducers';
import Game from './components/Game';

export default class App extends React.Component {
  render() {
    const store = createStore(
      reducer,
      applyMiddleware(thunk)
    );

    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}
