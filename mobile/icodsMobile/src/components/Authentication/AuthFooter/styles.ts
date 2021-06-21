import { StyleSheet, Platform, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    height: 72,
    position: 'absolute',
    bottom: 0,
    marginTop: 62,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 1.0,
  },
  horizontalBlueHomeBar: {
    width: 24,
    height: 1.5,
    backgroundColor: '#2B90D9',
    transform: [{ translateY: -5 }]
  },
  buttons: {
    display: 'flex',
    marginTop: 4,
    marginLeft: 8,
    marginRight: 8,
    width: 61,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanText: {
    fontWeight: '500',
    fontSize: 9,
    fontStyle: 'normal',
    marginBottom: 8,
    letterSpacing: Dimensions.get('window').width * 0.002,
  },
  scanner: {
    backgroundColor: '#2B90D9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    marginTop: -18,
    marginBottom: 4,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 128,
  }
})

export default styles;