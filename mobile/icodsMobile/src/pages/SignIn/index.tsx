import styles from './styles';
import Input from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import Toast from 'react-native-toast-message';
import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native'
import ButtonAuthentication from '../../components/Button'
import GoogleIcon from '../../assets/images/Icons/google_icon.svg'
import FacebookIcon from '../../assets/images/Icons/facebook_icon.svg';
import FooterAuthentication from '../../components/Authentication/AuthFooter'
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
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
      <View style={styles.orContainer}>
        <View style={styles.orLeftHorizontalLine} />
        <Text style={styles.orText}>Ou</Text>
        <View style={styles.orRightHorizontalLine} />
      </View>
      <View style={styles.alternativeAuthenticationContainer}>
        <ButtonAuthentication
            pressed={() =>{}}
            text="Continue Com Google"
            notActivated
            icon={<GoogleIcon style={{ marginRight: 8}}/>}
          />
        <ButtonAuthentication
            pressed={() =>{}}
            text="Continue Com Facebook"
            notActivated
            icon={<FacebookIcon style={{ marginRight: 8}}/>}
          />
      </View>
      <TouchableOpacity
        style={styles.helpContainer}
      >
        <Text style={styles.helpText}>Algum problema no login? Contate-nos</Text>
      </TouchableOpacity>
      <FooterAuthentication />
    </View>
  )
}

export default SignIn;