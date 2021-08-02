import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({ 
  divStyleBottomRadius: {
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderWidth: 0.5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopWidth: 0,
    width: width * 0.7,
    height: 58,
    display: 'flex',
    flexDirection: 'row',
  },
  divStyleTopRadius: {
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderWidth: 0.5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: width * 0.7,
    display: 'flex',
    flexDirection: 'row',
    height: 58,
  },
  divStylePlain: {
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderWidth: 0.5,
    borderTopWidth: 0,
    width: width * 0.7,
    height: 58,
    display: 'flex',
    flexDirection: 'row',
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
