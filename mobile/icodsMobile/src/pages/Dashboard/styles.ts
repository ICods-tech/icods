import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
  background: {
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff'
  },
  dashboardContainer: {
    marginLeft: 24
  },
  welcomeContainer: {
    marginTop: 12,
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
  },
  selectOneOptionText: {
    // fontfamily: Manrope;
    color: 'rgba(40, 44, 55, 0.4)',
    letterSpacing: 1,
    marginTop: 12,
    fontSize: 14
  },
  blockScrolling: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 42
  },
  activitiesContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  activitiesHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  activitiesText: {
    // font-family: Manrope;
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 25.888,
    lineHeight: 35,
    letterSpacing: 1.25,
    color: '#282C37'
  },
  specificActivitiesContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 36
  },
  allActivitiesText: {
    // fontFamily: Manrope,
    fontStyle: 'normal',
    fontWeight: '600',

    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 1,
    color: 'rgba(40, 44, 55, 0.5)'
  },
  allActivitiesTextSelection: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
    paddingBottom: 8, 
    letterSpacing: 1,
    color: '#2B90D9'
  },
  allActivitiesTextWrapper: {
    width: 70,
    alignItems: 'center',
    borderBottomColor: '#2B90D9',
    borderBottomWidth: 2
  },
  myActivitiesTextWrapper: {
    marginLeft: 24
  },
  myActivitiesTextWrapperSelected: {
    width: 70,
    alignItems: 'center',
    borderBottomColor: '#2B90D9',
    borderBottomWidth: 2,
    marginLeft: 24
  },
  myActivitiesText: {
    // fontFamily: Manrope,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 1,
    color: 'rgba(40, 44, 55, 0.5)',
  },
  myActivitiesTextSelection: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 1,
    paddingBottom: 8,
    color: '#2B90D9'
  }
})

export default styles;
