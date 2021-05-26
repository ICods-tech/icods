import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text } from "react-native"
import { useNavigation } from '@react-navigation/native';
import FilterModal from '../FilterModal'
import SearchIcon from '../../../assets/images/Icons/search.svg';
import FavoriteIcon from '../../../assets/images/Icons/favorite_search.svg';
import BackButton from '../../../assets/images/back.svg';
import MenuButton from '../../../assets/images/Icons/filter_search.svg';
import styles from './styles';
import { useAuth } from '../../../hooks/auth';

interface HeaderHistoryProps {
  setColorAndDate: ({ date, color }: ColorAndDateProps) => void
}

interface ColorAndDateProps {
  date: Date | undefined,
  color: string
}

const HeaderHistory = ({ setColorAndDate }: HeaderHistoryProps) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

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
              <MenuButton
                style={styles.iconButton}
              />
              <FilterModal
                visible={modalVisible}
                pressedOut={() => setModalVisible(!modalVisible)}
                selectDate={() => { }}
                confirmedFilter={async ({ date, color }) => {
                  setModalVisible(false)
                  setColorAndDate({ date, color })
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