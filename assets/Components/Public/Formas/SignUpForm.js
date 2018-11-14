import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TextInput, Button,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { authenticated } from '../../../Store/Services/FireBase';

// styless component
const fieldName = props => (
  <View style={styles.TextInput}>
    <TextInput
      placeholder={props._placeholder}
      onChangeText={props.input.onChange}
      value={props.input.value}
      keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
      autoCapitalize="none"
      secureTextEntry={props.input.name === 'password' || props.input.name === 'password_confirmation'}
      onBlur={props.input.onBlur}
    />
    <View style={styles.line}>
      {props.meta.touched && props.meta.error && <Text style={styles.error}>{props.meta.error}</Text>}
    </View>
  </View>
);
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

const validate = (values) => {
  const error = {};
  if (!values.nombre) {
    error.nombre = 'requerido';
  } else if (values.nombre.length < 5) {
    error.nombre = 'debe ser al menos de 5 caracteres';
  } else if (values.nombre.length > 10) {
    error.nombre = 'no debe superar los 10 caracteres';
  }
  if (!values.email) {
    error.email = 'requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = 'correo invalido';
  }
  if (!values.password) {
    error.password = 'requerido';
  } else if (values.password.length < 5) {
    error.password = 'debe ser al menos de 5 caracteres';
  }
  if (!values.password_confirmation) {
    error.password_confirmation = 'requerido';
  } else if (values.password !== values.password_confirmation) {
    error.password_confirmation = 'No coinciden los campos';
  }
  return error;
};

const SignUpForm = props => (
  <View>
    <Field
      name="nombre"
      _placeholder="Ingresa el nombre"
      component={fieldName}
    />
    <Field
      name="email"
      _placeholder="prueba@gmail.com"
      component={fieldName}
    />
    <Field
      name="password"
      _placeholder="ingrese contraseña"
      component={fieldName}
    />
    <Field
      name="password_confirmation"
      _placeholder="repita contraseña"
      component={fieldName}
    />
    <Text>Redux Form</Text>
    <Button
      title="Registrar"
      onPress={props.handleSubmit((values) => {
        console.log(values);
        authenticated.createUserWithEmailAndPassword(values.email, values.password)
          .then((success) => {
            console.log(success);
          })
          .catch((error) => {
            console.log(error);
          });
      })}
    />


  </View>);

export default reduxForm({ form: 'SignUpForm', validate })(SignUpForm);
