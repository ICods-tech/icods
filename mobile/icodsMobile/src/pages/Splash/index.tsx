import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, StatusBar, Button, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import Asteroid from '../../assets/images/asteroid_image.svg';
import IcodsIcon from '../../assets/images/icods_icon.svg';
import Back from '../../assets/images/back.svg';
import Input from '../../components/Input'
import HeaderAuthentication from '../../components/HeaderAuthentication'
import BottomAuthentication from '../../components/Authentication/BottomAuthentication'
import ButtonAuthentication from '../../components/ButtonAuthentication'
import { useAuth } from '../../hooks/auth'
import api from '../../services/api'

const Splash = () => {
  return (
    <View style={styles.background}>
      <Text>SPLASH SCREEN 🌊</Text>
    </View>
  )
}

export default Splash;