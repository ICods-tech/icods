import { useNavigation } from '@react-navigation/native'
import React from 'react';
import { View, Text, Image, StatusBar, Button } from 'react-native';
import {RectButton} from 'react-native-gesture-handler'
import styles from './styles';

const ButtonAuthentication = (props) => {
  return (
    <RectButton style={styles.buttonStyling}>
      <Text style={styles.textStyling}>{props.text}</Text>
    </RectButton>
  )
}

export default ButtonAuthentication;