import React, {useState, useEffect, useCallback, useRef, ChangeEvent } from 'react';
import { 
    Container,
    IconsBar,
    IconsBarWrapper,
    UploadButtons,
    RecordButtons,
    ButtonsContainer,
    CameraContainer,
    ImagePreview
} from './styles'
import { AiFillHome } from 'react-icons/ai'
import { FaSignOutAlt } from 'react-icons/fa'
import { ImQrcode } from 'react-icons/im'
import { FiPlus } from 'react-icons/fi'
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
    const [images, setImages] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<string[]>([])

    function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
        if (!event.target.files){
          return;
        }
        
        const selectedImages = Array.from(event.target.files) as File[]
        setImages(selectedImages);
        const selectedImagesPreview = selectedImages.map(image => {
          return URL.createObjectURL(image);
        })
        setPreviewImages(selectedImagesPreview);
    }

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

            <div>
              <label htmlFor="images">
              </label>

              <div className="images-container">
                <label htmlFor="image[]"  className="new-image">
                    <UploadButtons>Upload from your machine</UploadButtons>
                </label>
                
                {previewImages.map(image => {
                  return (
                    <ImagePreview
                        key={image} 
                        src={image} 
                        alt={image}
                    />
                  )
                })}
              </div>

              <input multiple onChange={handleSelectImage} type="file" id="image[]" style={{
                  display: 'none'
              }}>
              </input>
        </div>

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