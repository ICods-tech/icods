import styles from './styles'
import React, { useState } from 'react'
import EyeOpen from '../../assets/images/eye_open.svg'
import EyeClosed from '../../assets/images/eye_closed.svg'
import UserIcon from '../../assets/images/Icons/signIn-user.svg'
import KeyIcon from '../../assets/images/Icons/signIn-password.svg'
import { TextInput, View, TouchableOpacity } from 'react-native'

interface Props {
  radius: 'top' | 'bottom' | 'middle';
  placeholder: string;
  change: (event: string) => void;
  value: string;
  isPassword?: boolean;
  isLoginUsername?: boolean;
  isLoginPassword?: boolean;
};

const Input = (props: Props) => {
  let divStyle = styles.divStylePlain
  let [eyeState, setEyeState] = useState(true)

  if (props.radius === 'top') {
    divStyle = styles.divStyleTopRadius as any
  } else if (props.radius === 'bottom') {
    divStyle = styles.divStyleBottomRadius
  }

  return (
    <View style={divStyle} >
      {props.isLoginUsername && (<UserIcon style={{ alignSelf: 'center', marginLeft: 9, marginRight: 2}}/>)}
      {props.isLoginPassword && (<KeyIcon style={{ alignSelf: 'center', marginLeft: 9, marginRight: 2}}/>)}
      <TextInput
        autoCapitalize='none'
        secureTextEntry={props.isPassword && eyeState}
        style={props.isPassword ? styles.inputStylePassword : styles.inputStyle}
        placeholder={props.placeholder}
        placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
        onChangeText={props.change}
        defaultValue={props.value}
      />
      {props.isPassword && (
        <TouchableOpacity
          style={props.isLoginPassword ? styles.loginEyes : styles.eyes}
          onPress={() => setEyeState(!eyeState)}
        >
          {eyeState
            ? <EyeOpen />
            : <EyeClosed />
          }
        </TouchableOpacity>
      )}
    </View>)
}

export default Input