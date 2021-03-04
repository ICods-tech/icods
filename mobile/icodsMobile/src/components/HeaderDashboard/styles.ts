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
    width: 36,
    height: 36
  },
  ellipsisContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 25,
    backgroundColor: '#923',
    marginLeft: 42
  },
  dropdownStyle: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: '#282c37',
    right: 12,
    top: 92,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 8,
    paddingBottom: 6,
    borderRadius: 16
  },
  dropdownOptions: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 16,
  },
  dropdownOptionsText: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 8
  },
  signOutContainer: {
    position: 'relative',
    zIndex: 999,
    width: 156,
    height: 36,
    backgroundColor: '#292',
  },
  moreStyle: {
    marginRight: 24,
    marginTop: 12
  }
})

export default styles;
