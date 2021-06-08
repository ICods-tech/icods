import { useNavigation } from '@react-navigation/native'
import React from 'react';
import { View, Text, Image, StatusBar, Button } from 'react-native';
import styles from './styles';
import BottomImage from '../../../assets/images/bottom.svg';

const BottomAuthentication = () => {
  return (
    <View style={styles.container}>
      < BottomImage />
      <Text style={styles.textStyle}>iCODS - Todos os direitos reservados</Text>
    </View>
  )
}

export default BottomAuthentication;