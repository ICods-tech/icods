import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonStyling: {
    backgroundColor: '#2B90D9',
    width: 248,
    height: 36,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttonStylingNotActivated: {
    backgroundColor: '#fff',
    width: 248,
    height: 36,
    borderRadius: 4,
    borderColor: '#2B90D9',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  iconStyling: {
    marginRight: 8
  },
  textStyling: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonShadows: {
    shadowOffset: { width: 1, height: 3, },
    shadowColor: 'black',
    shadowOpacity: 0.1
  },
  textStylingNotActivated: {
    color: '#2B90D9',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default styles;
