import { useNavigation } from '@react-navigation/native'
import React, { useState, useCallback } from 'react';
import { View, Text, Image, StatusBar, Button, SafeAreaView } from 'react-native';
import styles from './styles';
import Asteroid from '../../assets/images/asteroid_image.svg';
import IcodsIcon from '../../assets/images/icods_icon.svg';
import Back from '../../assets/images/back.svg';
import Input from '../../components/Input'
import HeaderAuthentication from '../../components/Authentication/HeaderAuthentication'
import BottomAuthentication from '../../components/Authentication/BottomAuthentication'
import ButtonAuthentication from '../../components/Authentication/ButtonAuthentication'
import { useAuth } from '../../hooks/auth';

const Register = () => {
  const navigation = useNavigation()
  const { signIn, signUp } = useAuth()

  const [name, setName] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('')

  const handleSignUp = useCallback(async () => {
    try {
      if (password !== passwordConfirmation) throw new Error('Passwords do not match')
      await signUp({ name, username, email, password })
      await signIn({ email, password })
    } catch (err) {
      console.log('Error catched! 🧤')
      console.error(err.message)
    }
  }, [name, username, email, password, passwordConfirmation])

  return (
    <View style={styles.background}>
      <HeaderAuthentication />
      <Back style={styles.backMenu} onPress={() => { navigation.navigate('SignIn') }} />
      <Text style={styles.midText}>Fazer uma conta no iCODS é simples e
        rápido, basta preencher os campos!
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder={'Digite seu nome completo'}
          radius={'top'}
          change={(name: string) => setName(name)}
          value={name}
        />
        <Input
          placeholder={'Digite um username'}
          radius={'middle'}
          change={(username: string) => setUsername(username)}
          value={username}
        />
        <Input
          placeholder={'Digite seu email principal'}
          radius={'middle'}
          change={(email: string) => setEmail(email)}
          value={email}
        />
        <Input
          placeholder={'Digite sua senha'}
          radius={'middle'}
          isPassword
          change={(password: string) => setPassword(password)}
          value={password}
        />
        <Input
          placeholder={'Digite novamente sua senha'}
          radius={'bottom'}
          isPassword
          change={(passwordConfirmation: string) => setPasswordConfirmation(passwordConfirmation)}
          value={passwordConfirmation} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonAuthentication text={'Cadastrar'} pressed={() => { handleSignUp() }} />
      </View>
      <BottomAuthentication />
    </View>
  )
}

export default Register;