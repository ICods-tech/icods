import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff'
  },
  activitiesContainer: {
    marginTop: 120,
    alignItems: 'center'
  },
  activitiesText: {
    // fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.02,
    color: '#282C37'
  }
})

export default styles;
