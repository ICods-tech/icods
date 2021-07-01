import { StyleSheet, Platform, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    marginTop: 36,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  codeContainer: {
    marginBottom: 22,
    alignItems: 'center'
  },
  colorIconsContainer: {
    display: 'flex',
    width: 230,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  colorContainer: {
    alignItems: 'center'
  },
  buttonsContainer: {
    marginTop: 36,
    display: 'flex',
    justifyContent: 'space-between',
    height: 140,
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
  headersText: {
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.02,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 22
  }
});

export default styles;