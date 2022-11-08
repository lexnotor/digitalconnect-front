import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarChat from '../sidebar-chat'
import './style.css'

const WrappChatPages = () => {
    return (
        <div className='wrapp-chat-pages'>
            <SidebarChat />
            <Outlet />
        </div>
    )
}

export default WrappChatPages