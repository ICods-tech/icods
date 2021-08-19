import { StyleSheet, Platform, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    height: RFValue(72),
    position: 'absolute',
    bottom: 0,
    marginTop: RFValue(62),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 1.0,
  },
  horizontalBlueHomeBar: {
    width: RFValue(24),
    height: 1.5,
    backgroundColor: '#2B90D9',
    transform: [{ translateY: -5 }]
  },
  buttons: {
    display: 'flex',
    marginTop: RFValue(4),
    marginLeft: RFValue(8),
    marginRight: RFValue(8),
    width: RFValue(61),
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanText: {
    fontWeight: '500',
    fontSize: RFValue(9),
    fontStyle: 'normal',
    marginBottom: RFValue(8),
    letterSpacing: Dimensions.get('window').width * 0.002,
  },
  scanner: {
    backgroundColor: '#2B90D9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: RFValue(56),
    height: RFValue(56),
    marginTop: -RFValue(18),
    marginBottom: RFValue(4),
    marginLeft: RFValue(8),
    marginRight: RFValue(8),
    borderRadius: 128,
  }
})

export default styles;