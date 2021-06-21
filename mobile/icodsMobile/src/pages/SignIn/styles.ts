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
  },
  orText: {
    color: '#282C37',
    fontSize: 12
  },
  orContainer: {
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  orLeftHorizontalLine: { 
    width: 132,
    marginTop: 'auto',
    height: 8, 
    borderTopColor: '0.5px solid rgba(0, 0, 0, 0.12);', 
    borderTopWidth: 1, 
    marginRight: 12
  },
  orRightHorizontalLine: { 
    width: 132, 
    height: 8,
    marginTop: 'auto',
    borderTopColor: '0.5px solid rgba(0, 0, 0, 0.12);', 
    borderTopWidth: 1, 
    marginLeft: 12
  },
  alternativeAuthenticationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 30,
    height: 90
  },
  helpContainer: {
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    width: 196,
    alignSelf: 'center',
    borderBottomColor: 'rgba(0, 0, 0, 0.4);'
  }, 
  helpText: {
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.4);'
  }
})

export default styles;
