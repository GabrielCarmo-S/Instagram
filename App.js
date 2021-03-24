import React, { Component } from 'react'

import { View, Button, Text } from 'react-native';

import firebase from 'firebase/app';
import 'firebase/firestore';


import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/redux/reducers'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

const firebaseConfig = {
  apiKey: "AIzaSyCfPqagwoLXG4Jj0DJsxUrtkx-LxCGmMI8",
  authDomain: "instagram-c7e98.firebaseapp.com",
  projectId: "instagram-c7e98",
  storageBucket: "instagram-c7e98.appspot.com",
  messagingSenderId: "991378470933",
  appId: "1:991378470933:web:f68a1e7364a298fa15361c",
  measurementId: "G-8ZCGZGEL9X"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from './src/components/auth/Register/Register'
import LoginScreen from './src/components/auth/Login/Login'
import MainScreen from './src/components/Main'
import AddScreen from './src/components/main/Add/Add';
import SaveScreen from './src/components/main/Save';

const Stack = createStackNavigator();

console.ignoredYellowBox = [
  'Setting a timer'
]

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <Provider store={store}>
        <NavigationContainer >
          <Stack.Navigator>
            <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Add" component={AddScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Save" component={SaveScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App

