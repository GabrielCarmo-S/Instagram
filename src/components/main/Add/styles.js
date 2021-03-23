import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  
  fixedRatio: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  button: {
    alignSelf: 'center',
    marginVertical: 10,
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  

  button1: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginVertical: 10,
    height: 50,
    width: 50,
    marginRight: 20
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