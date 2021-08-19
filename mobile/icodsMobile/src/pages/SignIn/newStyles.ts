import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';








export const SignInOptions = styled.View`
    width: 100%;
    padding: 0 ${RFValue(55)}px;
`;

export const SpacingContainer = styled.View`
    width: 100%;

    margin-top: ${RFValue(24)}px;

    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const SpacingLine = styled.View`
    height: 0.5px;
    background-color: rgba(0, 0, 0, 0.12);
`;

export const SpacingText = styled.Text`
    margin: 0 ${RFValue(15)}px 0 ${RFValue(15)}px;
    color: rgba(0, 0, 0, 0.6);
    font-size: ${RFValue(12)}px;
    font-weight: 500;
    letter-spacing: ${Dimensions.get('window').width*0.002}px;
`;


export const LoginButtonContainer = styled.View`
    width: 100%;
    height: ${RFValue(88)}px;

    margin-top: ${RFValue(22)}px;

    justify-content: space-between;
`;

export const HelpContainer = styled.View`
    width: 100%;

    margin: ${RFValue(12)}px 0 ${RFValue(24)}px 0;

    flex-direction: row;
    justify-content: center;
`;

export const HelpButtonContainer = styled.TouchableOpacity`
    border-bottom-width: 0.75px;
    border-bottom-color:'rgba(0, 0, 0, 0.4)';
`;

export const HelpButtonText = styled.Text`
    font-size: ${RFValue(10)}px;
    font-weight: 500;
    color: 'rgba(0, 0, 0, 0.4)';
    letter-spacing: ${Dimensions.get('window').width*0.001}px;
`;

export const RegisterAndPassowordForgotContainer = styled.View`
    width: 100%;
    
    justify-content: space-between;
    flex-direction: row;

    margin: ${RFValue(12)}px 0 ${RFValue(24)}px 0;
`;

export const HelpContainerTexts = styled.Text`
    font-size: ${RFValue(10)}px;
    color: 'rgba(0, 0, 0, 0.4)';
    font-weight: 400;

`;