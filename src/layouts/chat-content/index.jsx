import React from 'react'
import './style.css'
import avatar from '../../assets/images/avatar.png'
import { BiSend } from 'react-icons/bi'
import ChatBubble from '../../components/chat-bubble'

const ChatContent = () => {
    const data = []
    for (let i = 0; i < 20; i++) {
        data.push(<ChatBubble>Hello body</ChatBubble>)
        data.push(<ChatBubble right={true}>Hello bodyHello bodyHello bodyHello bodyHello bodyHello bodyHello body</ChatBubble>)
        data.push(<h5 style={{ textAlign: 'center', marginTop: '3em', color: 'var(--divider-color)' }}>Today</h5>)
    }
    return (
        <div className='ChatContent'>
            <div className="content-title">
                <img src={avatar} alt="" />
                <span>Raghav</span>
                <span>Online</span>
            </div>
            <div className='content-list'>
                {data}
            </div>
            <div className='content-writer'>
                <input type="text" />
                <button><BiSend /></button>
            </div>
        </div>
    )
}

export default ChatContent