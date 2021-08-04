import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 1,
    backgroundColor: '#00000090',
    height: height * 0.2,
    width: width,
  },

  square: {
    display: 'flex',
    flexDirection: 'row',
    height: width * 0.7,
  },

  squareLeft: {
    backgroundColor: '#00000090',
    width: width * 0.15,
  },

  squareCenter: {
    width: width * 0.7,
  },

  squareRight: {
    backgroundColor: '#00000090',
    width: width * 0.15,
  },

  squareBordersTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: width * 0.7 * 0.5,
  },

  squareBordersBottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: width * 0.7 * 0.5,
  },

  borderLeftTop: {
    width: width * 0.7 * 0.3,
    height: width * 0.7 * 0.3,

    borderColor: '#fff',
    borderLeftWidth: 2.5,
    borderTopWidth: 2.5,
  },

  borderRightTop: {
    width: width * 0.7 * 0.3,
    height: width * 0.7 * 0.3,

    borderColor: '#fff',
    borderRightWidth: 2.5,
    borderTopWidth: 2.5,
  },

  borderLeftBottom: {
    width: width * 0.7 * 0.3,
    height: width * 0.7 * 0.3,

    borderColor: '#fff',
    borderLeftWidth: 2.5,
    borderBottomWidth: 2.5,
  },

  borderRightBottom: {
    width: width * 0.7 * 0.3,
    height: width * 0.7 * 0.3,

    borderColor: '#fff',
    borderRightWidth: 2.5,
    borderBottomWidth: 2.5,
  },

  footer: {
    flex: 1,
    backgroundColor: '#00000090',
    height: height * 0.4,
    width: width,
  },

  squareRead: {
    width: width,
    backgroundColor: '#00000090',
    height: width * 0.7,
  },
});

export default styles;
