import { useNavigation } from '@react-navigation/native'
import React from 'react';
import { View, Text, Image, StatusBar, Button } from 'react-native';
import CameraIcon from '../../assets/images/Icons/camera.svg'
import { RectButton } from 'react-native-gesture-handler'
import styles from './styles';

interface ButtonProps {
  pressed?: () => void,
  text?: string
}

const ButtonProfilePicture = ({ pressed, text }: ButtonProps) => {
  return (
    <RectButton style={styles.buttonStyling} onPress={pressed}>
      <View style={styles.buttonContentContainer}>
        <CameraIcon />
        <Text style={styles.textStyling}>{text}</Text>
      </View>
    </RectButton>
  )
}

export default ButtonProfilePicture;