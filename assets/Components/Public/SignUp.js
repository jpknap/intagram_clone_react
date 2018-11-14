import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button, TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SignUpForm';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Hola mundo  </Text>
        <SignUpForm />
        <Button
          title="SignUo"
          onPress={() => { navigation.goBack(); }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    backgroundColor: '#0000',
    // paddingTop: Constants.statusBarHeight,

  },
});


const mapStateToProps = state => ({
  numero: state.reducerDemo,

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
