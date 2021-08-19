import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

export const RegisterForm = styled.ScrollView.attrs(
    {
        showsHorizontalScrollIndicator: false,
        showsVerticalScrollIndicator: false,

    }
)`
    width: 100%;
    padding: 0 ${RFValue(55)}px;
`;

export const RegisterTitle = styled.Text`
    text-align: center;
    margin-bottom: ${RFValue(17)}px;
    margin-top: ${RFValue(8)}px;
    font-size: ${RFValue(16)}px;
    letter-spacing: ${Dimensions.get('window').width*0.002}px;

    padding: 0 ${RFValue(41)}px;

`;