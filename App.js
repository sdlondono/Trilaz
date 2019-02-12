/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import Main from './src/Main';
import createStore from './src/store';
export default class App extends Component {


  render() {
    const store = createStore();
    return (
      <Provider store={store} >
        <Main />
        </Provider>

    )

  }

}


