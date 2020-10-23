import React from 'react';
import { 
    IconsBar,
    IconsBarWrapper,
    SidebarContent
} from './styles'
import { AiFillHome } from 'react-icons/ai'
import { FaSignOutAlt } from 'react-icons/fa'
import { ImQrcode } from 'react-icons/im'
import { Link } from 'react-router-dom'
import { BsCloudUpload } from 'react-icons/bs' 

interface SidebarData {
  homePage: () => void
  qrCodesPage: () => void
  signOut: () => void
}

const Sidebar = (props: SidebarData) => {
    return (
        <SidebarContent>
            <IconsBarWrapper>
                <IconsBar>
                    <Link to='/dashboard'>
                        <AiFillHome 
                            onClick={props.homePage}
                            color={'#1A2B3F'}
                            size={27.5}    
                        />
                    </Link>
                </IconsBar>
                <IconsBar>
                    <Link to='/dashboard/qr_codes'>
                        <ImQrcode
                            color={'#1A2B3F'}
                            size={27.5}    
                        />
                    </Link>
                </IconsBar>
                <IconsBar>
                    <Link to='/dashboard/new'>
                        <BsCloudUpload
                            color={'#1A2B3F'}
                            size={27.5}    
                        />
                    </Link>
                </IconsBar>
            </IconsBarWrapper>    
            <IconsBar>
                <FaSignOutAlt 
                    onClick={props.signOut}
                    style={{  
                        marginBottom: '16px',
                        transform: 'rotate(180deg)'
                    }}
                    color={'#1A2B3F'}
                    size={25}    
                />
            </IconsBar>
        </SidebarContent>   
    );
}

export default Sidebar;