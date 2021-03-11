import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  backButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: -30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  middleProfileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fullNameText: {
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 22,
    letterSpacing: 0.02
  },
  leftCloudsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: 100,
    height: 100,

  },
  rightCloudsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 100,
    height: 220,
  },
  cloudLeft: {
    display: 'flex',
    marginLeft: 8
  },
  rightCloudsTop: {
    marginRight: 24
  },
  rightCloudsBottomn: {
    marginTop: 80
  },
  headerColor: {
    position: 'absolute',
    zIndex: -1
  },
  profilePicture: {
    marginTop: -4
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  profileName: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  headerInformation: {
    display: 'flex',
    flexDirection: 'column',
  },
  infoAndEllipsis: {
    marginRight: 12,
    marginTop: 16,
    position: 'relative',
    width: 76,
    height: 25,
    backgroundColor: '#282C37',
    borderRadius: 10
  },
  info: {
    position: 'absolute',
    marginTop: 4,
    marginLeft: 12,
  },
  moreStyle: {
    marginRight: 24,
    marginTop: 12
  },
  accountText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 26,
    marginTop: 6,
    marginLeft: -4
  }
})

export default styles;
