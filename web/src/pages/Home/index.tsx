import React, { useCallback, useState} from 'react'
import { 
  Container, 
  SessionsImage, 
  SessionsInformation, 
  SignSection, 
  Logo,
  SignButtons,
  Input, 
  SingUpButton
} from './styles'
import sessionsCover from '../../assets/qrcode-scan.png'
import logo from '../../assets/logo.svg'
import api from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { useHistory } from 'react-router-dom' 

const Home: React.FC = () => {  
    const history = useHistory()
    const { signIn, user } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = useCallback(async () => { 
      try {  
        await signIn({
          email,
          password
        })

        console.log(user)

        history.push('dashboard')
      }catch(err) {
        console.error(err.message)
      }
    }, [email, password, history, signIn, user]
  )

  return (
    <Container>
      <SessionsInformation>
        <SignSection>
          <Logo src={logo} alt="logo icods"/>
          <Input 
            type="text" 
            placeholder='Email' 
            value={email}
            onChange={(value:any) => setEmail(value.target.value)}/>
          <Input 
            type='password' 
            placeholder='Senha' 
            value={password}
            onChange={(value:any) => setPassword(value.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSignIn()}
          />

          <SignButtons onClick={handleSignIn}>Entrar</SignButtons>
          <SingUpButton href="/singup" >Criar nova conta</SingUpButton>
        </SignSection>
        <SessionsImage src={sessionsCover} alt='people scanning qrcode image'/>
      </SessionsInformation>
    </Container>
  )
}

export default Home