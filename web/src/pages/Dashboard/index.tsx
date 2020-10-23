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