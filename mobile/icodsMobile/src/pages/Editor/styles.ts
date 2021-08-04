import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonNext: {
    position: 'absolute',
    right: 15,
    top: 15,

    width: 125,
    height: 32,

    backgroundColor: '#2B90D9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 8,
  },
});

export default styles;
