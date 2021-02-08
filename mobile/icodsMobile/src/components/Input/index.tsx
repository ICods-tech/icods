import React, { useEffect, useRef, useState } from 'react'
import { TextInput, View, TextInputProps, TouchableOpacity } from 'react-native'
import EyeOpen from '../../assets/images/eye_open.svg'
import EyeClosed from '../../assets/images/eye_closed.svg'
import styles from './styles'

interface Props {
  radius: 'top'|'bottom';
  placeholder: string;
  change: (event: string) => void;
  value: string;
  isPassword?: boolean;
};

const Input = (props: Props) => {;

  let divStyle = styles.divStylePlain
  let [eyeState, setEyeState] = useState(true)

  if (props.radius === 'top') {
    divStyle = styles.divStyleTopRadius
  } else if (props.radius === 'bottom') {
    divStyle = styles.divStyleBottomRadius
  }

  return (
    <View style={divStyle} >
        <TextInput
          secureTextEntry={props.isPassword && eyeState}
          style={props.isPassword ? styles.inputStylePassword : styles.inputStyle}
          placeholder={props.placeholder}
          onChangeText={props.change}
          defaultValue={props.value}
      />
      {props.isPassword && (
        <TouchableOpacity style={styles.eyes} onPress={() => setEyeState(!eyeState)}> 
        { eyeState
          ? <EyeOpen/>
          : <EyeClosed/>
        }
        </TouchableOpacity>
      )}
    </View>)
}

export default Input