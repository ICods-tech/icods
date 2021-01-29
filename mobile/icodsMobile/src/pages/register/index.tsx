import { useNavigation } from '@react-navigation/native'
import React from 'react';
import {View, Text, Image, StatusBar, Button, SafeAreaView} from 'react-native';
import styles from './styles';
import Asteroid from '../../assets/images/asteroid_image.svg';
import IcodsIcon from '../../assets/images/icods_icon.svg';
import Back from '../../assets/images/back.svg';
import Input from '../../components/Input'
import HeaderAuthentication from '../../components/HeaderAuthentication'

const Register = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.background}>
      <HeaderAuthentication />
      <Back style={styles.backMenu} onPress={() => { navigation.navigate('SignIn') }} />
      <Input></Input>
    </View>
  )
}

export default Register;