import React, { Component } from 'react';
import { View, Button, TextInput, Text, TouchableOpacity } from 'react-native';

import firebase from 'firebase'

import styles from './styles'

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    this.onSignUp = this.onSignUp.bind(this)
  }
  onSignUp() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.text}>Bem Vindos,</Text>
          <Text style={styles.text}>Faça o login para continuar!</Text>
        </View>
        <View style={styles.inputcontainer}>
          <Text>Email</Text>
          <TextInput style={styles.input} onChangeText={(email) => this.setState({ email })} />

          <Text>Senha</Text>
          <TextInput style={styles.input} secureTextEntry={true} onChangeText={(password) => this.setState({ password })} />

          <TouchableOpacity style={styles.entrar} onPress={() =>  this.onSignUp()}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('Register') }}>
          <Text style={styles.text}>Crie uma conta</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

export default Login;