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
import Button from '../../Button'
import styles from './styles'
import MonthPicker from 'react-native-month-year-picker';
import CalendarModal from '../CalendarModal';

interface ModalInterface {
  visible: boolean,
  pressedOut: () => void,
  confirmedFilter: (data: FilterData) => Promise<void>,
  initialDateValue: undefined
}

interface FilterData {
  color: string,
  date: Date | undefined
}

export const colorsIconsList = [
  <Red key={'red'} />,
  <Green key={'green'} />,
  <Blue key={'blue'} />,
  <Yellow key={'yellow'} />,
  <Cyan key={'cyan'} />,
  <Pink key={'pink'} />,
  <Black key={'black'} />,
  <NoColor key={'noFilter'} />,
]


const FilterModal = ({ visible, pressedOut, confirmedFilter }: ModalInterface) => {
  const [selectedColor, setSelectedColor] = useState<Colors>('noFilter')
  const [calendarVisible, setCalendarVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  return (
    <>
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
            <View style={styles.outerModalContainer}>
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
                  <Text style={[styles.headerText, styles.orderDataText]}>Ordenar por data</Text>
                  <Button
                    pressed={() => {
                      setCalendarVisible(!calendarVisible)
                    }}
                    text={"Escolher Data"}
                  />
                </View>
                <View style={styles.bottomContainer}>
                  <TouchableOpacity onPress={() => {
                    setCalendarVisible(false)
                    pressedOut()
                  }}>
                    <Text style={[styles.bottomText, styles.cancelText]}>CANCELAR</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    setCalendarVisible(false)
                    confirmedFilter({
                      date: selectedDate,
                      color: selectedColor
                    })
                    setSelectedDate(undefined)
                  }}>
                    <Text style={styles.bottomText}>CONFIRMAR</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {calendarVisible && (
                <View style={{
                  opacity: 1,
                  display: 'flex',
                  marginTop: 'auto',
                  alignSelf: 'flex-start'
                }}>
                  <MonthPicker
                    okButton="Filtrar pelo mês"
                    cancelButton="Cancelar"
                    onChange={(event: any, newDate: any) => {
                      setSelectedDate(newDate)
                    }}
                    value={selectedDate ? selectedDate : new Date()}
                    maximumDate={new Date()}
                    locale="pt-BR"
                  />
                </View>
              )}
            </View>
          </TouchableOpacity>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  )
}

export default FilterModal