import { useNavigation } from '@react-navigation/native'
import React from 'react';
import {View, Text, Image, StatusBar, Button} from 'react-native';
import styles from './styles';
import Asteroid from '../../assets/images/asteroid_image.svg';
import IcodsIcon from '../../assets/images/icods_icon.svg';
import Back from '../../assets/images/back.svg';

const HeaderAuthentication = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#333'}></StatusBar>
      <View style={styles.iconPanel}>
        <Asteroid/>
        <Text>TENDI</Text>
        <IcodsIcon style={styles.icodsIcon} />
        <Back style={styles.backMenu} />
      </View>
    </View>
  )
}

export default HeaderAuthentication;