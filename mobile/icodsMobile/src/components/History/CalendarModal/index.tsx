import React, { useState } from 'react';
import Modal from 'react-native-modal'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import { color } from 'react-native-reanimated';

interface ModalInterface {
  visible: boolean,
  pressedOut: () => void,
}

const CalendarModal = ({ visible, pressedOut }: ModalInterface) => {
  const [selectedColor, setSelectedColor] = useState<Colors>('noFilter')
  return (
    <>
      <Modal
        style={visible ? styles.dropdownStyle : { display: 'none' }}
        animationIn={"fadeIn"}
        animationOut={"fadeOut"}
        isVisible={visible}
        onBackdropPress={pressedOut}
      >
        <View style={{ width: 200, height: 200, backgroundColor: 'green' }}>
          <Text style={{ color: "pink" }}>Meu pal</Text>
        </View>
      </Modal>
    </>
  )
}

export default CalendarModal