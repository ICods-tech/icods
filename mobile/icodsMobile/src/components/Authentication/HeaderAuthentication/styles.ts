import React from 'react';
import { Dimensions, Platform, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({ 
  container: {
    position: 'relative',
    display: 'flex',
    backgroundColor: '#FFF',
    top: Platform.OS === 'ios' ? 0 : -60,
  },

  iconPanel: {
    // position: 'relative',
    left: width * 0.025,
    top: Platform.OS === 'ios' ? -20 : 0,
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  icodsIcon: {
    position: 'absolute',
    top: 77,
    left: 132,
    width: 132,
    height: 104
  },

  bottomBackground: {
    position: 'absolute',
    top: 570,
    left: 20,
  }
})

export default styles;
