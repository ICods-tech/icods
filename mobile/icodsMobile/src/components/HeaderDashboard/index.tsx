import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react';
import { View, Text, Image, StatusBar, Button, SafeAreaView, TouchableOpacity, TouchableHighlight, Pressable, Modal, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Header from '../../assets/images/header_dashboard.svg'
import ProfilePictureDashboard from '../../assets/images/profile_pic_dashboard.svg'
import InfoAndEllipsis from '../../assets/images/info_and_ellipsis.svg'
import InfoIcon from '../../assets/images/Icons/info_icon.svg'
import EllipsisIcon from '../../assets/images/Icons/ellipsis.svg'
import EllipsisDashboard from '../../assets/images/Icons/ellipsis-dashboard.svg'
import styles from './styles';

interface HeaderProps {
  avatar?: string;
  name?: string;
  surname?: string;
  ellipsisPressed?: () => void;
}

const HeaderDashboard = ({ name, surname, avatar, ellipsisPressed }: HeaderProps) => {
  const [dropdownMenu, setDropdownMenu] = useState(false)
  return (
    <>
    <SafeAreaView style={{backgroundColor: '#2b90d9' }} />
      <View style={styles.container}>
        <Header style={styles.headerColor} />
        <View style={styles.headerInformation}>
            <View style={styles.profileInfo}>
              {avatar
                ? <></>
                : <ProfilePictureDashboard style={styles.profilePicture} />
              }
              <View style={styles.nameAndSurname}>
                <Text style={styles.profileName}>{ name ? name : 'Unknown'}</Text>
                <Text style={styles.profileName}>{ surname ? surname : 'Surname'}</Text>
              </View>
          </View>
          <TouchableOpacity onPress={ellipsisPressed}>
              <EllipsisDashboard style={styles.moreStyle} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default HeaderDashboard;