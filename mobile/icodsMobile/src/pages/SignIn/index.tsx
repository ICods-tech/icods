import styles from './styles';
import Input from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import Toast from 'react-native-toast-message';
import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { 
  View, 
  Text, 
  TouchableWithoutFeedback, 
  TouchableOpacity, 
  KeyboardAvoidingView 
} from 'react-native'
import { 
  HelpButtonContainer, 
  HelpButtonText, 
  HelpContainer,
  HelpContainerTexts,
  LoginButtonContainer,
  RegisterAndPassowordForgotContainer,
  SignInOptions,
  SpacingContainer,
  SpacingLine,
  SpacingText,
} from './newStyles';

import { Header } from '../../components/Authentication/Header';
import { SubmitButton } from '../../components/Authentication/SubmitButton';
import { LoginSocialButton } from '../../components/Authentication/LoginSocialButton';
import ButtonAuthentication from '../../components/Button';

import GoogleIcon from '../../assets/images/Icons/google_icon.svg'
import FacebookIcon from '../../assets/images/Icons/facebook_icon.svg';
import FooterAuthentication from '../../components/Authentication/AuthFooter';


const SignIn = () => {
  const { signIn, user } = useAuth()
  const navigation = useNavigation()
  const [ email, setEmail ] = useState<string>( 'jraphael@email.com' )
  const [ password, setPassword ] = useState<string>( '123456' )
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
      {/* <HeaderAuthentication /> */}
      <Header />
      
      <KeyboardAvoidingView behavior="height" style={styles.inputContainer}>
        {/* <View style={styles.inputContainer}> */}
        <SignInOptions>

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
        {/* </View> */}


          <RegisterAndPassowordForgotContainer>
            <HelpButtonContainer
                onPress={() => {
                  setErrored(false)
                  navigation.navigate('Register')}}
              >
              <HelpButtonText>Cadastre-se</HelpButtonText>
            </HelpButtonContainer>

            <HelpButtonContainer>
              <HelpButtonText>Esqueceu a senha?</HelpButtonText>
            </HelpButtonContainer>
          </RegisterAndPassowordForgotContainer>

          <SubmitButton
            onPress={() => handleLogin()} 
            text='Entrar'
          />

          <SpacingContainer>
            <SpacingLine style={{width: '40%'}}></SpacingLine>
            <SpacingText>Ou</SpacingText>
            <SpacingLine style={{width: '40%'}}></SpacingLine>
          </SpacingContainer>

          <LoginButtonContainer>
            <LoginSocialButton 
              title="Entrar com Google"
              icon={GoogleIcon}
              onPress={() => {}}
            />

            <LoginSocialButton 
              title="Entrar com Facebook"
              icon={FacebookIcon}
              onPress={() => {}}

            />
          
          </LoginButtonContainer>

        </SignInOptions>

        {/* <View style={styles.alternativeAuthenticationContainer}>
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
        </View> */}
        <SignInOptions>

          <HelpContainer>
              <HelpContainerTexts 
              style={{marginRight: RFValue(2) }}
                >Algum problema no login?
              </HelpContainerTexts>
              
              <HelpButtonContainer>
                <HelpButtonText>Contate-nos</HelpButtonText>
              </HelpButtonContainer>
          </HelpContainer>

        </SignInOptions>


      </KeyboardAvoidingView>
      <FooterAuthentication />
    </View>
  )
}

export default SignIn;