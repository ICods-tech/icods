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

  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#000',
    marginLeft: 12,
  },

  searchIcon: {
    paddingLeft: Platform.OS === 'ios' ? '8%' : '8%',
    paddingRight: Platform.OS === 'ios' ? '4%' : '4%',

  },

  searchBar: {
    backgroundColor: '#F2F2F2',
    borderRadius: 18,
    width: Dimensions.get('window').width * 0.65,
    height: 47,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: Platform.OS === 'ios' ? '8%' : '8%',
  },
  searchInput: {
    fontWeight: "400",
    letterSpacing: Dimensions.get('window').width * 0.002,
    color: '#282C37',
    fontSize: 16,
    width: Dimensions.get('window').width * 1,
  },
  optionsButton: {
  },
  option: {
  },
  optionsButtonsContainer: {
    // backgroundColor: '#F22',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // height: 64,
    // width: 64,
    // marginBottom: 20,
    // alignItems: 'flex-start',
  },
  iconButton: {
  }
  // testHeart: {
  // marginRight: Platform.OS === 'ios' ? '10%' : -30,
  // },

  // button: {
  //     width: Dimensions.get('window').width*0.15,
  //     display: 'flex',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  // },


});
export default styles;