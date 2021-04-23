import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text } from "react-native"
import { useNavigation } from '@react-navigation/native';
import CalendarModal from '../CalendarModal'
import SearchIcon from '../../../assets/images/Icons/search.svg';
import FavoriteIcon from '../../../assets/images/Icons/favorite_search.svg';
import BackButton from '../../../assets/images/back.svg';
import MenuButton from '../../../assets/images/Icons/filter_search.svg';
import styles from './styles';
import { useAuth } from '../../../hooks/auth';

const HeaderHistory = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false)
  const { user, signOut } = useAuth()

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => { navigation.navigate('Dashboard') }}>
            <BackButton />
          </TouchableOpacity>
          <Text style={styles.title}>Histórico</Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TouchableOpacity style={styles.searchIcon}>
              <SearchIcon />
            </TouchableOpacity>

            <TextInput
              style={styles.searchInput}
              placeholder="Procurar"
              placeholderTextColor="rgba(8, 9, 12, 0.2)"
            >
            </TextInput>
          </View>
          <View style={styles.optionsButtonsContainer}>
            <TouchableOpacity style={styles.optionsButton}>
              <FavoriteIcon style={styles.iconButton} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.optionsButton}>
              <MenuButton style={styles.iconButton} />
              <CalendarModal
                visible={modalVisible}
                pressedOut={() => setModalVisible(!modalVisible)}
                profilePage={() => {
                  setModalVisible(false)
                  navigation.navigate('Profile')
                }}
                signOut={async () => {
                  setModalVisible(false)
                  await signOut()
                }}
              />
            </TouchableOpacity>
          </View>
        </View >
      </View>
    </>
  );
}

export default HeaderHistory;