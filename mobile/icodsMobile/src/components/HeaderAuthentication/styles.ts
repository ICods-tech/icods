import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
  container: {
    position: 'relative',
    display: 'flex',
    backgroundColor: '#FFF',
  },

  iconPanel: {
    position: 'relative',
    left: 25,
    top: -20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  icodsIcon: {
    position: 'absolute',
    top: 77,
    left: 132,
    width: 132,
    height: 104
  },

  bottomBackground: {
    position: 'absolute',
    top: 570,
    left: 20,
  }
})

export default styles;
