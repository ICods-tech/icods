import { useNavigation } from '@react-navigation/native'
import React from 'react';
import { View, Text, Image, StatusBar, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import styles from './styles';

interface ButtonProps {
  pressed: () => void,
  text: string,
  icon?: any,
  notActivated?: true
}

const ButtonAuthentication = ({ pressed, text, icon, notActivated }: ButtonProps) => {
  return (
    <RectButton style={notActivated ? styles.buttonStylingNotActivated : styles.buttonStyling} onPress={pressed}>
      {icon && icon}
      <Text style={notActivated ? styles.textStylingNotActivated : styles.textStyling}>{text}</Text>
    </RectButton>
  )
}

export default ButtonAuthentication;