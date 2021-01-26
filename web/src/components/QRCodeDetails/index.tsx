import React, { useEffect, useState } from 'react';
import { 
  Container,
  Header,
  QRCodeContent,
  HorizontalLine,
  HeaderText,
  QRCodesWrapper
} from './styles'
import { AiFillHome } from 'react-icons/ai'
import { FaSignOutAlt } from 'react-icons/fa'
import { HiQrcode } from 'react-icons/hi'
import api from '../../services/api';
import QRCode from "qrcode.react";
import { Link } from 'react-router-dom'

interface UserQRCodesData {
  token: string;
  id: string;
  signOut: () => void;
}

const QRCodeDetails = (props: UserQRCodesData) => {
  const { id, token, signOut } = props
  const [qrcodes, setQRCodes] = useState([] as string[])
  const authHeader = `Bearer ${token}`

  useEffect(() => {
    async function loadQRCodes() {
      try {
        await api.get(`/qrcodes`, {
          headers: { 
            'Authorization': authHeader 
        }}).then((response: any) => {
            const qrcodeIds = response.data.map((qrcode: any) => qrcode.id)

            setQRCodes(qrcodeIds)
        })
      } catch (err) {
        const { message } = err.response.data
        
        if (message === 'Invalid JWT token') {
          signOut()
        }
      }
    }
      
    loadQRCodes()
  }, [id, token, authHeader, signOut])

  return (
    <Container>
      <QRCodeContent>
        <Header>
          <HeaderText>My QRCodes</HeaderText>
          <HiQrcode size={70} />
        </Header>
        <HorizontalLine/>
        <QRCodesWrapper>
          {qrcodes.map(qrcode => (
            <Link to={`/dashboard/qr_codes/${qrcode}`}>
              <QRCode value={qrcode} style={{'margin': '16px 16px'}}/>
            </Link>
            )
          )}
        </QRCodesWrapper>
      </QRCodeContent>
    </Container>     
  );
}

export default QRCodeDetails;