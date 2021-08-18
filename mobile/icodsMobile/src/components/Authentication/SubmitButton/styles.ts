import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

export const Button = styled(RectButton)`
    width: 100%;
    height: ${RFValue(36)}px;

    background-color: #2B90D9;
    border-radius: 4px;

    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    font-size: ${RFValue(14)}px;
    color: #fff;
    font-weight: 700;
    letter-spacing: ${Dimensions.get('window').width*0.001}px;
`;