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
import FooterAuthentication from '../../components/Authentication/AuthFooter'
import { delay } from '../../utils/delay'
import { handleRegisterRouteErrors } from '../../utils/handleRegisterRouteErrors'
import { handleFieldAlreadyExistsErrors } from '../../utils/handleFieldAlreadyExistsErrors'

export interface IRouteErrors {
  name: boolean;
  email: boolean;
  username: boolean;
  password: boolean;
  passwordConfirmation: boolean;
}

const fields = {
  name: '',
  email: '',
  username: '',
  password: '',
  passwordConfirmation: ''
}

const Register = () => {
  const navigation = useNavigation()
  const { signIn, signUp } = useAuth()
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isErrored, setIsErrored] = useState<IRouteErrors>({
    name: false,
    email: false,
    username: false,
    password: false,
    passwordConfirmation: false
  })

  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('')

  const handleSignUp = useCallback(async () => {
    try {
      for (let field of Object.keys(fields)) {
        setIsErrored((previousErrors) => ({
          ...previousErrors,
          [field]: false
        }))
      }
      await signUp({ name, username, email, password, passwordConfirmation })
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Conta criada com sucesso!',
        visibilityTime: 1200,
        bottomOffset: 100,
      })
      await delay(1250)
      await signIn({ email, password })
    } catch (errorResponse: any) {
      const errors = errorResponse.response.data
      console.log(errors)
      if ('message' in errors) await handleRegisterRouteErrors(errors, setIsErrored)
      else await handleFieldAlreadyExistsErrors(errors, setIsErrored)
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
          isErrored={isErrored['name']}
          bottomErrored={isErrored['username']}
          change={(name: string) => setName(name)}
          value={name}
        />
        <Input
          placeholder={'Digite um username'}
          radius={'middle'}
          isErrored={isErrored['username']}
          bottomErrored={isErrored['email']}
          change={(username: string) => setUsername(username)}
          value={username}
        />
        <Input
          placeholder={'Digite seu email principal'}
          radius={'middle'}
          isErrored={isErrored['email']}
          bottomErrored={isErrored['passwordConfirmation'] || isErrored['password']}
          change={(email: string) => setEmail(email)}
          value={email}
        />
        <Input
          placeholder={'Digite sua senha'}
          radius={'middle'}
          isErrored={isErrored['passwordConfirmation'] || isErrored['password']}
          bottomErrored={isErrored['passwordConfirmation']}
          isPassword
          change={(password: string) => setPassword(password)}
          value={password}
        />
        <Input
          placeholder={'Digite novamente sua senha'}
          radius={'bottom'}
          isPassword
          isErrored={isErrored['passwordConfirmation'] || isErrored['password']}
          change={(passwordConfirmation: string) => setPasswordConfirmation(passwordConfirmation)}
          value={passwordConfirmation} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonAuthentication text={'Cadastrar'} pressed={() => { handleSignUp() }} />
      </View>
      <FooterAuthentication />
    </View>
  )
}

export default Register;