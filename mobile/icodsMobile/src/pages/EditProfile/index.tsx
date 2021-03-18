import { useNavigation } from '@react-navigation/native'
import React, { useState, useCallback } from 'react';
import { View, Text, Image, StatusBar, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import Asteroid from '../../assets/images/asteroid_image.svg';
import IcodsIcon from '../../assets/images/icods_icon.svg';
import Back from '../../assets/images/back.svg';
import Input from '../../components/Input'
import HeaderAuthentication from '../../components/HeaderAuthentication'
import HeaderProfile from '../../components/HeaderProfile'
import BottomAuthentication from '../../components/BottomAuthentication'
import ButtonAuthentication from '../../components/ButtonAuthentication'
import ButtonOn from '../../assets/images/button-on.svg'
import ButtonOff from '../../assets/images/button-off.svg'
import { useAuth } from '../../hooks/auth';

const EditProfile = () => {
  const { user, token, alterProfileVisibility } = useAuth()

  const handleProfileVisibility = useCallback(async () => {
    try {
      await alterProfileVisibility(user.id, token)
      console.log(user)
    } catch (err) {
      console.log('Error catched! 🧤')
      console.error(err.message)
    }
  }, [user, token, alterProfileVisibility])

  return (
    <View style={styles.background}>
      <SafeAreaView style={{ backgroundColor: '#2b90d9' }} />
      <StatusBar
        backgroundColor="#2c92da"
        barStyle="light-content"
      />
      <HeaderProfile
        fullName={user.name}
        edit
      />
      <View style={styles.userInformationContainer}>
        <View style={styles.userLabelAndInfoContainer}>
          <Text style={styles.userInformationLabel}>Username</Text>
          <Text style={styles.userInformationText}>{user.name}</Text>
        </View>
        <View style={styles.userLabelAndInfoContainer}>
          <Text style={styles.userInformationLabel}>Email</Text>
          <Text style={styles.userInformationText}>{user.email}</Text>
        </View>
        <View style={styles.privateProfileContainer}>
          <Text style={styles.userInformationLabel}>Perfil privado</Text>
          {
            !user.visibility
              ? <TouchableOpacity onPress={async () => await handleProfileVisibility()}>
                <ButtonOn />
              </TouchableOpacity>
              : <TouchableOpacity onPress={async () => await handleProfileVisibility()}>
                <ButtonOff />
              </TouchableOpacity>
          }
        </View>
        <View style={styles.userLabelAndInfoContainer}>
          <Text style={styles.userInformationText}>Alterar senha</Text>
        </View>
        <View style={styles.userLabelAndInfoContainer}>
          <Text style={styles.userInformationText}>Sair</Text>
        </View>
      </View>
    </View>
  )
}

export default EditProfile;