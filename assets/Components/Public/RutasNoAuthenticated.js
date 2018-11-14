/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import SignIn from './Signin';
import SignUp from './SignUp';

const RutasNoAuthenticated = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Titulo no desde el stack',
      header: null,

    },
  },
  SignUp: {
    navigationOptions: {
      title: 'Titulo no desde el stack',
    },
    screen: SignUp,
  },
},
{
  headerMode: '',
  navigationOptions: {
    title: 'Titulo desde el stack',
  },
});
// eslint-disable-next-line import/prefer-default-export
export { RutasNoAuthenticated };
