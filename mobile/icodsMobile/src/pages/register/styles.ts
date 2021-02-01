import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
  backMenu: {
    position: 'absolute',
    left: 2,
    top: 36,
  },
  background: {
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

export default styles;
