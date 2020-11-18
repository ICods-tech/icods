import React, { useCallback, useState } from 'react';
import {
    Container,
    SessionsImage,
    SessionsInformation,
    SignSection,
    Logo,
    SignButtons,
    Input, SingUPButton
} from './styles'
import sessionsCover from '../../assets/qrcodescan-signup.svg'
import logo from '../../assets/logo.svg'
import api from '../../services/api'

const SingUp: React.FC = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const SingUpOnClick = useCallback(() => {
            try {
                console.log(email, password, name)
                api.post('/signup', { name, email, password }).then((response: any) => {
                    console.log(response.data)
                    // setError(false)
                })
            } catch (err) {
                // setError(true)
                console.error(err.message)
            }
        }, [name, email, password]
    )


    return (
        <Container>
            <SessionsInformation>
                <SignSection>
                    <Logo src={logo} alt="logo icods" />
                    <Input
                        type='text'
                        placeholder='Full Name'
                        value={name}
                        onChange={(e: any) => setName(e.target.value)}
                    />

                    <Input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                    />

                    <Input
                        type='password'
                        placeholder='Senha'
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                    />

                    <SignButtons onClick={SingUpOnClick}>Cadastrar</SignButtons>
                    <SingUPButton href="/" >Já é Cadastrado?</SingUPButton>
                </SignSection>
                <SessionsImage src={sessionsCover} alt='people scanning qrcode image' />
            </SessionsInformation>
        </Container>

    );
}


export default SingUp;