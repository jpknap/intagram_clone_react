import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Post extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text> Author </Text>
        <Button
          title="Author"
          onPress={() => {
            navigation.navigate('Author');
          }}
        />
        <Text> Comments </Text>
        <Button
          title="comments"
          onPress={() => {
            navigation.navigate('Comments');
          }}
        />
      </View>
    );
  }
}
