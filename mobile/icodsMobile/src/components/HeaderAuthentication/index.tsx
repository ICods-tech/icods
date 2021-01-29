import { useNavigation } from '@react-navigation/native'
import React from 'react';
import {View, Text, Image, StatusBar, Button} from 'react-native';
import styles from './styles';
import Asteroid from '../../assets/images/asteroid_image.svg';
import IcodsIcon from '../../assets/images/icods_icon.svg';

const HeaderAuthentication = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconPanel}>
        <Asteroid/>
        <Text>TENDI</Text>
        <IcodsIcon style={styles.icodsIcon} />
      </View>
    </View>
  )
}

export default HeaderAuthentication;