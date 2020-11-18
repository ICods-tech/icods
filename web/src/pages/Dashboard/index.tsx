/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useState, useEffect } from 'react';
import { 
    Container,
    IconsBar,
    IconsBarWrapper,
    Header,
    HeaderTitle,
    HeaderSubtitle
} from './styles'
import { AiFillHome, AiFillGift, AiOutlineShareAlt } from 'react-icons/ai'
import { RiImageEditFill } from 'react-icons/ri'
import { FaSignOutAlt } from 'react-icons/fa'
import { ImQrcode } from 'react-icons/im'
import { useAuth } from '../../hooks/auth'
import Sidebar from '../../components/Sidebar'
import UserQRCodes from '../../components/UserQRCodes'
import { useHistory } from 'react-router-dom'


const Dashboard = () => {
    const history = useHistory()
    const { user, token, signOut } = useAuth();
    const [dashboardPage, setDashboardPage] = useState<'home'|'my_qrcodes'>('home')


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
            <Header>
                <HeaderTitle>
                    Welcome back, {user.name}
                </HeaderTitle>
                <HeaderSubtitle>
                    <ul>
                        <li><AiFillGift size={30} 
                            style={{ transform: 'translateY(-4px)' }}/> Send messages via QR Codes to your close ones when delivering gifts</li>
                        <li><AiOutlineShareAlt size={30}/>Share the emotion of being present through custom messages</li>
                        <li><RiImageEditFill size={30}/>Edit photos and videos and share them with friends</li>
                    </ul>
                </HeaderSubtitle>
            </Header>
           {dashboardPage === 'my_qrcodes' && (
                <UserQRCodes
                    token={token}
                    id={user.id}
                    signOut={signOut}
                />
           )}
        </Container>    
    );
}

export default Dashboard;