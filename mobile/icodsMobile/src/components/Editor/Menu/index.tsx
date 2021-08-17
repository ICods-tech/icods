import React from 'react';
import { SafeAreaView, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';

import FlashIcon from '../../../assets/images/Icons/editor/flash_filled.svg';
import SwitchIcon from '../../../assets/images/Icons/editor/switch_camera.svg';

interface MenuProps
{
  handleFlipCamera: () => void;
  handleTakePicture: () => void;
  handleStopVideo: () => void;
  handleFlashCamera: () => void;
  isRecording: boolean;
}

const Menu = ( props: MenuProps ) =>
{
  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.backgroundOptions }>
        { props.isRecording ? (
          <TouchableWithoutFeedback onPress={ () => props.handleStopVideo() }>
            <View style={ styles.screenshootButtonOne }>
              <View style={ styles.screenshootButtonRecordTwo }></View>
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback onPress={ () => props.handleTakePicture() }>
            <View style={ styles.screenshootButtonOne }>
              <View style={ styles.screenshootButtonTwo }></View>
            </View>
          </TouchableWithoutFeedback>
        ) }

        { !props.isRecording && (
          <TouchableWithoutFeedback onPress={ () => props.handleFlipCamera() }>
            <View style={ styles.flipButton }>
              <SwitchIcon />
            </View>
          </TouchableWithoutFeedback>
        ) }

        <TouchableWithoutFeedback onPress={ () => props.handleFlashCamera() }>
          <View style={ styles.infoButton }>
            <FlashIcon />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default Menu;
