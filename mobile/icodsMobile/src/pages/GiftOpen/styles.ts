import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get( 'window' );

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
  },
  icon: {
    backgroundColor: '#2B90D9',
    width: width * 0.4,
    height: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width,
    marginBottom: 24,
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 14,
    // fontFamily: 'Manrope',
  },
  text: {
    // fontFamily: 'Manrope',
    width: width * 0.7,
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 0.02,

    color: 'rgba(40, 44, 55, 0.4)',
    marginBottom: 17,
  },
  button: {
    width: width * 0.7,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2B90D9',
    borderRadius: 4,

    shadowOffset: { width: 1, height: 3, },
    shadowColor: 'black',
    shadowOpacity: 0.1
  },
} );

export default styles;
