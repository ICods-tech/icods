import React, { useState } from 'react';
import { View, Text, SafeAreaView, ColorValue, StyleSheet, Dimensions, Alert, Modal } from 'react-native';
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';
import Header from '../../components/Header';
import Mask from '../../components/Scanner/Mask';
import styles from './styles';
import ScannerPopUP from '../../components/Scanner/ScannerPopUP';
import api from '../../services/api';
import { QRCode } from '../../types/QRCode';
import { useAuth } from '../../hooks/auth';
import LoggedFooter from '../../components/LoggedFooter';

interface PopUp
{
  title: string;
  label: string;
  icon: string;
  press: string;
}

const Scanner = () =>
{
  const { user } = useAuth();
  const page = user ? 'Dashboard' : 'SignIn';
  const [ camera, setCamera ] = useState<RNCamera>();
  const [ qrCodeValidate, setQrCodeValidate ] = useState( false );
  const [ qrcode, setQrcode ] = useState<QRCode>();

  const [ popUp, setPopUp ] = useState<PopUp>();

  const barcodeRecognized = async ( { data }: BarCodeReadEvent ) =>
  {
    if ( qrCodeValidate ) return;

    await api
      .get( `qrcodes/${ data }` )
      .then( ( response: any ) =>
      {
        const qrCode: QRCode = response.data;
        setQrcode( qrCode );

        if ( qrCode.enabled )
        {
          setQrCodeValidate( true );
          setPopUp( {
            title: 'Você tem um presente iCods',
            label: 'Agora é a vez de você visualiza-lo',
            icon: 'gift',
            press: 'VideoPlayer',
          } );
        } else
        {
          setQrCodeValidate( true );
          setPopUp( {
            title: 'QR Code lido com sucesso',
            label: 'Agora é a vez de você editar',
            icon: 'check',
            press: 'Editor',
          } );
        }
      } )
      .catch( ( error: any ) =>
      {
        setQrCodeValidate( true );
        setPopUp( {
          title: 'O QR Code não pertence ao iCods',
          label: 'Tente escanear um QR Code da iCods',
          icon: 'close',
          press: page,
        } );
      } );
  };

  return (
    <SafeAreaView style={ styles.container }>
      <RNCamera
        ref={ ( camera: RNCamera ) =>
        {
          setCamera( camera );
        } }
        style={ { flex: 1 } }
        onBarCodeRead={ barcodeRecognized }>
        <Mask read={ qrCodeValidate } />

        <View style={ styles.textContainer }>
          <Header page="Escanear" navigate={ page } color="#FFFFFF" />
          <View style={ { alignItems: 'center', justifyContent: 'center' } }>
            <Text style={ styles.textParagraph }>
              Aponte o QR CODE para região abaixo
            </Text>
          </View>
        </View>

        { qrCodeValidate && (
          <ScannerPopUP
            press={ popUp?.press }
            title={ popUp?.title }
            subtitle={ popUp?.label }
            icon={ popUp?.icon }
            qrcode={ qrcode }
          />
        ) }

        { user &&
          <LoggedFooter />
        }
      </RNCamera>
    </SafeAreaView>
  );
};

export default Scanner;
