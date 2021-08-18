import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({ 
  divStyleBottomRadius: {
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderWidth: 0.5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopWidth: 0,
    width: '100%',
    height: RFValue(43),
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: '#f35',
  },
  divStyleTopRadius: {
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderWidth: 0.5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: RFValue(43),
    // backgroundColor: '#f39',
    // alignItems: 'center'
  },
  divStylePlain: {
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderWidth: 0.5,
    borderTopWidth: 0,
    width: '100%',
    height: RFValue(58),
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: '#a3f',
  },
  inputStyle: {
    // margin: 10,
    display: 'flex',
    fontSize: RFValue(14),
    color: '#000',
  },
  inputStylePassword: {
    // margin: 10,
    display: 'flex',
    width: '79%',
    fontSize: RFValue(14),
    color: '#000'

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
    // marginLeft: -RFValue(10)
  }
})

export default styles;
