import { useNavigation } from '@react-navigation/native'
import React from 'react';
import { View, Text, Image, StatusBar, Button } from 'react-native';
import styles from './styles';

const BottomAuthentication = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Escanear</Text>
    </View>
  )
}

export default BottomAuthentication;