import React, { useRef, useCallback, useState, useEffect} from 'react'
import Webcam from "react-webcam";
import { WebcamWrapper, ButtonsContainer, Button} from './styles'
import { TiCameraOutline } from 'react-icons/ti' 
import { BiVideoRecording } from 'react-icons/bi'
import { CgRecord } from 'react-icons/cg'
import { WebcamProps } from "react-webcam"
import { useAuth } from "../../hooks/auth"
import api from '../../services/api';
import fs from 'fs'

const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "user"
  };
  
const WebcamCapture = () => {
  const webcamRef = useRef<Webcam>(null);
  const [imageSrc, setImageSrc] = useState<string[]>([])
  const [imageCaptured, setImageCaptured] = useState(false)
  const [record, setRecord] = useState(false)
  const { user, token, signOut } = useAuth()
  const [qrcode, setQRCode] = useState('')

  const capture = useCallback(
    () => {
      setImageCaptured(!imageCaptured)
      webcamRef.current 
      ? setImageSrc([...imageSrc, webcamRef.current.getScreenshot() as string]) 
      : setImageSrc([...imageSrc])
    },
    
    [webcamRef, imageSrc, imageCaptured]
  );

  const b64toFile = (b64Data: string, filename: string, contentType: string) => {
    var sliceSize = 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);

        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    var file = new File(byteArrays, filename, {type: contentType});
    return file;
  } 


  const uploadFile = useCallback(() => {
    async function loadQRCodes() {
      try {
        await api.get(`/qrcodes`, {
          headers: { 
            'Authorization': `Bearer ${token}`
        }}).then((response: any) => {
            const qrcodeIds = response.data.map((qrcode: any) => qrcode.id)
            setQRCode(qrcodeIds[0])
        })
      } catch (err) {
        const { message } = err.response.data
        if (message === 'Invalid JWT token') {
          signOut()
        }
      }
    }

    async function uploadContentToQRCode() {
      try {
        let base64Data = imageSrc[0].replace('data:image/jpeg;base64,', '')
        console.log(`oi ${base64Data}`)
        let b64File = b64toFile(base64Data, '1.jpeg', 'image/jpeg')
        const data = new FormData()
        data.append('content', b64File)
        
        await api.post(`/qrcodes/${qrcode}`, data,
          { headers: { 
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`
            }
        }).then((response: any) => {
              console.log(response)
          })
        } catch (err) {
          const { message } = err.response.data
          if (message === 'Invalid JWT token') {
            signOut()
          }
        }
    }
      
    loadQRCodes()
    console.log(qrcode)
    uploadContentToQRCode()
  }, [imageSrc, qrcode, signOut, token])

  return (
    <>
      {console.log("WebcamCapture -> imageSrc", imageSrc)}
      <WebcamWrapper>
        {
          imageCaptured
          ? (<img src={`${imageSrc[0]}`} alt='_picture'></img>)
          : (<Webcam
              audio={false}
              ref={webcamRef as unknown as string}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />)
        }
        
        <ButtonsContainer>
            <TiCameraOutline 
              onClick={capture}
              color={imageCaptured ? '#A3B5CB' : '#F1F5F9'}
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
      { imageSrc.length ? (<Button onClick={uploadFile}>Publish Video</Button>) : null}
    </>
  );
};
  
export default WebcamCapture