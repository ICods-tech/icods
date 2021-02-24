import { useNavigation } from '@react-navigation/native'
import React from 'react';
import { View, Text, Image, StatusBar, Button, TouchableOpacity } from 'react-native';
import {RectButton} from 'react-native-gesture-handler'
import styles from './styles';

interface BlockProps {
  pressed?: () => void,
  image?: string,
  text?: string  
}

const DashboardBlock = ({ pressed, text, image }: BlockProps) => {
  return (
    <TouchableOpacity style={styles.blockStyle} onPress={pressed}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

export default DashboardBlock;