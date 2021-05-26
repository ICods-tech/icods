import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dropdownStyle: {
    position: 'absolute',
    top: 120,
    left: 10,
    zIndex: 2,
  },
  outerModalContainer: {
    left: -30,
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 1.18
  },
  modalContainer: {
    width: 360,
    height: 448,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  selectedColor: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black'
  },
  dateContainer: {
    marginTop: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  colorContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 24,
    marginTop: 36,
    width: 300,
    alignItems: 'center',
  },
  dropdownOptions: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 16,
  },
  headerText: {
    display: 'flex',
    textAlign: 'center',
    fontSize: 18,
    color: '#282C37',
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
  },
  orderDataText: {
    marginBottom: 26
  },
  colorIconsContainer: {
    display: 'flex',
    width: 230,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-around',
    alignSelf: 'flex-end',
    marginTop: 'auto',
    marginBottom: 24,
    marginRight: 12
  },
  bottomText: {
    fontSize: 16,
    color: '#2B90D9',
    fontWeight: '500'
  },
  cancelText: {
    color: '#DF2C2C'
  }
})

export default styles;