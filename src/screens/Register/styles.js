import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  welcome: {
    alignItems: 'center',
    fontSize: 16,
    marginTop: 50
  },

  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },

  inputcontainer: {
    flex: 1,
    marginTop: 50,
    alignSelf: 'center',
  },

  input: {
    width: 250,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    marginBottom: 30
  },

  registro: {
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  }
});

export default styles;