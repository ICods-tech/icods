import React from 'react';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';
import SocialIcon from '../../assets/images/Icons/footer/socialDark.svg';
import QrCodeScanIcon from '../../assets/images/Icons/footer/qrcode_scanSmall.svg';
import ActivatedHomeIcon from '../../assets/images/Icons/footer/activated-home.svg';
import DeactivatedHomeIcon from '../../assets/images/Icons/footer/deactivated-home.svg';
import ActivatedHistoryIcon from '../../assets/images/Icons/footer/activated-history.svg';
import DeactivatedHistoryIcon from '../../assets/images/Icons/footer/deactivated-history.svg';
import DeactivatedNotificationsIcon from '../../assets/images/Icons/footer/deactivated-bell.svg';

interface LoggedFooterProps {
  isHistory?: boolean;
  isDashboard?: boolean;
}


const LoggedFooter = (props: LoggedFooterProps) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Dashboard')}
          style={styles.buttons}
        >
          {props.isDashboard && <View style={ styles.horizontalBlueHomeBar} />}
          {props.isDashboard ?
            <ActivatedHomeIcon /> :
            <DeactivatedHomeIcon />
          }
          <Text style={props.isDashboard ? styles.homeText : [styles.homeText, { color: '#000'}]}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('History')}
          style={styles.buttons}
        >
          {props.isHistory && <View style={ styles.horizontalBlueHomeBar} />}
          {props.isHistory ? <ActivatedHistoryIcon /> : <DeactivatedHistoryIcon />}
          <Text style={props.isHistory ? styles.historyText : [styles.historyText, { color: '#000'}]}>Histórico</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate( 'Scanner' ) } style={ styles.scanner } >
          <QrCodeScanIcon style={styles.scan} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <DeactivatedNotificationsIcon />
          <Text style={styles.notificationsText}>Notificação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <SocialIcon />
          <Text style={styles.socialText}>Social</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoggedFooter;