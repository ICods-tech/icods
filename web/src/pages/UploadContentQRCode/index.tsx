import React, {useState, useEffect, useCallback, useRef } from 'react';
import { 
    Container,
    IconsBar,
    IconsBarWrapper,
    UploadButtons,
    RecordButtons,
    ButtonsContainer,
    CameraContainer
} from './styles'
import { AiFillHome } from 'react-icons/ai'
import { FaSignOutAlt } from 'react-icons/fa'
import { ImQrcode } from 'react-icons/im'
import { useAuth } from '../../hooks/auth'
import Sidebar from '../../components/Sidebar'
import UserQRCodes from '../../components/UserQRCodes'
import { useHistory } from 'react-router-dom'
import { BiWebcam } from 'react-icons/bi'
import Webcam from "react-webcam";
import { WebcamProps } from "react-webcam"

const UploadContentQRCode = () => {
    const history = useHistory()
    const { user, token, signOut } = useAuth();
    const [dashboardPage, setDashboardPage] = useState<'home'|'my_qrcodes'>('home')
    const [record, setRecord] = useState(false)
    
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
       
    const WebcamCapture = () => {
        let webcamRef = useRef<WebcamProps>(null);
        console.log(webcamRef)
        
        const capture = useCallback(
            () => {
                webcamRef = webcamRef as any
                const imageSrc = webcamRef.current.getScreenshot();
            },
            [webcamRef]
        );

    useEffect(() => {
        console.log(dashboardPage)
    }, [dashboardPage])
    
    return (
        <Container>
          <Sidebar
              homePage={() => setDashboardPage('home')} 
              qrCodesPage={() => {
                  setDashboardPage('my_qrcodes')
              }}
              signOut={signOut}
          />
          <ButtonsContainer>
            <RecordButtons
                onClick={() => setRecord(prev => !prev)}
            >
                Record a message
            </RecordButtons>
            <UploadButtons>Upload from your machine</UploadButtons>
          </ButtonsContainer>
          <CameraContainer>
              <BiWebcam
                size={120}
                color={'#1A2B3F'}
              />
          </CameraContainer>
        </Container>    
    );
}

export default UploadContentQRCode  ;