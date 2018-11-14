import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text> Search </Text>
        <Button
          title="publicacion"
          onPress={() => { navigation.navigate('Post'); }}
        />
      </View>
    );
  }
}
