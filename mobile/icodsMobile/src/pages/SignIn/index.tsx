import { useNavigation } from '@react-navigation/native'
import React from 'react';
import {View, Text, Image, StatusBar, Button, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import Asteroid from '../../assets/images/asteroid_image.svg';
import IcodsIcon from '../../assets/images/icods_icon.svg';
import Back from '../../assets/images/back.svg';
import Input from '../../components/Input'
import HeaderAuthentication from '../../components/HeaderAuthentication'
import BottomAuthentication from '../../components/BottomAuthentication'
import ButtonAuthentication from '../../components/ButtonAuthentication'
import api from '../../services/api'

const SignIn = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.background}>
      <HeaderAuthentication />
      <View style={styles.inputContainer}>
        <Input placeholder={'Email/Username'} radius={'top'}></Input>
        <Input placeholder={'Senha'} radius={'bottom'}></Input>
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
        <ButtonAuthentication text={'Login'} />
      </View>
      <BottomAuthentication/>
    </View>
  )
}

export default SignIn;