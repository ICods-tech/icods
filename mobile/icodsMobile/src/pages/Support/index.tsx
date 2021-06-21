import styles from './styles'
import email from 'react-native-email'
import Button from '../../components/Button'
import BackButton from '../../assets/images/back.svg'
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, Image, StatusBar, SafeAreaView, TouchableWithoutFeedback, TouchableOpacity, TextInput, NativeSyntheticEvent, TextInputChangeEventData, Platform } from 'react-native'
import Toast from 'react-native-toast-message'

const Support = () => {
  const [supportMessage, setSupportMessage] = useState<string>('')
  const navigation = useNavigation();

  const handleEmail = useCallback(() => {
    if (Platform.OS !== 'ios') {
      const emailTo = 'icods.tech@gmail.com'
      email(emailTo, {
          subject: 'Mensagem de suporte de usuário iCods',
          body: supportMessage
      }).catch(console.error)
    }
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Mensagem enviada com sucesso',
      visibilityTime: 1200,
      bottomOffset: 100,
    })
  }, [supportMessage])
  
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor="#2b90d9"
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <BackButton />
          </TouchableOpacity>
          <Text style={styles.title}>Suporte</Text>
        </View>
        <View style={styles.helpTextContainer}>
          <Text style={styles.helpText}>Escreva sobre o problema ocorrido para que
          possamos ajuda-lo:</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.helpInput}
            placeholder='Mensagem'
            multiline
            value={supportMessage}
            placeholderTextColor='rgba(40, 44, 55, 0.6)'
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setSupportMessage(e.nativeEvent.text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            pressed={() => handleEmail()}
            text={'Enviar'}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Support;