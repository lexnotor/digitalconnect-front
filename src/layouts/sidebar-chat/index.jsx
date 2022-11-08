import React from 'react'
import './style.css'
import avatar from '../../assets/images/avatar.png'

const SidebarChat = () => {
    return (
        <div className='sidebar-chat'>
            <div className='user-profil'>
                <img src={avatar} alt="" />
            </div>
            <div className='main-menu'>

            </div>
            <div className='user-logout'></div>
        </div>
    )
}

export default SidebarChat