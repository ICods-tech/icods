import { useNavigation } from '@react-navigation/native'
import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, Image, StatusBar, Button, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import HeaderDashboard from '../../components/HeaderDashboard'
import styles from './styles';

const Dashboard = () => {
  return (
    <View style={styles.background}>
      <HeaderDashboard />
      <Text>🎸🦾</Text>
    </View>
  )
}

export default Dashboard;