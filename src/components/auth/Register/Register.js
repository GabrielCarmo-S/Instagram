import React, { Component } from 'react';
import { View, Button, TextInput, TouchableOpacity, Text } from 'react-native';

import firebase from 'firebase'

import styles from './styles'

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: ''
    }

    this.onSignUp = this.onSignUp.bind(this)
  }

  onSignUp() {
    const { email, password, name } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase.firestore().collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email
          })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.text}>Bem Vindos,</Text>
          <Text style={styles.text}>Faça o cadastro para continuar!</Text>
        </View>
        <View style={styles.inputcontainer}>
          <Text>Nome</Text>
          <TextInput style={styles.input} onChangeText={(name) => this.setState({ name })} />

          <Text>Email</Text>
          <TextInput style={styles.input} onChangeText={(email) => this.setState({ email })} />

          <Text>Senha</Text>
          <TextInput style={styles.input} secureTextEntry={true} onChangeText={(password) => this.setState({ password })} />

          <TouchableOpacity style={styles.registro} onPress={() => this.onSignUp()}>
            <Text style={styles.text}>Registre-se</Text>
          </TouchableOpacity>

        </View>


      </View>
    )
  }

}

export default Register