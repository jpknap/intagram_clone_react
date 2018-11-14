import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text> textInComponent </Text>
        <Button
          title="post"
          onPress={() => {
            navigation.navigate('Post');
          }}
        />
      </View>
    );
  }
}
