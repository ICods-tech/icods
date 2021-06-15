import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  blockStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: 128,
    height: 128,
    backgroundColor: '#3faae0',
    color: 'blue',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'flex-end',
    shadowOffset: { width: 1, height: 2, },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 1.0,
    marginRight: 12,
    marginBottom: 12
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