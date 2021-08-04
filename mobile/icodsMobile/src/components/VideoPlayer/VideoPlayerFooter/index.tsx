import React from 'react';
import { View, Text, TouchableOpacity, Share } from 'react-native';
import styles from './styles';
import RNFS from 'react-native-fs';

import IconDownload from '../../../assets/images/icon_download.svg';
import IconLike from '../../../assets/images/icon_like.svg';
import IconShare from '../../../assets/images/icon_share.svg';

interface VideoPlayerFooterProps
{
  url: string;
}

const VideoPlayerFooter = ( { url }: VideoPlayerFooterProps ) =>
{

  const path = `${ RNFS.PicturesDirectoryPath }/teste.mp4`

  const onDownloadPress = async () =>
  {
    const headers = {
      'Accept': 'video/mp4',
      'Content-Type': 'video/mp4'
    }

    const options: RNFS.DownloadFileOptions = {
      fromUrl: url,
      toFile: path,
      headers: headers
    }

    const response = await RNFS.downloadFile( options );
    console.log( response );
    // Se job id 1 = download e ele se encontra na pasta de pictures
  }

  const onSharePress = async () =>
  {

    const result = await Share.share( {
      message: `${ url } \n\nSending video to test `,
      url,
    } );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={ onDownloadPress }>
        <IconDownload />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconLike />
      </TouchableOpacity>
      <TouchableOpacity onPress={ onSharePress }>
        <IconShare />
      </TouchableOpacity>
    </View>
  );
}

export default VideoPlayerFooter;
