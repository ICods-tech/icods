import React from 'react';

import {
    Container,
    IcodsAsteroid,
    IcodsIcon,
    StyleStatusBar
} from './styles';

export function Header(){
    return(
        <Container>
            <StyleStatusBar/>

            <IcodsAsteroid />
            <IcodsIcon />
        </Container>
    )
}