import React, { useEffect, useState } from 'react';
import { 
  Container,
  Header,
  QRCodeContent,
  HorizontalLine,
  HeaderText
} from './styles'
import { AiFillHome } from 'react-icons/ai'
import { FaSignOutAlt } from 'react-icons/fa'
import { HiQrcode } from 'react-icons/hi'
import api from '../../services/api';


interface UserQRCodesData {
  id: string;
}

const UserQRCodes = (props: UserQRCodesData) => {
    const [qrcodes, setQRCodes] = useState([] as any[])

    useEffect(() => {
        try {
          api.get(`/qrcodes/${props.id}`).then((response: any) => {
              console.log(response.data)
          })
        } catch (err) {
            console.error(err.message)
        }
    }, [])

    return (
      <Container>
        <QRCodeContent>
          <Header>
            <HeaderText>My QRCodes</HeaderText>
            <HiQrcode size={70} />
          </Header>
          <HorizontalLine/>
        </QRCodeContent>
      </Container>     
    );
}

export default UserQRCodes;