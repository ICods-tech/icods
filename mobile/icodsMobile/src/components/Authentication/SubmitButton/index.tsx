import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Button, Text } from './styles';

interface SubmitButtonProps extends RectButtonProperties {
    text: string;
}

export function SubmitButton({text, ...rest }: SubmitButtonProps) {
    return(
        <Button {...rest}>
            <Text>{text}</Text>
        </Button>
    );
}