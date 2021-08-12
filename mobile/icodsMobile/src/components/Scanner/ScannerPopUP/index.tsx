import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import GiftIcon from '../../../assets/images/Icons/scanner/gift_icon.svg';
import CheckIcon from '../../../assets/images/Icons/scanner/check_icon.svg';
import CloseIcon from '../../../assets/images/Icons/scanner/close_icon.svg';
import CancelIcon from '../../../assets/images/Icons/scanner/cancel_icon.svg';
import { QRCode } from '../../../types/QRCode';

interface ScannerPopUPPros
{
  title: string | undefined;
  subtitle: string | undefined;
  icon: string | undefined;
  press: string | undefined;
  qrcode: QRCode | undefined;
}

const ScannerPopUP = ( {
  title,
  subtitle,
  icon,
  press,
  qrcode,
}: ScannerPopUPPros ) =>
{
  const navigation = useNavigation();

  // useEffect(() => {
  //   console.log('espere');
  //   setTimeout(15);
  //   console.log('esperando');
  //   navigation.navigate(`${press}`);

  // }, []);

  return (
    <View style={ styles.container }>
      <View style={ styles.popUp }>
        <View style={ styles.iconContainer }>
          { icon === 'gift' && <GiftIcon /> }
          { icon === 'check' && <CheckIcon /> }
          { icon === 'close' && <CloseIcon /> }
        </View>

        <Text style={ styles.popUpTitle }>{ title }</Text>
        <Text style={ styles.popUpSubtitle }>{ subtitle }</Text>

        <TouchableOpacity
          style={ styles.closeButton }
          onPress={ () => navigation.navigate( `${ press }`, { qrcode } ) }>
          <CancelIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScannerPopUP;
