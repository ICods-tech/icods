import React from 'react';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({ 
  background: {
    flex: 1,
    height: height,
    backgroundColor: '#fff'
  },
  inputContainer: {
    display: 'flex',
    // top: Platform.OS === 'ios' ? 0 : -56,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: RFValue(25),
    // backgroundColor: '#f04'
  },
  textUnderneathInputsContainer: {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: RFValue(8),
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
    letterSpacing: 0.02,
    fontSize: RFValue(10),
  },
  secondTextUnderneathInputs: {
    color: '#9BAEC8',
    fontSize: RFValue(10),
    letterSpacing: 0.02,
  },
  buttonContainer: {
    marginTop: RFValue(24),
    alignItems: 'center'
  },
  orText: {
    color: '#282C37',
    fontSize: RFValue(14)
  },
  orContainer: {
    marginTop: RFValue(24),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orLeftHorizontalLine: { 
    width: RFValue(122),
    marginTop: 'auto',
    height: 8, 
    borderTopColor: '0.5px solid rgba(0, 0, 0, 0.12);', 
    borderTopWidth: 1, 
    marginRight: RFValue(15)
  },
  orRightHorizontalLine: { 
    width: RFValue(122), 
    height: 8,
    marginTop: 'auto',
    borderTopColor: '0.5px solid rgba(0, 0, 0, 0.12);', 
    borderTopWidth: 1, 
    marginLeft: RFValue(15)
  },
  alternativeAuthenticationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: RFValue(24),
    marginBottom: RFValue(21),
    height: RFValue(90)
  },
  
  helpContainer: {
    display: 'flex',
    alignItems: 'center',
    width: 196,
    alignSelf: 'center',
  },
  helpText: {
    fontSize: RFValue(10),
    color: 'rgba(0, 0, 0, 0.4);',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.4);'
  }
})

export default styles;
