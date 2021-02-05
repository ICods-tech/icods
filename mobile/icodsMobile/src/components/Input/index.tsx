import React, { useEffect, useRef, useState } from 'react'
import { TextInput, View, TextInputProps } from 'react-native'
import styles from './styles'

interface Props {
  radius: 'top'|'bottom';
  placeholder: string;
  change: (event: string) => void,
  value: string;
};

const Input = (props: Props) => {;

  let divStyle = styles.divStylePlain

  if (props.radius === 'top') {
    divStyle = styles.divStyleTopRadius
  } else if (props.radius === 'bottom') {
    divStyle = styles.divStyleBottomRadius
  }

  return (
    <View style={divStyle} >
      <TextInput 
        style={styles.inputStyle} 
        placeholder={props.placeholder}
        onChangeText={props.change}
        defaultValue={props.value}
      />
    </View>)
}

export default Input