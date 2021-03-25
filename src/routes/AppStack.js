import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from '../components/auth/Register/Register'
import LoginScreen from '../components/auth/Login/Login'

const {Navigator, Screen} = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer style={{flex: 1}}>
      <Navigator>
        <Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Screen name="Register" component={RegisterScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;