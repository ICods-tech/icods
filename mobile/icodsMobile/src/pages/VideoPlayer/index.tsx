import React, { useRef, useState } from 'react';
import { SafeAreaView, Platform, View, Text } from 'react-native'
import Video from 'react-native-video';
import styles from './styles';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import { is } from 'date-fns/locale';
import VideoPlayerFooter from '../../components/VideoPlayer/VideoPlayerFooter';

const VideoPlayer = () =>
{

  const [ videoPlayer, setVideoPlayer ] = useState<Video | null>();
  const [ duration, setDuration ] = useState( 0 );
  const [ paused, setPaused ] = useState( true );

  const [ currentTime, setCurrentTime ] = useState( 0 );
  const [ isLoading, setIsLoading ] = useState( true );
  const [ playerState, setPlayerState ] = useState( PLAYER_STATES.PAUSED );

  const onSeek = ( seek: any ) =>
  {
    videoPlayer?.seek( seek );
  }

  const onSeeking = ( currentVideoTime: number ) => setCurrentTime( currentVideoTime );

  const onPaused = ( newState: PLAYER_STATES ) =>
  {
    setPaused( !paused );
    setPlayerState( newState );
  };

  const onReplay = () =>
  {
    videoPlayer?.seek( 0 );
    setCurrentTime( 0 );
    if ( Platform.OS === 'android' )
    {
      setPlayerState( PLAYER_STATES.PAUSED );
      setPaused( true );
    } else
    {
      setPlayerState( PLAYER_STATES.PLAYING );
      setPaused( false );
    }
  };

  const onProgress = ( data: any ) =>
  {
    if ( !isLoading )
    {
      setCurrentTime( data.currentTime );
    }
  };

  const onLoad = ( data: any ) =>
  {
    console.log( data );
    setDuration( Math.round( data.duration ) );
    setIsLoading( false );
  };

  const onLoadStart = () => setIsLoading( true );

  const onEnd = () =>
  {
    setPlayerState( PLAYER_STATES.ENDED );
    setCurrentTime( duration );
  };

  return (
    <SafeAreaView style={ styles.container }>
      <Video
        onEnd={ onEnd }
        onLoad={ onLoad }
        onLoadStart={ onLoadStart }
        posterResizeMode={ 'cover' }
        onProgress={ onProgress }
        paused={ paused }
        resizeMode={ 'contain' }

        ref={ ( ref ) => { setVideoPlayer( ref ); } }
        source={ { uri: 'https://bucket-nodejs.s3.amazonaws.com/LOGO+VETOR_1.mkv', type: "video/mkv" } }
        style={ styles.video }
      />

      <MediaControls
        isFullScreen={ false }
        duration={ duration }
        isLoading={ isLoading }
        progress={ currentTime }
        onPaused={ onPaused }
        onReplay={ onReplay }
        onSeek={ onSeek }
        onSeeking={ onSeeking }
        mainColor={ "black" }
        playerState={ playerState }
        sliderStyle={ { containerStyle: {}, thumbStyle: {}, trackStyle: {} } }
      />

      <View style={ styles.iconsContainer }>
        <VideoPlayerFooter />
      </View>


    </SafeAreaView>
  );
}

export default VideoPlayer;