import styles from './styles'
import React, { useState } from 'react'
import EyeOpen from '../../assets/images/eye_open.svg'
import EyeClosed from '../../assets/images/eye_closed.svg'
import UserIcon from '../../assets/images/Icons/signIn-user.svg'
import KeyIcon from '../../assets/images/Icons/signIn-password.svg'
import { TextInput, View, TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

interface Props {
  value: string;
  isErrored?: boolean;
  placeholder: string;
  isPassword?: boolean;
  bottomErrored?: boolean;
  isLoginUsername?: boolean;
  isLoginPassword?: boolean;
  isSupportMessage?: boolean;
  change: (event: string) => void;
  radius: 'top' | 'bottom' | 'middle';
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
    <View style={[props.isErrored ?
        [divStyle, { borderColor: '#DF2C2C' }] :
        props.bottomErrored ? [divStyle, {borderBottomColor: '#DF2C2C'}] : divStyle]} >
      {props.isLoginUsername && (<UserIcon width={16} height={16} style={{ alignSelf: 'center', marginLeft: RFValue(9), marginRight: RFValue(2)}}/>)}
      {props.isLoginPassword && (<KeyIcon  width={16} height={16} style={{ alignSelf: 'center', marginLeft: RFValue(9), marginRight: RFValue(2)}}/>)}
      <TextInput
        autoCapitalize='none'
        secureTextEntry={props.isPassword && eyeState}
        style={props.isPassword ? styles.inputStylePassword : styles.inputStyle}
        placeholder={props.placeholder}
        placeholderTextColor={props.isErrored ? 'rgba(223, 44, 44, 0.6)' :'rgba(0, 0, 0, 0.6)'}
        onChangeText={props.change}
        defaultValue={props.value}
      />
      {props.isPassword && (
        <TouchableOpacity
          style={props.isLoginPassword ? styles.loginEyes : styles.eyes}
          onPress={() => setEyeState(!eyeState)}
        >
          {eyeState
            ? <EyeOpen  width={16} height={16}/>
            : <EyeClosed  width={16} height={16}/>
          }
        </TouchableOpacity>
      )}
    </View>)
}

export default Input