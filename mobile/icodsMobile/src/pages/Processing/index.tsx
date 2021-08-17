import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, ColorValue, SafeAreaView, Text, View } from 'react-native';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import styles from './styles';

import Pulse from '../../assets/images/Icons/editor/pulse.svg';
import ErrorProcessing from '../../assets/images/Icons/editor/error_processing.svg';

const Processing = ( { route, _ }: any ) =>
{

  const navigation = useNavigation();
  const { user } = useAuth();
  const { qrcode, video } = route.params;
  const [ color, setColor ] = useState<ColorValue>( '#2B90D9' );
  const [ textTitle, setTextTitle ] = useState( 'Aguarde um momento' );
  const [ text, setText ] = useState( 'Estamos processando seu iCod e garantimos que será rapido! Assim que concluído, você ja pode presenteá-lo!' );

  const [ processedError, setProcessedError ] = useState( false );


  const sendVideo = async () =>
  {
    setColor( '#2B90D9' );
    setTextTitle( 'Aguarde um momento' );
    setText( 'Estamos processando seu iCod e garantimos que será rapido! Assim que concluído, você ja pode presenteá-lo!' );
    setProcessedError( false );

    let formData = new FormData();
    formData.append( 'file', {
      uri: video,
      type: 'video/mp4',
      name: `${ Date.now() }_${ user.id }.mp4`
    } );

    console.log( { formData, user, qrcode, video } );

    try
    {
      await api.post( `/qrcodes/${ qrcode.id }`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      } );

      navigation.navigate( 'Dashboard' );
    } catch ( error )
    {
      console.log( error );
      setColor( '#DF2C2C' );
      setTextTitle( 'Erro no Processamento' );
      setText( 'Identificamos um problema relacionad ao processamento do seu iCod, verifique sua conexão e tente novamente' );
      setProcessedError( true );
    }
  }

  useEffect( (): void =>
  {
    sendVideo();
  }, [ qrcode, video ] );

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ [ styles.iconContainer, { backgroundColor: color, } ] }>
        { processedError ? <ErrorProcessing /> : <Pulse /> }
      </View>
      <Text style={ styles.textTile }>{ textTitle }</Text>
      <Text style={ styles.text }>{ text }</Text>
      { processedError &&
        <TouchableWithoutFeedback onPress={ sendVideo }>
          <View style={ styles.errorButton }>
            <Text style={ styles.errorButtonText }>Tentar Novamente</Text>
          </View>
        </TouchableWithoutFeedback>

      }
    </SafeAreaView >
  );
}

export default Processing;
