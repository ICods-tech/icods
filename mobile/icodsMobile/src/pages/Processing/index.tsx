import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ColorValue, SafeAreaView, Text, View } from 'react-native';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import styles from './styles';

const Processing = ( { route, _ }: any ) =>
{

  const navigation = useNavigation();
  const { user } = useAuth();
  const { qrcode, video } = route.params;
  const [ color, setColor ] = useState<ColorValue>( '#2B90D9' );
  const [ textTitle, setTextTitle ] = useState( 'Aguarde um momento' );
  const [ text, setText ] = useState( 'Estamos processando seu iCod e garantimos que será rapido! Assim que concluído, você ja pode presenteá-lo!' );

  useEffect( (): void =>
  {
    const sendVideo = async () =>
    {
      let formData = new FormData();
      formData.append( 'file', {
        uri: video,
        type: 'video/mp4',
        name: `${ Date.now() }_${ user.id }.mp4`
      } );

      await api.post( `/qrcodes/${ qrcode.id }`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      } );

      navigation.navigate( 'Dashboard' );
    }

    sendVideo();

  }, [ qrcode, video, textTitle, text ] )

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ [ styles.iconContainer, { backgroundColor: color, } ] }>

      </View>
      <Text style={ styles.textTile }>{ textTitle }</Text>
      <Text style={ styles.text }>{ text }</Text>
    </SafeAreaView >
  );
}

export default Processing;
