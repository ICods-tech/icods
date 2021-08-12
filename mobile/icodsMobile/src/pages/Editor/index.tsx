import React, { useState } from 'react';
import
{
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  View,
  Modal,
  Alert,
} from 'react-native';
import styles from './styles';
import { RNCamera } from 'react-native-camera';
import Header from '../../components/Header';
import Menu from '../../components/Editor/Menu';
import RNFS from 'react-native-fs';
import { VESDK, Configuration } from 'react-native-videoeditorsdk';
// import path from 'path';
import { require } from 'yargs';
import api from '../../services/api';
import { QRCode } from '../../types/QRCode';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';

const Editor = ( { route, _ } ) =>
{
  const navigation = useNavigation();
  const [ modalVisible, setModalVisible ] = useState( false );

  const { qrcode } = route.params;

  const [ camera, setCamera ] = useState<RNCamera>();
  const [ type, setType ] = useState( false );
  const [ flash, setFlash ] = useState( false );
  const [ focus, setFocus ] = useState( RNCamera.Constants.AutoFocus.on );
  const [ cameraZoom, setCameraZoom ] = useState( 0.0 );
  const [ isRecording, setIsRecording ] = useState( false );
  const [ video, setVideo ] = useState( "" );
  let camera2 = React.createRef<RNCamera>();

  const [ recordedData, setRecordedData ] = useState( '' );

  const handleCancel = () =>
  {
    setModalVisible( false );
  }

  const handleConfirm = () =>
  {
    if ( video === '' )
      return;

    setModalVisible( false );
    console.log( "Confirmei" );
    navigation.navigate( 'Processing', { qrcode, video } );
  }

  const handleFlipCamera = () =>
  {
    setType( !type );
  };

  const handleFlashCamera = () =>
  {
    setFlash( !flash );
  };

  const takePicture = async () =>
  {
    if ( camera )
    {
      try
      {
        console.log( 'Iniciando a gravação' );
        setIsRecording( true );
        const data = await camera.recordAsync( {
          quality: RNCamera.Constants.VideoQuality[ '1080p' ],
          videoBitrate: 1000 * 1000 * 5, // 5 Mbps
          orientation: 'portrait',
          maxDuration: 30,
          maxFileSize: 100 * 1024 * 1024,
        } );

        setRecordedData( data.uri );
        console.log( 'Iniciando a gravação' );
      } catch ( err )
      {
        console.log( err );
      }
    }
  };

  const onRecordEnd = () =>
  {
    setIsRecording( false );
    console.log( 'Parando a gravação' );
  };

  const stopVideo = () =>
  {
    if ( camera )
    {
      camera.stopRecording();
      setIsRecording( false );
      console.log( 'Parando a gravação' );
    }
  };

  const openEditor = () =>
  {
    if ( recordedData != null )
    {
      const video = recordedData;

      const configuration: Configuration = {
        // Configure sticker tool
        sticker: {
          // Enable personal stickers
          personalStickers: true,
          // Configure stickers
          categories: [
            // Create sticker category with stickers
            // Reorder and use existing sticker categories
            { identifier: 'imgly_sticker_category_animated' },
            { identifier: 'imgly_sticker_category_emoticons' },
            // Modify existing sticker category
            {
              identifier: 'imgly_sticker_category_shapes',
              items: [
                { identifier: 'imgly_sticker_shapes_badge_01' },
                { identifier: 'imgly_sticker_shapes_arrow_02' },
                { identifier: 'imgly_sticker_shapes_spray_03' },
              ],
            },
          ],
        },
      };

      VESDK.openEditor( video, configuration ).then(
        async ( result ) =>
        {
          console.log( result );
          const { video } = result;
          setModalVisible( true );

          setVideo( video );

          // console.log( `/qrcodes/${ qrcode.id }` );

          // let formData = new FormData();
          // formData.append( 'file', {
          //   uri: video,
          //   type: 'video/mp4',
          //   name: `${ Date.now() }_${ user.id }.mp4`
          // } );

          // await api.post( `/qrcodes/${ qrcode.id }`, formData, {
          //   headers: {
          //     "Content-Type": "multipart/form-data",
          //   },
          // } );

          // navigation.navigate( 'Dashboard' );

        },
        ( error ) =>
        {
          console.log( error );
        },
      );
    }
  };

  return (
    <SafeAreaView style={ styles.container }>
      <RNCamera
        style={ { flex: 1 } }
        ref={ ( camera: RNCamera ) =>
        {
          setCamera( camera );
        } }
        type={
          type ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back
        }
        autoFocus={ focus }
        flashMode={
          flash
            ? RNCamera.Constants.FlashMode.torch
            : RNCamera.Constants.FlashMode.off
        }
        zoom={ cameraZoom }
        onRecordingEnd={ onRecordEnd }
        faceDetectionMode={ RNCamera.Constants.FaceDetection.Mode.accurate }
        captureAudio={ true }
        androidCameraPermissionOptions={ {
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        } }
        androidRecordAudioPermissionOptions={ {
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        } }>
        { !isRecording && (
          <>
            <Header page="" navigate="Dashboard" color="#FFFFFF" />

            { recordedData !== "" && (
              <TouchableWithoutFeedback onPress={ openEditor }>
                <View style={ styles.buttonNext }>
                  <Text style={ { color: '#fff' } }>Próximo</Text>
                </View>
              </TouchableWithoutFeedback>
            ) }

          </>
        ) }
        <Menu
          handleFlipCamera={ handleFlipCamera }
          handleTakePicture={ takePicture }
          handleFlashCamera={ handleFlashCamera }
          handleStopVideo={ stopVideo }
          isRecording={ isRecording }
        />
      </RNCamera>

      <Modal
        animationType='slide'
        transparent={ true }
        visible={ modalVisible }
        onRequestClose={ () =>
        {
          Alert.alert( "Modal has been closed." );
          setModalVisible( !modalVisible );
        } }
      >
        <View style={ styles.modal }>
          <View style={ styles.modalContainer }>
            <View style={ styles.modalIcon }>
              <Text>icon</Text>
            </View>
            <Text style={ styles.modalTitle }>Você confirma a edição do iCod?</Text>
            <Text style={ styles.modalText }>Caso confirme, não será mais permitido a edição desse iCod</Text>
            <View style={ styles.modalButtonsContainer }>
              <TouchableWithoutFeedback onPress={ handleCancel }>
                <Text style={ { color: '#DF2C2C' } }>CANCELAR</Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={ handleConfirm }>
                <Text style={ { color: '#2B90D9' } }>CONFIRMAR</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Editor;
