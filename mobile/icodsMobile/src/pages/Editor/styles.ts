import {Dimensions, StyleSheet} from 'react-native';

const { width, height } = Dimensions.get( 'window' );

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
  modal: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    width: width * 0.8,
    height: height * 0.35,
    backgroundColor: '#fff',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalIcon: {
    width: width * 0.15,
    height: width * 0.15,
    backgroundColor: '#F5AB0B',
    borderRadius: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 26,
  },
  modalTitle: {
    // font- family: Manrope;
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 22,
    letterSpacing: 0.02,
    color: '#282C37',
    marginBottom: 14,
  },
  modalText: {
    width: width * 0.8 * 0.75,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.4)',
    marginBottom: 28,
  },
  modalButtonsContainer: {
    // backgroundColor: '#f00',
    width: width * 0.8 * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default styles;
