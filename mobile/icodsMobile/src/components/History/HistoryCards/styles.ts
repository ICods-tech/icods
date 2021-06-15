import { StyleSheet, Platform, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  date: {
    marginLeft: Platform.OS === 'ios' ? '4%' : '4%',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#282C37',
    fontSize: 18,
    letterSpacing: Dimensions.get('window').width * 0.002,
    lineHeight: 21.86,
  },

  qrCodeCard: {
    marginTop: 9,
    marginLeft: 15,
    marginRight: 15,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // shadowColor: "#f00",
    // shadowOffset: {
    //     width: 0,
    //     height: 3,
    // },
    // shadowOpacity: 0.259,
    // shadowRadius: 4.65,

    // elevation: 1,

    borderLeftColor: ' rgba(0, 0, 0, 0.25)',
    borderLeftWidth: 2,

    borderTopColor: ' rgba(0, 0, 0, 0.25)',
    borderTopWidth: 0.5,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,

    borderBottomColor: ' rgba(0, 0, 0, 0.25)',
    borderBottomWidth: 2,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,


    borderRightColor: ' rgba(0, 0, 0, 0.25)',
    borderRightWidth: 2,
    position: 'relative',
  },

  redStatus: {
    position: 'absolute',
    left: -1,
  },

  qrCodeManneger: {
    marginLeft: Platform.OS === 'ios' ? '4%' : '4%',
    // marginTop: Platform.OS === 'ios' ? 28 : 28,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 25 : 25,
    paddingBottom: Platform.OS === 'ios' ? 25 : 25,

  },

  privacyInfo: {
    color: '#2B90D9',

  },
  qrCodeInfo: {
    marginLeft: Platform.OS === 'ios' ? '4%' : '4%',
  },

  textQRCodeInfo: {
    // fontFamily: 'Manrope',
    display: 'flex',
    flexDirection: 'row',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 12,
    width: 180,
    flexWrap: 'wrap-reverse',
    letterSpacing: Dimensions.get('window').width * 0.002,
  },

  rightQRCodeInfoButtons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 29,
  }
})

export default styles;