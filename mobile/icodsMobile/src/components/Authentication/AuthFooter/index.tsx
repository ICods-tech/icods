import React from 'react';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';
import SocialIcon from '../../../assets/images/Icons/footer/socialDark.svg';
import QrCodeScanIcon from '../../../assets/images/Icons/footer/qrcode_scanSmall.svg';
import ActivatedHomeIcon from '../../../assets/images/Icons/footer/activated-home.svg';
import DeactivatedHomeIcon from '../../../assets/images/Icons/footer/deactivated-home.svg';
import ActivatedHistoryIcon from '../../../assets/images/Icons/footer/activated-history.svg';
import DeactivatedHistoryIcon from '../../../assets/images/Icons/footer/deactivated-history.svg';
import DeactivatedNotificationsIcon from '../../../assets/images/Icons/footer/deactivated-bell.svg';

interface LoggedFooterProps {
  isHistory?: boolean;
  isDashboard?: boolean;
}


const LoggedFooter = (props: LoggedFooterProps) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={ styles.scanner } onPress={ () => navigation.navigate( 'Scanner' ) }>
          <QrCodeScanIcon style={ styles.scan } />
        </TouchableOpacity>
        <Text style={styles.scanText}>Escanear</Text>
      </View>
    </View>
  )
}

export default LoggedFooter;