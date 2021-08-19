import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  backMenu: {
    position: 'absolute',
    left: RFValue(4),
    top: RFValue(100),
  },
  background: {
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff'
  },
  midText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 260,
    marginTop: 12,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 14.25,
    letterSpacing: 0.02,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: RFValue(17)
  },
  buttonContainer: {
    marginTop: 24,
    alignItems: 'center'
  }
})

export default styles;
