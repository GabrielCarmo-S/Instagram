import React, { Component } from 'react'

import { View, Text } from 'react-native';

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

import AppStack from './src/routes/AppStack';
import AppMain from './src/routes/AppMain';
import Loading from './src/screens/Loading';

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
        <Loading />
      )
    }

    if (!loggedIn) {
      return (
        <AppStack />
      );
    }

    return (
      <Provider store={store} style={{flex: 1}}>
        <AppMain />
      </Provider>
    )
  }
}

export default App

