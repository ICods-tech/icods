import { useNavigation } from '@react-navigation/native'
import React from 'react';
import { View, Text, Image, StatusBar, Button, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import SocialIcon from '../../assets/images/Icons/social.svg'
import HistoryIcon from '../../assets/images/Icons/history.svg'
import ScanIcon from '../../assets/images/Icons/qrcode_scan.svg'
import styles from './styles';

interface BlockProps {
  pressed?: () => void,
  image: string,
  text?: string
}

const DashboardBlock = ({ pressed, text, image }: BlockProps) => {
  const imageSelected = {
    scan: <ScanIcon styles={styles.iconBlockImage} />,
    history: <HistoryIcon styles={styles.iconBlockImage} />,
    social: <SocialIcon styles={styles.iconBlockImage} />
  }
  return (
    <RectButton style={styles.blockStyle} onPress={pressed}>
      { imageSelected[image]}
      <Text style={styles.textStyle}>{text}</Text>
    </RectButton>
  )
}

export default DashboardBlock;