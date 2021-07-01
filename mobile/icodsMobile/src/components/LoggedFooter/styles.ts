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
    flexDirection: 'row',
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
  homeText: {
    color: '#2B90D9',
    fontWeight: '500',
    fontSize: 9,
    fontStyle: 'normal',
    marginTop: 8,
    letterSpacing: Dimensions.get('window').width * 0.002,
  },
  historyText: {
    color: '#2B90D9',
    fontWeight: '500',
    fontSize: 9,
    fontStyle: 'normal',
    marginTop: 4,
    letterSpacing: Dimensions.get('window').width * 0.002,
  },
  scan: {
    padding: 10,
  },
  scannerText: {
    marginTop: 2,
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 9,
    fontStyle: 'normal',
    letterSpacing: Dimensions.get('window').width * 0.002,
  },
  socialText: {
    fontWeight: '500',
    fontSize: 9,
    fontStyle: 'normal',
    marginTop: 4,
    letterSpacing: Dimensions.get('window').width * 0.002,
  },
  notificationsText: {
    fontWeight: '500',
    fontSize: 9,
    fontStyle: 'normal',
    marginTop: 6,
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
    marginBottom: 10,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 128,
  }
})

export default styles;