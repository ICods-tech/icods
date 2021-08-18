import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    height: ${RFValue(36)}px;
    
    background-color: #fff;
    border: 2px solid #2B90D9;
    border-radius: 4px;
`;

export const Button = styled(RectButton)`
    flex: 1;
    background-color: #fff;

    flex-direction: row;    
    align-items: center;
    justify-content: center;

`;


export const IconContainer = styled.View`
    padding: ${RFValue(8)}px;
`;

export const ButtonText = styled.Text`
    /* flex: 1; */
    /* text-align: left; */
    color: #2B90D9;
    font-size: ${RFValue(14)}px;
    font-weight: 700;
    letter-spacing: ${Dimensions.get('window').width*0.001}px;
`;