'use strict';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import RedFlag from '../../../assets/images/red_flag.svg';
import GreenFlag from '../../../assets/images/green_flag.svg';
import ArrowIcon from '../../../assets/images/Icons/arrow_icon.svg';
import HeartIcon from '../../../assets/images/Icons/heart_icon.svg';
import QrCodeImg from '../../../assets/images/qr_code.svg';

import styles from './styles';

interface HistoryCardsProps {
  code: string;
  content: string;
  createdAt: string;
  date: string;
  statusFlag: string; // "green" | "red"
  favorite: boolean;
}

const HistoryCards = ({ code, content, createdAt, date, statusFlag, favorite }: HistoryCardsProps) => {
  let previousDate = '';

  const [, month,] = date.split('/')

  function dateSorting() {
    if (previousDate != date) {
      return <Text style={styles.date}>2 de Dezembro {month}</Text>
    }
  }


  function statusFlagRender() {
    if (statusFlag === "green") {
      return <GreenFlag style={styles.redStatus} />
    } else {
      return <RedFlag style={styles.redStatus} />
    }
  }

  function favoriteQrCode() {
    if (favorite) {
      return <HeartIcon />
    }
  }

  return (
    <>
      <View style={styles.qrCodeCard}>
        {statusFlagRender()}
        <View style={styles.qrCodeManneger}>
          <QrCodeImg />

          <View style={styles.qrCodeInfo}>
            <Text style={styles.textQRCodeInfo}>Código: {code}</Text>
            <Text style={styles.textQRCodeInfo}>Conteúdo: <Text style={styles.privacyInfo}>{content}</Text></Text>
            <Text style={styles.textQRCodeInfo}>Feito por: {createdAt}</Text>
            <Text style={styles.textQRCodeInfo}>Data: {date}</Text>
          </View>

          <View style={styles.rightQRCodeInfoButtons}>
            {favoriteQrCode()}
            <ArrowIcon />
          </View>
        </View>
      </View>
    </>
  )
}

export default HistoryCards;