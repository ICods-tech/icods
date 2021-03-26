import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StatusBar, Button, SafeAreaView } from 'react-native';
import styles from './styles';
import { Follow, Followers } from '../../hooks/auth'
import HeaderProfile from '../../components/HeaderProfile'
import { useAuth } from '../../hooks/auth';

const Profile = () => {
  const { user, getFollowing, getFollowers, token } = useAuth()
  const [followingData, setFollowingData] = useState<Follow | null>(null)
  const [followersData, setFollowersData] = useState<Followers | null>(null)
  console.log(followingData, followersData)

  useEffect(() => {
    async function loadFollowing() {
      const { followingUsers, followingCount } = await getFollowing(user.id, token)
      setFollowingData({
        followingUsers,
        followingCount
      })
    }

    async function loadFollowers() {
      const { followerUsers, followersCount } = await getFollowers(user.id, token)
      setFollowersData({
        followerUsers,
        followersCount
      })
    }

    loadFollowing()
    loadFollowers()

    console.log(followingData, followersData)

  }, [getFollowing, getFollowers])

  return (
    <View style={styles.background}>
      <SafeAreaView style={{ backgroundColor: '#2b90d9' }} />
      <StatusBar
        backgroundColor="#2c92da"
        barStyle="light-content"
      />
      <HeaderProfile
        fullName={user.name}
        following={followingData?.followingCount}
        follower={followersData?.followersCount}
        edit={false}
      />
      <View style={styles.activitiesContainer}>
        <Text style={styles.activitiesText}>Atividades</Text>
      </View>
    </View>
  )
}

export default Profile;