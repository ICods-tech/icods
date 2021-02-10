import { useNavigation } from '@react-navigation/native'
import React from 'react';
import {View, Text, Image, StatusBar, Button} from 'react-native';
import Header from '../../assets/images/header_dashboard.svg'
import styles from './styles';

interface HeaderProps {
  avatar?: string;
  id?: string;
}

const HeaderDashboard = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Header style={styles.headerColor}/>
    </View>
  )
}

export default HeaderDashboard;