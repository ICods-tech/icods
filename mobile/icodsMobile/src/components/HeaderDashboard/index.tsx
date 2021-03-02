import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react';
import { View, Text, Image, StatusBar, Button, SafeAreaView, TouchableOpacity, TouchableHighlight, Pressable, Modal, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Header from '../../assets/images/header_dashboard.svg'
import ProfilePictureDashboard from '../../assets/images/profile_pic_dashboard.svg'
import InfoAndEllipsis from '../../assets/images/info_and_ellipsis.svg'
import InfoIcon from '../../assets/images/Icons/info_icon.svg'
import EllipsisIcon from '../../assets/images/Icons/ellipsis.svg'
import NotificationsIcon from '../../assets/images/Icons/notifications_icon.svg'
import UserIcon from '../../assets/images/Icons/user_icon.svg'
import ReportProblemIcon from '../../assets/images/Icons/report_problem_icon.svg'
import SignOutIcon from '../../assets/images/Icons/sign_out_icon.svg'
import styles from './styles';

interface HeaderProps {
  avatar?: string;
  name?: string;
  surname?: string;
  signOut?: () => Promise<void>;
}

const HeaderDashboard = ({ name, surname, avatar, signOut }: HeaderProps) => {
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
            <View style={styles.infoAndEllipsis}>
                <InfoIcon style={styles.info} />
                <Pressable style={styles.ellipsisContainer} onPress={() => {
                  setDropdownMenu(true)
                }}>
                  <EllipsisIcon style={styles.ellipsis} />
                </Pressable>
          </View>
          <Modal
            animationType={"fade"}
            visible={dropdownMenu}
            onRequestClose={() => {setDropdownMenu(false)}}
            transparent={true}>
            <TouchableOpacity
                activeOpacity={1} 
                onPressOut={() => {setDropdownMenu(false)}}
            >
              <TouchableWithoutFeedback>
                  <View style={dropdownMenu ? styles.dropdownStyle : { display: 'none' }}>
                    <View style={styles.dropdownOptions}>
                      <NotificationsIcon/>
                      <Text style={styles.dropdownOptionsText}>Notificações</Text>
                    </View>
                    <View style={styles.dropdownOptions}>
                      <UserIcon />
                      <Text style={styles.dropdownOptionsText}>Conta</Text>
                    </View>
                    <View style={styles.dropdownOptions}>
                      <ReportProblemIcon />
                      <Text style={styles.dropdownOptionsText}>Reportar problema</Text>
                    </View>
                      <TouchableOpacity style={styles.dropdownOptions} onPress={() => signOut}>
                        <SignOutIcon />
                        <Text style={styles.dropdownOptionsText}>Sair</Text>
                      </TouchableOpacity>
                      {/* <TouchableOpacity 
                        style={dropdownMenu ? styles.signOutContainer : {display: 'none'}} 
                        onPress={() => console.log("FAMÍLIA")}>
                    </TouchableOpacity> */}
                  </View>
                </TouchableWithoutFeedback>
              </TouchableOpacity>
            </Modal>
        </View>
      </View>
    </>
  )
}

export default HeaderDashboard;