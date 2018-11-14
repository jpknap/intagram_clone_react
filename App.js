import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Provider da acceso a la Store a los elementos de REact
import { Provider } from 'react-redux';
import Store from './assets/Store/Store';
import { RutasNoAuthenticated } from './assets/Components/Public/RutasNoAuthenticated';
import { RutasAuthenticated } from './assets/Components/Authenticated/RutasAuthenticated';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    console.disableYellowBox = true;
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <RutasNoAuthenticated />
        </Provider>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
    // paddingTop: Constants.statusBarHeight,

  },
});
