import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
  container: {
    position: 'relative',
    display: 'flex',
    backgroundColor: '#E5E5E5',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },

  iconPanel: {
    position: 'relative',
    left: 15,
    top: -20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  icodsIcon: {
    position: 'absolute',
    top: 77,
    left: 126,
    width: 128,
    height: 96
  },

  fundoInferior: {
    position: 'absolute',
    top: 570,
    left: 20,
  },

  backMenu: {
    position: 'absolute',
    left: -20,
    top: 28,
  },
})

export default styles;
