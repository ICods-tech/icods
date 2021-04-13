import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StatusBar, Button, SafeAreaView } from 'react-native';
import styles from './styles';
import HeaderProfile from '../../components/HeaderProfile'
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface IFollowUsers {
  id: string;
  name: string;
  email: string;
  visibility: boolean;
}

interface IFollowingUsers {
  followingUsers: IFollowUsers[] | []
  followingCount: number
}

interface IFollowerUsers {
  followerUsers: IFollowUsers[] | []
  followersCount: number
}

const Profile = () => {
  const { user, token } = useAuth()

  const [following, setFollowing] = useState<IFollowingUsers>({ followingCount: 0, followingUsers: [] })
  const [followers, setFollowers] = useState<IFollowerUsers>({ followersCount: 0, followerUsers: [] })

  useEffect(() => {
    async function loadFollowing(): Promise<void> {
      console.log(token)
      await api.get('follow', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        console.log(response)
        setFollowing(response.data)
      })
    }

    async function loadFollowers(): Promise<void> {
      await api.get('followers', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        setFollowers(response.data)
      })
    }

    loadFollowing()
    loadFollowers()
  }, [token])

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