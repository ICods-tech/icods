import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import IcodsAsteroidImage from '../../../assets/images/icods_asteroid_responsive.svg';
import IcodsIconImage from '../../../assets/images/icods_icon.svg';

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(181)}px;
    align-items: center;
    /* background-color: #f2a; */
`;

export const IcodsAsteroid = styled(IcodsAsteroidImage).attrs({
    width: RFValue(347),
    height: RFValue(213)
})`
    position: absolute; 
    right: 0; 
    margin-top: -${RFValue(32)}px;
`;

export const IcodsIcon = styled(IcodsIconImage).attrs({
    width: RFValue(106),
    height: RFValue(75)
})`
    margin-top: ${RFValue(8)}px;
`;

export const StyleStatusBar = styled(StatusBar).attrs({
    backgroundColor:"#2b90d9",
    barStyle: "light-content"
})``;

