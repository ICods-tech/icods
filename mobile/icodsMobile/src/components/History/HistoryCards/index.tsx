'use strict';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import RedFlag from '../../../assets/images/red_flag.svg';
import GreenFlag from '../../../assets/images/green_flag.svg';
import ArrowIcon from '../../../assets/images/Icons/arrow_icon.svg';
import GreenMarker from '../../../assets/images/Icons/cardMarker/Green.svg'
import RedMarker from '../../../assets/images/Icons/cardMarker/Red.svg'
import CyanMarker from '../../../assets/images/Icons/cardMarker/Cyan.svg'
import BlackMarker from '../../../assets/images/Icons/cardMarker/Black.svg'
import YellowMarker from '../../../assets/images/Icons/cardMarker/Yellow.svg'
import PinkMarker from '../../../assets/images/Icons/cardMarker/Pink.svg'
import BlueMarker from '../../../assets/images/Icons/cardMarker/Blue.svg'
import NoColorMarker from '../../../assets/images/Icons/cardMarker/NoColor.svg'
import HeartIcon from '../../../assets/images/Icons/heart_icon.svg';
import QrCodeImg from '../../../assets/images/qr_code.svg';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface HistoryCardsProps {
  id: string;
  creator: string;
  date: string;
  color: Colors;
  favorite: boolean;
}

const CardMarker = {
  'red': <RedMarker />,
  'green': <GreenMarker />,
  'blue': <BlueMarker />,
  'yellow': <YellowMarker />,
  'cyan': <CyanMarker />,
  'pink': <PinkMarker />,
  'black': <BlackMarker />,
}

export const CardColors = {
  'red': '#ff6d6d',
  'green': '#6dff73',
  'blue': '#2b90d9',
  'yellow': '#ffb600',
  'cyan': '#68f6ff',
  'pink': '#ff68c3',
  'black': '#000'
}


const HistoryCards = ({ id, creator, date, color, favorite }: HistoryCardsProps) => {
  const navigation = useNavigation()
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('QRCodeHistoryDetails', { id, color, creator, favorite })}>
        <View style={styles.qrCodeCard}>
          {(color in CardColors &&
            (color !== 'noFilter' && color !== 'noColor'))
            && CardMarker[color]}
          <View style={styles.qrCodeManneger}>
            <QrCodeImg />

            <View style={styles.qrCodeInfo}>
              <Text style={styles.textQRCodeInfo}>Código: {id.substr(id.length - 8)}</Text>
              <Text style={styles.textQRCodeInfo}>Conteúdo: <Text style={styles.privacyInfo}>Público</Text></Text>
              <Text style={styles.textQRCodeInfo}>Feito por: {creator}</Text>
              <Text style={styles.textQRCodeInfo}>Data: {date}</Text>
            </View>

            <View style={styles.rightQRCodeInfoButtons}>
              {favorite && (<HeartIcon />)}
              <ArrowIcon />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}

export default HistoryCards;