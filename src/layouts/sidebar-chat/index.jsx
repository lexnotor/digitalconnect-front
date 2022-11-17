import React from 'react'
import './style.css'
import avatar from '../../assets/images/avatar.png'
import { IoMdLogOut } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../redux'

const SidebarChat = () => {
    const dispatch = useDispatch()
    const logoutHandle = e => {
        dispatch(logoutUser());
    }
    return (
        <div className='sidebar-chat'>
            <div className='user-profil'>
                <img src={avatar} alt="" />
            </div>
            <div className='main-menu'>

            </div>
            <div className='user-logout'>
                <span onClick={logoutHandle}><IoMdLogOut /> </span>
            </div>
        </div>
    )
}

export default SidebarChat