import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './Main';
import AddScreen from '../components/main/Add/Add';
import SaveScreen from '../components/main/Save';

const { Navigator, Screen } = createStackNavigator();

function AppMain() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
        <Screen name="AddScreen" component={AddScreen} options={{ headerShown: false }} />
        <Screen name="Save" component={SaveScreen} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppMain;