import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get( 'window' );

const style = StyleSheet.create( {
  container: {
    width: width * 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
} );

export default style;