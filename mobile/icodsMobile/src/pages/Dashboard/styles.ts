import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
  background: {
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff'
  },
  dashboardContainer: {

  },
  welcomeContainer: {
    marginTop: 12,
    marginLeft: 24
  },
  welcomeText: {
    // fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: "700",
    fontSize: 25.888,
    lineHeight: 50,
    letterSpacing: 2,
    color: '#282C37'
  },
  cloudRightSmallWelcome: {
    marginLeft: 8
  },
  cloudRightSmallWelcomeText: {
    marginRight: 36
  },
  cloudLeftLargeWelcome: {
    marginLeft: 64
  },
  welcomeTextContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  toICodsTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

export default styles;
