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
  const { signIn, user, signOut } = useAuth()
  const navigation = useNavigation()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  console.log(user)

  const handleLogin = useCallback(async () => {
    try {
      console.log("Estou aqui")
      await signIn({email, password})
      console.log(user)
    } catch (err) {
      console.log('Error catched! 🧤')
      console.error(err.message)
    }
  }, [email, password, signIn, user])

  return (
    <View style={styles.background}>
      <HeaderAuthentication />
      <View style={styles.inputContainer}>
        <Input
          placeholder={'Email/Username'}
          radius={'top'}
          change={(email: string) => setEmail(email)}
          value={email}
        >  
        </Input>
        <Input 
          placeholder={'Senha'} 
          radius={'bottom'}
          isPassword
          change={(password: string) => setPassword(password)}
          value={password}
        >
        </Input>
      </View> 
      <View style={styles.textUnderneathInputsContainer}>
        <TouchableWithoutFeedback onPress={() => { navigation.navigate('Register') }} >
          <View style={styles.underlineText}>
            <Text style={styles.textUnderneathInputs}>Cadastre-se</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.underlineSecondText}>
          <Text style={styles.textUnderneathInputs}>Esqueceu a senha?</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonAuthentication text={'Login'} pressed={() => { handleLogin() }}/>
      </View>
      <BottomAuthentication/>
    </View>
  )
}

export default SignIn;