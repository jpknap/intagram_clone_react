/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Text, View, StyleSheet, TextInput, Button,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldName = props => (
  <View     style={styles.TextInput}>
    <TextInput  
      placeholder={props._placeholder}
      onChangeText={props.input.onChange}
      value={props.input.value}
      keyboardType={props.input.name === 'correo' ? 'email-address' : 'default'}
      autoCapitalize="none"
      secureTextEntry={props.input.name === 'password' || props.input.name === 'password_confirmation'}
      onBlur={props.input.onBlur}
    />
    <View style={styles.line} />
    {props.meta.touched && props.meta.error && <Text style={styles.error}>{props.meta.error}</Text>}
  </View>
);

const validate = (values) => {
  const error = {};

  if (!values.correo) {
    error.correo = 'requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    error.correo = 'correo invalido';
  }
  if (!values.password) {
    error.password = 'requerido';
  } else if (values.password.length < 5) {
    error.password = 'debe ser al menos de 5 caracteres';
  }

  return error;
};
const styles = StyleSheet.create({
  TextInput: {
    alignSelf: 'stretch',
    marginBottom: 15,

  },
  line: {
    backgroundColor: '#DCDCDC',

    height: 2,
  },
  error: {
    color: '#ffabab',
  },
});

const SignInForm = props => (
  <View>
    <Field
      name="correo"
      _placeholder="prueba@gmail.com"
      component={fieldName}
    />
    <Field
      name="password"
      _placeholder="ingrese contraseña"
      component={fieldName}
    />
    <Text>Redux Form</Text>
    <Button
      title="Ingresar"
      onPress={props.handleSubmit((values) => { console.log(values); })}
    />


  </View>);

export default reduxForm({ form: 'SignInForm', validate })(SignInForm);
