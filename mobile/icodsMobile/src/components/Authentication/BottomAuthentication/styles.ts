import React from 'react';
import { Dimensions, StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({ 
  container: {
    display: 'flex',
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  textStyle: {
    position: 'absolute',
    bottom: 2,
    left: Dimensions.get('window').width / 4.75,
    marginBottom: Platform.OS === 'ios' ? 12 : 0,
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.02,
    color: '#fff'
  }
})

export default styles;
