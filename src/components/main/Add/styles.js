import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },

  header: {
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },

  buttonExit: {
    paddingLeft: 5,
    paddingTop: 30
  },
  
  cameraContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  containerIcons: {
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  button: {
    margin: 10,
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  

  button1: {
    margin: 10,
    height: 50,
    width: 50,
  },

  icon: {
    height: 50,
    backgroundColor: 'white'
  },

  image: {
    flex: 1,
    height: '100%',
    width: '100%'
  }


});

export default styles;