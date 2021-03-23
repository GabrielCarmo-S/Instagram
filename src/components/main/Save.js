import React from 'react'
import { View, TextInput, Image } from 'react-native'

import firebase from 'firebase'
require("firebase/firestore")
require("firebase/firebase-storage")

export default function Save(props) {
  const [caption, setCaption] = useState("")
 
  const uploadImage = async () => {
    const uri = props.route.params.image;

    const response = await fetch(uri)
    const blob = await response.blob();

    const task = firebase.storage().ref().child(`post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`)
  }
 
  return (
    <View style={{flex: 1}}>
      <Image source={{uri: props.route.params.image}} /> 
      <TextInput placeholder="Write a caption..." onChangeText={(caption) => setCaption(caption)} />
      <Button title="Save" onPress={() => uploadImage()} />
    </View>


  )
}
