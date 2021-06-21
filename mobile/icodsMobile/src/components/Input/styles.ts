import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
  divStyleBottomRadius: {
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderWidth: 0.5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopWidth: 0,
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    padding: '0 40%',
  },
  divStyleTopRadius: {
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderWidth: 0.5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    padding: '0 40%',
  },
  divStylePlain: {
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderWidth: 0.5,
    borderTopWidth: 0,
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    padding: '0 40%',
  },
  inputStyle: {
    margin: 10,
    display: 'flex',
  },
  inputStylePassword: {
    margin: 10,
    display: 'flex',
    width: '79%'
  },
  eyes: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginEyes: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -26
  }
})

export default styles;
