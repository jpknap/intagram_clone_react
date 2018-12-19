import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { authenticated } from './assets/Store/Services/FireBase';

class Seleccion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {

  }

  render() {
    return (
      <View>
        <Text> Seleccion </Text>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
  authenticated: () => {
    authenticated.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
      } else {
        console.log('user null');
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Seleccion);
