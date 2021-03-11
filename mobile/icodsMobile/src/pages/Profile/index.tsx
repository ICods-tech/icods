import { useNavigation } from '@react-navigation/native'
import React from 'react';
import { View, Text, Image, StatusBar, Button, SafeAreaView } from 'react-native';
import styles from './styles';
import Asteroid from '../../assets/images/asteroid_image.svg';
import IcodsIcon from '../../assets/images/icods_icon.svg';
import Back from '../../assets/images/back.svg';
import Input from '../../components/Input'
import HeaderAuthentication from '../../components/HeaderAuthentication'
import HeaderProfile from '../../components/HeaderProfile'
import BottomAuthentication from '../../components/BottomAuthentication'
import ButtonAuthentication from '../../components/ButtonAuthentication'

const Profile = () => {
  return (
    <View style={styles.background}>
      <SafeAreaView style={{ backgroundColor: '#2b90d9' }} />
      <StatusBar
        backgroundColor="#2c92da"
        barStyle="light-content"
      />
      <HeaderProfile />
      <Text>Profile</Text>
    </View>
  )
}

export default Profile;