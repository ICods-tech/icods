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
    width: Dimensions.get('window').width * 1.0,

  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyText: {
    color: '#2B90D9',
    fontWeight: '500',
    fontSize: 9.89,
    fontStyle: 'normal',
    letterSpacing: Dimensions.get('window').width * 0.002,
  },
  scan: {
    padding: 10,
  },
  scannerText: {
    marginTop: 2,
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 9.89,
    fontStyle: 'normal',
    letterSpacing: Dimensions.get('window').width * 0.002,
  },
  socialText: {
    fontWeight: '500',
    fontSize: 9.89,
    fontStyle: 'normal',
    letterSpacing: Dimensions.get('window').width * 0.002,
  },
  scanner: {
    backgroundColor: '#2B90D9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 72,
    height: 72,
    padding: 10,
    marginTop: -30,
    marginBottom: 10,
    marginLeft: 26,
    marginRight: 26,
    borderRadius: 128,
  }
})

export default styles;