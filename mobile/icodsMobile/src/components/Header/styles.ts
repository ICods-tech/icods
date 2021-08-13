import {StyleSheet, Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 2 : 5,
    flexDirection: 'row',
    width: width,
    height: height * 0.1,
  },
  title: {
    // color: '#282C37',

    // fontFamily: 'Manrope',
    fontSize: 25.89,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 35,
    letterSpacing: width * 0.002,

    marginTop: 6,
    marginLeft: -4,
  },
});

export default styles;
