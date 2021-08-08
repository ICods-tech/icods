import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get( 'window' );

const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    height: height,

  },
  video: {
    height: height * 0.8,
    width: width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconsContainer: {
    width: width,
    height: height * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediaControls: {
    width: width,
  },
} );

export default styles;
