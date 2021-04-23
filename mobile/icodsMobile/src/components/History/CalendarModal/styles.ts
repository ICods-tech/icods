import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dropdownStyle: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 120,
    right: 40,
    left: 60,
    zIndex: 2,
    backgroundColor: '#fff',
    width: 280,
    height: 400,
    paddingTop: 36,
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
    textAlign: 'center',
    fontSize: 18,
    color: '#282C37',
    marginLeft: 8,
    fontWeight: '700'
  }
})

export default styles;