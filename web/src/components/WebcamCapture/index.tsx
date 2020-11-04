import React, { useRef, useCallback, useState} from 'react'
import Webcam from "react-webcam";
import { WebcamWrapper, ButtonsContainer } from './styles'
import { TiCameraOutline } from 'react-icons/ti' 
import { BiVideoRecording } from 'react-icons/bi'
import { CgRecord } from 'react-icons/cg'
import { WebcamProps } from "react-webcam"

const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "user"
  };
  
  const WebcamCapture = () => {
    const webcamRef = useRef<Webcam>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null)
    const [record, setRecord] = useState(false)

    const capture = useCallback(
      () => {
        webcamRef.current 
        ? setImageSrc(webcamRef.current.getScreenshot()) 
        : setImageSrc(null)
      },
      
      [webcamRef]
    );
  
    return (
      <>
        {console.log("WebcamCapture -> imageSrc", imageSrc)}
        <WebcamWrapper>
          <Webcam
            audio={false}
            ref={webcamRef as unknown as string}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <ButtonsContainer>
            <TiCameraOutline 
              onClick={capture}
              color={'#F1F5F9'}
              size={40}
              style={{
                cursor: 'pointer',
                marginRight: '8px'
              }}
            />
            <CgRecord
              onClick={() => setRecord(prev => !prev)}
              color={record ? '#a73838' : '#F1F5F9'}
              size={40}
              style={{
                cursor: 'pointer',
                marginLeft: '8px'
              }}
            />
          </ButtonsContainer>
        </WebcamWrapper>
      </>
    );
};
  
export default WebcamCapture