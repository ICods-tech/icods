import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    zIndex: 3,

    position: 'absolute',
    backgroundColor: '#00000090',

    alignItems: 'center',
    justifyContent: 'center',
  },

  popUp: {
    width: width * 0.8,
    height: width * 0.5,
    backgroundColor: '#fff',

    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  popUpTitle: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,

    letterSpacing: width * 0.002,
    color: '#282C37',
  },

  popUpSubtitle: {
    marginTop: 15,
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '600',

    color: '#282C37',
    opacity: 0.57,
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  closeButton: {
    position: 'absolute',

    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',

    right: 15,
    top: 15,
  },
});

export default styles;
