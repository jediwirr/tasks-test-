/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import MainScreen from './screens/MainScreen';

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  };
};
