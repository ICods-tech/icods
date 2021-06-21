import { StyleSheet, Platform, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 2 : 2,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    color: '#282C37',
    // fontFamily: 'Manrope',
    fontSize: 25.89,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 35,
    letterSpacing: Dimensions.get('window').width * 0.002,
    marginTop: 6,
    marginLeft: -4,
  },
  helpTextContainer: {
    alignSelf: 'flex-start',
    marginLeft: 16
  },
  helpText: {
    // fontFamily: Manrope;
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.02,
    color: '#282C37'
  },
  helpInput: {
    marginLeft: 24,
    marginRight: 24,
    width: '85%',
    lineHeight: 20,
    marginTop: 18
  },
  inputContainer: {
    width: '90%',
    height: 232,
    backgroundColor: '#F2F2F2',
    marginLeft: 16,
    marginTop: 40,
    borderRadius: 4
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 40
  }
});
export default styles;