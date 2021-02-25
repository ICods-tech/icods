import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  blockStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: 128,
    height: 128,
    backgroundColor: '#282C37',
    color: 'blue',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 12
  },
  textStyle: {
    color: '#fff',
    lineHeight: 22,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 16,
    marginTop: 8
  }
})

export default styles;