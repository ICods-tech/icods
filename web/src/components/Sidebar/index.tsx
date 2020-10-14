import React from 'react';
import { 
    IconsBar,
    IconsBarWrapper,
    SidebarContent
} from './styles'
import { AiFillHome } from 'react-icons/ai'
import { FaSignOutAlt } from 'react-icons/fa'
import { ImQrcode } from 'react-icons/im'


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
                    <AiFillHome 
                        onClick={props.homePage}
                        color={'#1A2B3F'}
                        size={27.5}    
                    />
                </IconsBar>
                <IconsBar>
                    <ImQrcode
                        onClick={props.qrCodesPage}
                        color={'#1A2B3F'}
                        size={27.5}    
                    />
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