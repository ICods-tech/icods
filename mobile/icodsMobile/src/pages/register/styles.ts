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
  midText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    width: 260,
    marginTop: 18,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 14.25,
    letterSpacing: 0.02,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
})

export default styles;
