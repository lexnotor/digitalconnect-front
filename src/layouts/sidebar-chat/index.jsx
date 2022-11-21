import React from 'react'
import './style.css'
import avatar from '../../assets/images/defaul_pic.svg'
import { IoMdLogOut, IoMdSettings } from 'react-icons/io'
import { BsFillChatLeftDotsFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../redux'
import { Link } from 'react-router-dom'

const SidebarChat = () => {
    const dispatch = useDispatch();
    const account = useSelector(state => state.account)
    const logoutHandle = e => {
        dispatch(logoutUser());
    }
    console.log(account)
    return (
        <div className='sidebar-chat'>
            <div className='user-profil'>
                <img src={account.image !== 'none' ? account.image : avatar} alt="" />
            </div>
            <div className='main-menu'>
                <div><Link to={"/user/chat"}><BsFillChatLeftDotsFill /> </Link></div>
                <div><Link to={"/user/account"}><IoMdSettings /></Link></div>
            </div>
            <div className='user-logout'>
                <span onClick={logoutHandle}><IoMdLogOut /> </span>
            </div>
        </div>
    )
}

export default SidebarChat