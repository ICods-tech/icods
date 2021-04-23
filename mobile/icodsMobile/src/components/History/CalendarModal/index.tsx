import React, { useState } from 'react';
import Modal from 'react-native-modal'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import NotificationsIcon from '../../../assets/images/Icons/notifications_icon.svg'
import UserIcon from '../../../assets/images/Icons/user_icon.svg'
import ReportProblemIcon from '../../../assets/images/Icons/report_problem_icon.svg'
import SignOutIcon from '../../../assets/images/Icons/sign_out_icon.svg'
import styles from './styles'

interface ModalInterface {
  visible: boolean,
  pressedOut: () => void,
  profilePage: () => void,
  signOut: () => Promise<void>
}

const CalendarModal = ({ visible, pressedOut, profilePage, signOut }: ModalInterface) => {
  return (
    <Modal
      style={visible ? styles.dropdownStyle : { display: 'none' }}
      animationIn={"fadeIn"}
      animationOut={"fadeOut"}
      isVisible={visible}
      onBackdropPress={pressedOut}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPressOut={() => { console.log('oe') }}
      >
        <TouchableWithoutFeedback>
          <View>
            <TouchableOpacity style={styles.dropdownOptions}>
              <Text style={styles.dropdownOptionsText}>Ordenar por cor</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  )
}

export default CalendarModal