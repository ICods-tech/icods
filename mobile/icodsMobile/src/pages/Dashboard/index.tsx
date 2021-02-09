import { useNavigation } from '@react-navigation/native'
import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Image, StatusBar, Button, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import Asteroid from '../../assets/images/asteroid_image.svg';
import IcodsIcon from '../../assets/images/icods_icon.svg';
import Back from '../../assets/images/back.svg';
import Input from '../../components/Input'
import HeaderAuthentication from '../../components/HeaderAuthentication'
import BottomAuthentication from '../../components/BottomAuthentication'
import ButtonAuthentication from '../../components/ButtonAuthentication'
import { useAuth } from '../../hooks/auth'
import api from '../../services/api'

const SignIn = () => {
  const { signIn, user } = useAuth()
  const navigation = useNavigation()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = useCallback(async () => {
    try {
      await signIn({
        email,
        password
      })

      console.log(user)
    } catch (err) {
      console.error(err.message)
    }
  }, [email, password, signIn, user])

  return (
    <View style={styles.background}>
      <Text>🎸🦾</Text>
    </View>
  )
}

export default SignIn;