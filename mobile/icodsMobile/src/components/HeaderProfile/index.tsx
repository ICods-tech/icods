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
import CloudLeft from '../../assets/images/cloud-profile-left.svg'
import CloudRightTop from '../../assets/images/cloud-right-1.svg'
import CloudRightBottomn from '../../assets/images/cloud-right-2.svg'
import EditIcon from '../../assets/images/Icons/edit-icon.svg'
import ButtonProfilePicture from '../../components/ButtonProfilePicture'
import styles from './styles';

interface ProfileProps {
  avatar?: string;
  fullName?: string;
  following?: Number;
  follower?: Number;
  edit?: boolean;
  ellipsisPressed?: () => void;
}

const HeaderProfile = ({ fullName, avatar, following, follower, edit, ellipsisPressed }: ProfileProps) => {
  const navigation = useNavigation()
  return (
    <>
      <View style={styles.container}>
        <Header style={styles.headerColor} />
        <View style={styles.headerInformation}>
          <View style={styles.backButtonContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackButtonWhite />
            </TouchableOpacity>
            {edit ?
              <Text style={styles.accountText}>
                Editar
              </Text>
              : <Text style={styles.accountText}>
                Conta
              </Text>}
          </View>
          <View>
            <View style={styles.profileContainer}>
              <View style={styles.leftCloudsContainer}>
                <CloudLeft style={styles.cloudLeft} />
              </View>
              <View style={styles.middleProfileContainer}>
                <View style={styles.profilePictureContainer}>
                  {!edit && (
                    <TouchableOpacity style={styles.editIcon} onPress={() => navigation.navigate('EditProfile', { following, follower })}>
                      <EditIcon />
                    </TouchableOpacity>
                  )}

                  <ProfilePicture />
                </View>
                {
                  edit ?
                    <ButtonProfilePicture
                      text={'Trocar sua foto de perfil'}
                    />
                    : (fullName
                      ? <Text style={styles.whiteText}>
                        {fullName}
                      </Text>
                      : <Text style={styles.whiteText}>
                        Mucas Loreira
                      </Text>)
                }

              </View>
              <View style={styles.rightCloudsContainer}>
                <CloudRightTop style={styles.rightCloudsTop} />
                <CloudRightBottomn style={styles.rightCloudsBottomn} />
              </View>
            </View>
          </View>
          <View style={styles.followingFollowersContainers}>
            <View style={styles.connections}>
              <Text style={styles.whiteText}>Seguidores</Text>
              {
                follower
                  ? <Text style={styles.whiteText}>{follower}</Text>
                  : <Text style={styles.whiteText}>0</Text>
              }
            </View>
            <View style={styles.connections}>
              <Text style={styles.whiteText}>Seguindo</Text>
              {
                following
                  ? <Text style={styles.whiteText}>{following}</Text>
                  : <Text style={styles.whiteText}>0</Text>
              }
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