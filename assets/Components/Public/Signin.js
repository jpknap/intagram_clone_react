import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import { connect } from 'react-redux';
import SignInForm from './Formas/SignInForm';

export class Signin extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>  Ingresar </Text>
        <SignInForm />
        <Button
          title="Registrar"
          onPress={() => { navigation.navigate('SignUp'); }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
});


const mapStateToProps = state => ({
  numero: state.reducerDemo,
});

const mapDispatchToProps = dispatch => ({
  aumentar: () => {
    dispatch({ type: 'AUMENTAR_REDUCER_PRUEBA' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
