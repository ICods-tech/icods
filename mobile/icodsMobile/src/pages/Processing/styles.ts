import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get( 'window' );

const styles = StyleSheet.create( {
  container: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconContainer: {
    width: width * 0.35,
    height: width * 0.35,
    // backgroundColor: '#2B90D9',
    borderRadius: width * 0.35,
    marginBottom: 24,
  },
  textTile: {
    // font-family: Manrope;
    width: width,
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 28,
    lineHeight: 38,
    textAlign: 'center',
    letterSpacing: 0.02,
    marginBottom: 14,
  },
  text: {
    width: width * 0.8,
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: 0.02,
  },
} );

export default styles;
