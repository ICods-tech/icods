import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  textContainer: {
    position: 'absolute',
    height: height * 0.25,
    
    justifyContent: 'space-around',
  },

  textParagraph: {
    fontWeight: '800',
    fontSize: 18,
    color: '#fff',
  
    fontFamily: 'Manrope',
  },

});

export default styles;
