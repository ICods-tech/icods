import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  backgroundOptions: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.15,

    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#282C37B3',

    display: 'flex',
    alignItems: 'center',
  },

  screenshootButtonOne: {
    marginTop: 15,
    width: 64,
    height: 64,

    backgroundColor: '#FFFFFF',

    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  screenshootButtonTwo: {
    width: 54,
    height: 54,

    backgroundColor: '#B4B5B9',

    borderRadius: 100,
  },

  screenshootButtonRecordTwo: {
    width: 54,
    height: 54,

    backgroundColor: '#BB0000',

    borderRadius: 100,
  },

  flipButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: 48,
    height: 48,

    borderRadius: 100,

    borderWidth: 3,
    borderColor: '#fff',

    position: 'absolute',
    left: 35,
    top: 35,
  },

  infoButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: 48,
    height: 48,

    borderRadius: 100,

    borderWidth: 3,
    borderColor: '#fff',

    position: 'absolute',
    right: 35,
    top: 35,
  },
});

export default styles;
