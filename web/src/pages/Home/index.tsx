import React from 'react'
import { 
  Container, 
  SessionsImage, 
  SessionsInformation, 
  SignSection, 
  Logo,
  SignButtons,
  Input
} from './styles'
import sessionsCover from '../../assets/qrcode-scan.png'
import logo from '../../assets/logo.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <SessionsInformation>
        <SignSection>
          <Logo src={logo} alt="logo icods"/>
          <Input type="text" placeholder='Email'/>
          <Input type='text' placeholder='Senha'/>
          <SignButtons>Entrar</SignButtons>
        </SignSection>
        <SessionsImage src={sessionsCover} alt='people scanning qrcode image'/>
      </SessionsInformation>
    </Container>
  )
}

export default Home