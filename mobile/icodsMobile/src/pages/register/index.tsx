import styles from './styles'
import { View, Text } from 'react-native'
import Input from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import Toast from 'react-native-toast-message'
import Back from '../../assets/images/back.svg'
import React, { useState, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import ButtonAuthentication from '../../components/Button'
import HeaderAuthentication from '../../components/Authentication/HeaderAuthentication'
import BottomAuthentication from '../../components/Authentication/BottomAuthentication'
import { delay } from '../../utils/delay'

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
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Conta criada com sucesso!',
        visibilityTime: 2000,
        bottomOffset: 100,
      })
      await delay(2250)
      await signIn({ email, password })
    } catch (error: any) {
      console.log('Error catched! 🧤')
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