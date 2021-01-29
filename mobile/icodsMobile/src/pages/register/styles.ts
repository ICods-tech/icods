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
  }
})

export default styles;
