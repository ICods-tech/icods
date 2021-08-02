import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import IconDownload from '../../../assets/images/icon_download.svg';
import IconLike from '../../../assets/images/icon_like.svg';
import IconShare from '../../../assets/images/icon_share.svg';

const VideoPlayerFooter = () =>
{
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IconDownload />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconLike />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconShare />
      </TouchableOpacity>
    </View>
  );
}

export default VideoPlayerFooter;
