import React, { useState } from 'react';
import Modal from 'react-native-modal'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Red from '../../../assets/images/Icons/colors/red.svg'
import Blue from '../../../assets/images/Icons/colors/blue.svg'
import Cyan from '../../../assets/images/Icons/colors/cyan.svg'
import Green from '../../../assets/images/Icons/colors/green.svg'
import Black from '../../../assets/images/Icons/colors/black.svg'
import Pink from '../../../assets/images/Icons/colors/pink.svg'
import Yellow from '../../../assets/images/Icons/colors/yellow.svg'
import NoColor from '../../../assets/images/Icons/colors/none.svg'
import ConfirmButton from '../ButtonCalendar'
import DatePicker from 'react-native-date-picker'
import styles from './styles'

interface ModalInterface {
  visible: boolean,
  pressedOut: () => void,
  confirmedFilter: (data: FilterData) => Promise<void>
}

interface FilterData {
  color: string,
  date: Date
}

const colorsIconsList = [
  <Red key={'red'} />,
  <Green key={'green'} />,
  <Blue key={'blue'} />,
  <Yellow key={'yellow'} />,
  <Cyan key={'cyan'} />,
  <Pink key={'pink'} />,
  <Black key={'black'} />,
  <NoColor key={'noColor'} />
]

type Colors = 'red' | 'green' | 'blue' | 'yellow' | 'cyan' | 'pink' | 'black' | 'noColor'

const CalendarModal = ({ visible, pressedOut, confirmedFilter }: ModalInterface) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [selectedColor, setSelectedColor] = useState<Colors>('noColor')

  // useEffect(() => {}, [])

  return (
    <Modal
      style={visible ? styles.dropdownStyle : { display: 'none' }}
      animationIn={"fadeIn"}
      animationOut={"fadeOut"}
      isVisible={visible}
      onBackdropPress={pressedOut}
    >
      <TouchableWithoutFeedback>
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => { }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.colorContainer}>
              <TouchableOpacity style={styles.dropdownOptions}>
                <Text style={styles.headerText}>Ordenar por cor</Text>
              </TouchableOpacity>
              <View style={styles.colorIconsContainer}>
                {colorsIconsList.map(color => {
                  return (
                    <TouchableOpacity
                      onPress={() => setSelectedColor(color.key as Colors)}
                      style={selectedColor === color.key && styles.selectedColor}
                    >
                      {color}
                    </TouchableOpacity>
                  )
                })}
              </View>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.headerText}>Ordenar por data</Text>
              <DatePicker
                date={selectedDate}
                onDateChange={setSelectedDate}
                androidVariant="iosClone"
                mode="date"
              />
            </View>
            <ConfirmButton pressed={() => confirmedFilter({
              date: selectedDate,
              color: selectedColor
            })} text={'Confirmar'} />
          </View>
        </TouchableOpacity>
      </TouchableWithoutFeedback>

    </Modal>
  )
}

export default CalendarModal