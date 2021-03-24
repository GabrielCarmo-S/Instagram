import React, { useState, useEffect } from 'react';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles';

export default function Add({ navigation }) {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri)
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View />;
  }
  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>

      {image ? (
        <Image source={{ uri: image }} style={styles.image} />) : (

        <Camera
          ref={ref => setCamera(ref)}
          style={styles.cameraContainer}
          type={type}
          ratio={'1'}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.buttonExit} onPress={() => { navigation.navigate('Feed') }}>
              <MaterialCommunityIcons name="arrow-left" size={50} color={'white'} />
            </TouchableOpacity>
          </View>

          <View style={styles.containerIcons} >
            <TouchableOpacity style={styles.button1} onPress={() => pickImage()}>
              <MaterialCommunityIcons name="folder-image" size={50} color={'white'} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => takePicture()} />

            <TouchableOpacity style={styles.button1} onPress={() => { setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back); }}>
              <MaterialCommunityIcons name="camera-switch" size={50} color={'white'} />
            </TouchableOpacity>
          </View>
        </Camera>
      )
      }
    </View >
  );







  {/*

        <Button title="Save" onPress={() => navigation.navigate('Save', { image })} />

        {image && <Image source={{ uri: image }} style={styles.image} />} */}


}