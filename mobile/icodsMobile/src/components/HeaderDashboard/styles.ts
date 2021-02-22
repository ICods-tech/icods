import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  headerColor: {
    position: 'absolute',
    top: -1,
    zIndex: -1
  },
  profilePicture: {
    marginTop: -4
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  nameAndSurname: {
    marginTop: 10,
    marginLeft: -8,
    display: 'flex',
    flexDirection: 'column'
  },
  profileName: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  headerInformation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  ellipsis: {
    position: 'absolute',
    marginTop: 10,
    marginLeft: 48,
  }
})

export default styles;
