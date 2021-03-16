import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff'
  },
  userInformationContainer: {
    marginTop: 120,
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  userLabelAndInfoContainer: {
    marginBottom: 30
  },
  privateProfileContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 360,
    justifyContent: 'space-between',
    marginBottom: 30
  },
  userInformationLabel: {
    color: 'rgba(40,44,55, 0.5)',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.02,
  },
  userInformationText: {
    // fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.02,
    marginTop: 2,
    color: '#282C37'
  }
})

export default styles;
