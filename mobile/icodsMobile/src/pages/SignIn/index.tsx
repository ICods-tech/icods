import styles from './styles';
import Input from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import Toast from 'react-native-toast-message';
import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native'
import ButtonAuthentication from '../../components/Button'
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import BottomAuthentication from '../../components/Authentication/AuthFooter'
import HeaderAuthentication from '../../components/Authentication/HeaderAuthentication'

const SignIn = () => {
  const { signIn, user } = useAuth()
  const navigation = useNavigation()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errored, setErrored] = useState<boolean>(false)

  const handleLogin = useCallback(async () => {
    try {
      console.log({email, password})
      await signIn({ email, password })
      setErrored(false)
    } catch (error: any) {
      console.log('Error catched! 🧤')
      setErrored(true)
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Email/Username ou senha incorretos',
        text2: '',
        visibilityTime: 1000,
        bottomOffset: 100,
      })
    }
  }, [email, password])

  return (
    <View style={styles.background}>
      <HeaderAuthentication />
      <View style={styles.inputContainer}>
        <Input
          placeholder={'Email/Username'}
          radius={'top'}
          isErrored={errored}
          isLoginUsername
          change={(email: string) => setEmail(email)}
          value={email}
        />
        <Input
          placeholder={'Senha'}
          radius={'bottom'}
          isErrored={errored}       
          isPassword
          isLoginPassword
          change={(password: string) => setPassword(password)}
          value={password}
        />
      </View>
      <View style={styles.textUnderneathInputsContainer}>
        <TouchableWithoutFeedback onPress={() => {
          setErrored(false)
          navigation.navigate('Register')
        }} >
          <View style={styles.underlineText}>
            <Text style={styles.textUnderneathInputs}>Cadastre-se</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.underlineSecondText}>
          <Text style={styles.textUnderneathInputs}>Esqueceu a senha?</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonAuthentication text={'Login'} pressed={() => handleLogin()} />
      </View>
      <BottomAuthentication />
    </View>
  )
}

export default SignIn;