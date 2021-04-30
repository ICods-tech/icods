import { StyleSheet, Platform, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },

  dateContainer: {
    marginTop: 40,
  },
  cloudRightSmallHistory: {
    marginLeft: '41.6%',
  },
  dateCloudContainer: {
    display: 'flex',
    flexDirection: 'row',
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
    marginLeft: 135,
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
    justifyContent: 'center'
  }
});

export default styles;