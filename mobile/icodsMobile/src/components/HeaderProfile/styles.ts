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
  whiteText: {
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 0.02
  },
  whiteTextNumbers: {
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.02,
    marginTop: 12
  },
  editIcon: {
    position: 'absolute',
    top: 8,
    right: 0,
    zIndex: 2
  },
  followingFollowersContainers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24
  },
  connections: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftCloudsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: 100,
    height: 100,
  },
  profilePictureContainer: {
    display: 'flex',

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
