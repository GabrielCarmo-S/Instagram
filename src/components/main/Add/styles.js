import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },

  cameraContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  fixedRatio: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  button: {
    alignSelf: 'center',
    marginVertical: 10,
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: 'red'
  },

  button1: {
    alignSelf: 'center',
    marginVertical: 10,
    height: 50,
    width: 50,
    backgroundColor: 'red',
    borderRadius: 25,

  }


});

export default styles;