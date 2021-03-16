import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonStyling: {
    backgroundColor: '#fff',
    width: '110%',
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 1, height: 2, },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 1.0,
  },
  textStyling: {
    color: '#282C37',
    fontSize: 14,
    marginLeft: 12,
    fontWeight: '600'
  },
  buttonContentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles;
