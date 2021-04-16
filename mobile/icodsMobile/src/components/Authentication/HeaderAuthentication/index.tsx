import { useNavigation } from '@react-navigation/native'
import React from 'react';
import { View, Text, Image, StatusBar, Button } from 'react-native';
import styles from './styles';
import Asteroid from '../../../assets/images/asteroid_image_gradient.svg';
import IcodsIcon from '../../../assets/images/icods_icon.svg';

const HeaderAuthentication = () => {
  return (
    <View>
      <StatusBar
        backgroundColor="#2b90d9"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <View style={styles.iconPanel}>
          <Asteroid style={{ marginRight: -4 }} />
          <IcodsIcon style={styles.icodsIcon} />
        </View>
      </View>
    </View>
  )
}

export default HeaderAuthentication;