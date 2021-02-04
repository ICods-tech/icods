import React, { useEffect, useRef, useState } from 'react'
import { TextInput, View } from 'react-native'
import { useField } from '@unform/core';
import styles from './styles'

const Input = ({name: any, ...rest}, props) => {
  const inputRef = useRef(null) as any
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref: any) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref: any, value: any) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref: any) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  let divStyle = styles.divStylePlain

  if (props.radius === 'top') {
    divStyle = styles.divStyleTopRadius
  } else if (props.radius === 'bottom') {
    divStyle = styles.divStyleBottomRadius
  }

  return (
    <View style={divStyle} >
      <TextInput 
        ref={inputRef}
        style={styles.inputStyle} 
        placeholder={props.placeholder}
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        placeholderTextColor="#666360"
        onChangeText={value => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        {...rest}
      />
    </View>)
}

export default Input