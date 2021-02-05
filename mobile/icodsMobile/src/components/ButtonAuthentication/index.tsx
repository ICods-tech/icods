import { useNavigation } from '@react-navigation/native'
import React from 'react';
import { View, Text, Image, StatusBar, Button } from 'react-native';
import {RectButton} from 'react-native-gesture-handler'
import styles from './styles';

interface ButtonProps {
  pressed: () => void,
  text: string
}

const ButtonAuthentication = (props: ButtonProps) => {
  return (
    <RectButton style={styles.buttonStyling} onPress={props.pressed}>
      <Text style={styles.textStyling}>{props.text}</Text>
    </RectButton>
  )
}

export default ButtonAuthentication;