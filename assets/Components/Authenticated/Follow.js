import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Follow extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text> Follow </Text>
        <Button
          title="Author"
          onPress={() => { navigation.navigate('Author'); }}
        />
        <Button
          title="Post"
          onPress={() => { navigation.navigate('Post'); }}
        />
      </View>
    );
  }
}
