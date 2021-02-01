import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
  divStyleBottomRadius: {
    borderColor: '#9baec8',
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopWidth: 0,
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    padding: '0 40%',
  },
  divStyleTopRadius: {
    borderColor: '#9baec8',
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    padding: '0 40%',
  },
  divStylePlain: {
    borderColor: '#9baec8',
    borderWidth: 1,
    borderTopWidth: 0,
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    padding: '0 40%',
  },
  inputStyle: {
    margin: 10
  }
})

export default styles;
