import React from 'react'
import { TextInput, View } from 'react-native'
import styles from './styles'

const Input = (props: any) => {
  let divStyle = styles.divStylePlain

  if (props.radius === 'top') {
    divStyle = styles.divStyleTopRadius
  } else if (props.radius === 'bottom') {
    divStyle = styles.divStyleBottomRadius
  }

  return (
    <View style={divStyle} >
      {props.isPassword
        ? (<TextInput secureTextEntry={true} style={styles.inputStyle} placeholder={props.placeholder}/>)
      : (<TextInput style={styles.inputStyle} placeholder={props.placeholder} />)}
    </View>)
}

export default Input