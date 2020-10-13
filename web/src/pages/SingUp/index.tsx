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
import sessionsCover from '../../assets/qrcode-scan.png'
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
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(value: any) => setEmail(value.target.value)}
                    />

                    <Input
                        type='text'
                        placeholder='name'
                        value={name}
                        onChange={(value: any) => setName(value.target.value)}
                    />

                    <Input
                        type='password'
                        placeholder='Senha'
                        value={password}
                        onChange={(value: any) => setPassword(value.target.value)}
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