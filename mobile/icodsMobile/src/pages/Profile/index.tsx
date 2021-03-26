import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StatusBar, Button, SafeAreaView } from 'react-native';
import styles from './styles';
import { Follow, Followers } from '../../hooks/auth'
import HeaderProfile from '../../components/HeaderProfile'
import { useAuth } from '../../hooks/auth';

const Profile = () => {
  const { user, following, followers, token } = useAuth()

  return (
    <View style={styles.background}>
      <SafeAreaView style={{ backgroundColor: '#2b90d9' }} />
      <StatusBar
        backgroundColor="#2c92da"
        barStyle="light-content"
      />
      <HeaderProfile
        fullName={user.name}
        following={following.followingCount}
        follower={followers.followersCount}
        edit={false}
      />
      <View style={styles.activitiesContainer}>
        <Text style={styles.activitiesText}>Atividades</Text>
      </View>
    </View>
  )
}

export default Profile;