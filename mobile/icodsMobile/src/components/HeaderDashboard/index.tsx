import { useNavigation } from '@react-navigation/native'
import React from 'react';
import {View, Text, Image, StatusBar, Button, SafeAreaView} from 'react-native';
import Header from '../../assets/images/header_dashboard.svg'
import ProfilePictureDashboard from '../../assets/images/profile_pic_dashboard.svg'
import InfoAndEllipsis from '../../assets/images/info_and_ellipsis.svg'
import InfoIcon from '../../assets/images/Icons/info_icon.svg'
import EllipsisIcon from '../../assets/images/Icons/ellipsis.svg'
import styles from './styles';

interface HeaderProps {
  avatar?: string;
  id?: string;
}

const HeaderDashboard = (props: HeaderProps) => {
  return (
    <>
    <SafeAreaView style={{backgroundColor: '#2b90d9' }} />
      <View style={styles.container}>
        <Header style={styles.headerColor} />
        <View style={styles.headerInformation}>
          <View style={styles.profileInfo}>
            <ProfilePictureDashboard style={styles.profilePicture} />
            <View style={styles.nameAndSurname}>
              <Text style={styles.profileName}>Marcelo</Text>
              <Text style={styles.profileName}>Alves</Text>
            </View>
          </View>
          <View style={styles.infoAndEllipsis}>
            <InfoIcon style={styles.info}/>
            <EllipsisIcon style={styles.ellipsis} />
          </View>
        </View>
      </View>
    </>
  )
}

export default HeaderDashboard;