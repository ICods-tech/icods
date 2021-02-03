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
    alignItems: 'center',
    marginTop: 8
  },
  textUnderneathInputsContainer: {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 12,
    flexDirection: 'row',
  },
  underlineText: {
    borderBottomWidth: 1,
    borderBottomColor: '#9BAEC8',
  },
  underlineSecondText: {
    borderBottomWidth: 1,
    borderBottomColor: '#9BAEC8',
    marginLeft: 'auto'
  },
  textUnderneathInputs: {
    color: '#9BAEC8',
    fontSize: 12,
    letterSpacing: 0.02,
  },
  secondTextUnderneathInputs: {
    color: '#9BAEC8',
    fontSize: 12,
    letterSpacing: 0.02,
  },
  buttonContainer: {
    marginTop: 24,
    alignItems: 'center'
  }
})

export default styles;
