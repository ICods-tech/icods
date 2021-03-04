import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dropdownStyle: {
    position: 'absolute',
    top: 40,
    right: 0,
    zIndex: 2,
    backgroundColor: '#fff',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 12,
    borderRadius: 22
  },
  dropdownOptions: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 16,
  },
  dropdownOptionsText: {
    fontSize: 12,
    color: '#282C37',
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
