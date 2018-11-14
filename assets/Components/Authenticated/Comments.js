import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Comments extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  }

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text> Comments </Text>
        <Button
          title="Author"
          onPress={() => {
            navigation.navigate('Author');
          }}
        />
      </View>
    );
  }
}
