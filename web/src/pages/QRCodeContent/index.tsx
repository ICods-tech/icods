import React, {useState, useEffect } from 'react';
import { 
    Container,
    IconsBar,
    IconsBarWrapper,
} from './styles'
import { AiFillHome } from 'react-icons/ai'
import { FaSignOutAlt } from 'react-icons/fa'
import { ImQrcode } from 'react-icons/im'
import { useAuth } from '../../hooks/auth'
import Sidebar from '../../components/Sidebar'
import UserQRCodes from '../../components/UserQRCodes'
import QRCodeDetails from '../../components/QRCodeDetails'
import { useHistory, useParams } from 'react-router-dom'
import api from '../../services/api'


const QRCodeContent = () => {
    const { user, token, signOut } = useAuth();
    const [dashboardPage, setDashboardPage] = useState<'home'|'my_qrcodes'>('home')
    
    return (
        <Container>
               <Sidebar
                  homePage={() => setDashboardPage('home')} 
                  qrCodesPage={() => {
                      setDashboardPage('my_qrcodes')
                  }}
                  signOut={signOut}
              /> 
        <h1 style={{ marginLeft: '120px', marginTop: '60px'}}>🏗 Em construção 👷🏽‍♂️</h1>
        </Container>
    )
    // const { id } = useParams<{id: string}>()
    // const { user, token, signOut } = useAuth();
    // const [qrcode, setQrCode] = useState()
    // const [dashboardPage, setDashboardPage] = useState<'home'|'my_qrcodes'>('home')

    // useEffect(() => {
    //     async function loadQRCodeContent() {
    //         try {
    //         await api.get(`/qrcodes/${id}`, {
    //             headers: { 
    //             'Authorization': token 
    //         }}).then((response: any) => {
    //             const qrcodeIds = response.data.map((qrcode: any) => qrcode.id)
    //         })
    //         } catch (err) {
    //         const { message } = err.response.data
            
    //         if (message === 'Invalid JWT token') {
    //             signOut()
    //         }
    //         }
    //     }
            
    //     loadQRCodeContent()
    // }, [dashboardPage, id, signOut, token])
    
    // return (
    //     <Container>
    //       <Sidebar
    //           homePage={() => setDashboardPage('home')} 
    //           qrCodesPage={() => {
    //               setDashboardPage('my_qrcodes')
    //           }}
    //           signOut={signOut}
    //       /> 
    //       <UserQRCodes
    //           token={token}
    //           id={user.id}
    //           signOut={signOut}
    //       />
    //     </Container>    
    // );
}

export default QRCodeContent;