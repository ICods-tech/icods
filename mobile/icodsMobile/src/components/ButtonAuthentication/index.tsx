import { useNavigation } from '@react-navigation/native'
import React from 'react';
import { View, Text, Image, StatusBar, Button } from 'react-native';
import {RectButton} from 'react-native-gesture-handler'
import styles from './styles';

const ButtonAuthentication = () => {
  return (
    <RectButton style={styles.buttonStyling}>
      <Text style={styles.textStyling}>Login</Text>
    </RectButton>
  )
}

export default ButtonAuthentication;