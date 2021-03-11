import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react';
import { View, Text, Image, StatusBar, Button, SafeAreaView, TouchableOpacity, TouchableHighlight, Pressable, Modal, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Header from '../../assets/images/header-profile.svg'
import InfoAndEllipsis from '../../assets/images/info_and_ellipsis.svg'
import InfoIcon from '../../assets/images/Icons/info_icon.svg'
import BackButtonWhite from '../../assets/images/back-button-white.svg'
import EllipsisIcon from '../../assets/images/Icons/ellipsis.svg'
import EllipsisDashboard from '../../assets/images/Icons/ellipsis-dashboard.svg'
import ProfilePicture from '../../assets/images/profile-picture-edit.svg'
import styles from './styles';

interface ProfileProps {
  avatar?: string;
  fullName?: string;
  ellipsisPressed?: () => void;
}

const HeaderProfile = ({ fullName, avatar, ellipsisPressed }: ProfileProps) => {
  const [dropdownMenu, setDropdownMenu] = useState(false)
  return (
    <>
      <View style={styles.container}>
        <Header style={styles.headerColor} />
        <View style={styles.headerInformation}>
          <View style={styles.backButtonContainer}>
            <BackButtonWhite />
            <Text style={styles.accountText}>Conta</Text>
          </View>
          <View>
            <View style={styles.profileContainer}>
              <View style={styles.leftCloudsContainer}>
              </View>
              <View style={styles.middleProfileContainer}>
                <ProfilePicture />
                <Text style={styles.fullNameText}>Mucas Loreira</Text>
              </View>
              <View style={styles.rightCloudsContainer}>

              </View>
            </View>
          </View>
          {/* <TouchableOpacity onPress={ellipsisPressed}>
            <EllipsisDashboard style={styles.moreStyle} />
          </TouchableOpacity> */}
        </View>
      </View>
    </>
  )
}

export default HeaderProfile;