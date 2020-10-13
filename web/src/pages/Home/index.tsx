import React, { useCallback, useState} from 'react'
import { 
  Container, 
  SessionsImage, 
  SessionsInformation, 
  SignSection, 
  Logo,
  SignButtons,
  Input, SingUPButton
} from './styles'
import sessionsCover from '../../assets/qrcode-scan.png'
import logo from '../../assets/logo.svg'

import api from '../../services/api'

const Home: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SingIn =  useCallback(() => {
      try {         
        console.log(email, password)
        api.post('/signin', {email, password}).then((response:any) => {
            console.log(response.data)
            // setError(false)
        })
      }catch(err) {
          // setError(true)
          console.error(err.message)
      }

    }, [email, password]
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
            onChange={(value:any) => setPassword(value.target.value)}/>

          <SignButtons onClick={SingIn}>Entrar</SignButtons>
          <SingUPButton href="/singup" >Criar nova conta</SingUPButton>
        </SignSection>
        <SessionsImage src={sessionsCover} alt='people scanning qrcode image'/>
      </SessionsInformation>
    </Container>
  )
}

export default Home