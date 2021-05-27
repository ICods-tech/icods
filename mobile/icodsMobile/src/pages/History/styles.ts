import { StyleSheet, Platform, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },

  dateContainer: {
    marginTop: 8,
  },
  cloudRightSmallHistory: {
    marginLeft: '41.6%',
  },
  dateCloudContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 12
  },
  date: {
    marginLeft: Platform.OS === 'ios' ? '4%' : '4%',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#282C37',
    fontSize: 18,
    letterSpacing: Dimensions.get('window').width * 0.002,
    lineHeight: 21.86,
  },
  cloudLeftLargeHistory: {
    alignSelf: 'center',
    marginLeft: 256
  },

  historyDate: {
    marginTop: 31,
    marginBottom: 28,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: Dimensions.get('window').width * 0.002,
    fontStyle: "normal",
    // fontFamily: 'Manrope',
    color: '#282C37',
    marginLeft: '4%',
    lineHeight: 22,
  },
  iconsCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFoundContainer: {
    marginTop: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  noResultsFoundText: {
    // fontfamily: Manrope;
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
    letterSpacing: 0.18,
    color: 'rgba(0, 0, 0, 0.87)'
  },
  noResultsFoundDescriptionText: {
    // fontfamily: Manrope;
    marginTop: 8,
    maxWidth: 272,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.4)',
    opacity: 0.57
  }
});

export default styles;