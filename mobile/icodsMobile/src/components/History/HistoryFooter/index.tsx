import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import HistoryIcon from '../../../assets/images/Icons/historyBlue.svg';
import SocialIcon from '../../../assets/images/Icons/socialDark.svg';
import QrCodeScanIcon from '../../../assets/images/Icons/qrcode_scanSmall.svg';
import styles from './styles';

const HistoryFooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.buttons}>
          <HistoryIcon />
          <Text style={styles.historyText}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.scanner} >
          <QrCodeScanIcon style={styles.scan} />
          <Text style={styles.scannerText}>Escanear</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}>
          <SocialIcon />
          <Text style={styles.socialText}>Social</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HistoryFooter;