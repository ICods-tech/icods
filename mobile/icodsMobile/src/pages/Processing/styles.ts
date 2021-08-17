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
    alignItems: 'center',
    justifyContent: 'center',
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
    width: width * 0.85,
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: 0.02,
  },
  errorButton: {
    width: width * 0.8,
    height: 36,
    backgroundColor: '#2B90D9',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  errorButtonText: {
    color: '#FFF',
  },
} );

export default styles;
