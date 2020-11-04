import React, {useState, useEffect, useCallback, useRef } from 'react';
import { 
    Container,
    IconsBar,
    IconsBarWrapper,
    WebcamWrapper,
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
import WebcamCapture from '../../components/WebcamCapture'


const UploadContentQRCode = () => {
    // const WebcamComponent = () => <Webcam />;
    const history = useHistory()
    const { user, token, signOut } = useAuth();
    const [dashboardPage, setDashboardPage] = useState<'home'|'my_qrcodes'>('home')
    const [record, setRecord] = useState(false)

    // const WebcamCapture = () => {
    //     const webcamRef = React.useRef(null);
      
    //     const capture = React.useCallback(
    //       () => {
    //         const imageSrc = webcamRef.current.getScreenshot();
    //       },
    //       [webcamRef]
    // );
    
    // const WebcamCapture = () => {
    //     let webcamRef = useRef<WebcamProps>(null);
    //     console.log(webcamRef)

        // const capture = useCallback(
        //     () => {
        //         webcamRef = webcamRef as any
        //         const imageSrc = webcamRef.current.getScreenshot();
        //     },
        //     [webcamRef]
        // );

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
            {record 
            ? (
                <WebcamCapture />
            )
            : (<BiWebcam
                size={120}
                color={'#1A2B3F'}
            />)}
        </CameraContainer>
        </Container>    
    );
}


export default UploadContentQRCode